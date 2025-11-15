'''
Business: Отправка заявок с формы обратной связи на email через Яндекс SMTP
Args: event - dict with httpMethod, body (JSON with name, phone, message)
      context - object with request_id, function_name
Returns: HTTP response dict
'''
import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, field_validator

class ContactForm(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    message: str = Field(default='', max_length=1000)
    
    @field_validator('phone')
    @classmethod
    def validate_phone(cls, v: str) -> str:
        cleaned = ''.join(filter(str.isdigit, v))
        if len(cleaned) < 10:
            raise ValueError('Телефон должен содержать минимум 10 цифр')
        return v

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Метод не поддерживается'})
        }
    
    # Parse body
    body_data = json.loads(event.get('body', '{}'))
    
    # Validate with Pydantic
    form = ContactForm(**body_data)
    
    # Get secrets
    sender_email = os.environ.get('YANDEX_EMAIL')
    sender_password = os.environ.get('YANDEX_APP_PASSWORD')
    
    if not sender_email or not sender_password:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Настройки email не заданы'})
        }
    
    # Create email
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка от {form.name}'
    msg['From'] = sender_email
    msg['To'] = sender_email
    
    # Email body
    text = f"""
Новая заявка с сайта БУРЕВЕСТНИК-РУС

Имя: {form.name}
Телефон: {form.phone}
Сообщение: {form.message if form.message else 'Не указано'}

---
Заявка получена автоматически с сайта
"""
    
    html = f"""
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #c9a961; border-radius: 10px;">
        <h2 style="color: #c9a961; margin-bottom: 20px;">🛡️ Новая заявка с сайта БУРЕВЕСТНИК-РУС</h2>
        
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
            <p style="margin: 5px 0;"><strong>Имя:</strong> {form.name}</p>
            <p style="margin: 5px 0;"><strong>Телефон:</strong> <a href="tel:{form.phone}" style="color: #c9a961;">{form.phone}</a></p>
            <p style="margin: 5px 0;"><strong>Сообщение:</strong> {form.message if form.message else 'Не указано'}</p>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Заявка получена автоматически с сайта охранных услуг
        </p>
    </div>
</body>
</html>
"""
    
    msg.attach(MIMEText(text, 'plain', 'utf-8'))
    msg.attach(MIMEText(html, 'html', 'utf-8'))
    
    # Send email via Yandex SMTP
    try:
        with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
            server.login(sender_email, sender_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
        }
    
    except smtplib.SMTPAuthenticationError:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Ошибка авторизации в почте. Проверьте пароль приложения'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'})
        }
