import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    { icon: 'Music', title: 'Концерты', description: 'Охрана концертов' },
    { icon: 'Briefcase', title: 'Корпоративы', description: 'Охрана корпоративов' },
    { icon: 'Sparkles', title: 'Вечеринки', description: 'Охрана для вечеринок' },
    { icon: 'Heart', title: 'Свадьбы', description: 'Охрана для свадьбы' },
    { icon: 'Users', title: 'Конференции', description: 'Охрана бизнес-конференций' },
    { icon: 'Handshake', title: 'Встречи', description: 'Охрана бизнес-встреч' },
    { icon: 'Store', title: 'Выставки', description: 'Охрана выставок' },
    { icon: 'Calendar', title: 'Праздники', description: 'Охрана праздников' },
    { icon: 'Home', title: 'Частные', description: 'Охрана частных мероприятий' },
    { icon: 'Trophy', title: 'Спорт', description: 'Охрана спортивных мероприятий' },
    { icon: 'Gift', title: 'Частные праздники', description: 'Охрана частных праздников' },
    { icon: 'Baby', title: 'Детские', description: 'Охрана детских праздников' }
  ];

  const features = [
    { icon: 'Shield', title: 'Безопасность', description: 'Контроль и обеспечение безопасности всех участников' },
    { icon: 'UserCheck', title: 'Контроль доступа', description: 'Проверка приглашений и досмотр гостей' },
    { icon: 'Video', title: 'Видеонаблюдение', description: 'Профессиональное оборудование и мониторинг' },
    { icon: 'Clock', title: '24/7 Поддержка', description: 'Круглосуточная готовность к выезду' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gold/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-gold" size={32} />
              <div>
                <h1 className="text-xl font-bold text-white font-montserrat">БУРЕВЕСТНИК-РУС</h1>
                <p className="text-xs text-gold">Охранные услуги</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Услуги', 'О компании', 'Тарифы', 'Лицензии', 'Отзывы', 'Контакты'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-gold transition-colors font-montserrat text-sm">
                  {item}
                </a>
              ))}
            </div>
            <Button className="hidden md:block bg-gradient-to-r from-gold to-gold-dark text-black font-bold hover:opacity-90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-black via-gray-dark to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,169,97,0.1),transparent_50%)]" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="text-gold text-sm font-montserrat">Профессиональная охрана мероприятий</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat animate-fade-in">
              Охрана мероприятий<br />
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                в Москве и МО
              </span>
            </h1>
            <p className="text-xl text-gray-light mb-8 max-w-2xl mx-auto">
              ЧОП «БУРЕВЕСТНИК-РУС» обеспечит охрану порядка любых массовых мероприятий: концерты, корпоративы, спортивные мероприятия, бизнес-конференции
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-gold to-gold-dark text-black font-bold text-lg px-8 py-6 hover:opacity-90 hover-scale">
                <Icon name="Shield" size={20} className="mr-2" />
                Заказать охрану
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                8 (499) 000-00-00
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold font-montserrat">10+</div>
                <div className="text-sm text-gray-light mt-1">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold font-montserrat">500+</div>
                <div className="text-sm text-gray-light mt-1">Мероприятий</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold font-montserrat">100%</div>
                <div className="text-sm text-gray-light mt-1">Гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Banner */}
      <section className="py-8 bg-gradient-to-r from-gold via-gold-light to-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-black font-montserrat text-2xl font-bold">
                Охрана для мероприятия от 1200 ₽/час
              </p>
            </div>
            <Button size="lg" className="bg-black text-white hover:bg-gray-dark font-bold">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-dark">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 font-montserrat">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-dark border-gold/20 hover:border-gold/50 transition-all hover-scale">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-black" />
                  </div>
                  <CardTitle className="text-white font-montserrat">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-light">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="о компании" className="py-20 px-4 bg-gradient-to-b from-black to-gray-dark">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
                О компании БУРЕВЕСТНИК-РУС
              </h2>
              <p className="text-gold text-xl font-semibold">Надежная защита вашего мероприятия с 2015 года</p>
            </div>

            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-gray-dark to-black border-gold/30">
                <CardContent className="p-8">
                  <p className="text-gray-light text-lg leading-relaxed mb-6">
                    <span className="text-white font-semibold">ЧОП «БУРЕВЕСТНИК-РУС»</span> — это профессиональная охранная компания, 
                    специализирующаяся на обеспечении безопасности массовых мероприятий любого масштаба. 
                    Мы работаем в Москве и Московской области более 10 лет, за это время успешно обеспечили 
                    безопасность более 500 мероприятий.
                  </p>
                  <p className="text-gray-light text-lg leading-relaxed">
                    Наша команда — это <span className="text-gold font-semibold">опытные специалисты</span> с профильным образованием, 
                    прошедшие строгий отбор и регулярное обучение. Мы используем современное оборудование 
                    для видеонаблюдения и связи, что позволяет оперативно реагировать на любые ситуации.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black border-gold/30 hover:border-gold transition-all">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" size={36} className="text-black" />
                    </div>
                    <CardTitle className="text-white font-montserrat">Квалифицированный персонал</CardTitle>
                    <CardDescription className="text-gray-light">
                      Все сотрудники имеют лицензии частного охранника и регулярно проходят аттестацию
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-black border-gold/30 hover:border-gold transition-all">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Headphones" size={36} className="text-black" />
                    </div>
                    <CardTitle className="text-white font-montserrat">Индивидуальный подход</CardTitle>
                    <CardDescription className="text-gray-light">
                      Разрабатываем план охраны с учетом специфики вашего мероприятия
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-black border-gold/30 hover:border-gold transition-all">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="BadgeCheck" size={36} className="text-black" />
                    </div>
                    <CardTitle className="text-white font-montserrat">Гарантии качества</CardTitle>
                    <CardDescription className="text-gray-light">
                      Работаем официально по договору со страхованием ответственности
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-gold/10 to-gold-dark/10 border-gold/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Icon name="Award" size={48} className="text-gold" />
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2 font-montserrat">Наша миссия</h3>
                      <p className="text-gray-light">
                        Обеспечить безопасность и спокойствие на вашем мероприятии, чтобы вы могли 
                        сосредоточиться на главном, доверив охрану профессионалам.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="услуги" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
              Категории охраны мероприятий
            </h2>
            <p className="text-gray-light text-lg">Профессиональная охрана любого типа мероприятий</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-b from-gray-dark to-black border-gold/20 hover:border-gold transition-all hover-scale cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold-dark/20 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={36} className="text-gold" />
                  </div>
                  <CardTitle className="text-white font-montserrat text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-gray-light text-sm">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-dark to-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4 font-montserrat">
            Как мы работаем
          </h2>
          <p className="text-center text-gray-light mb-12">Всё предельно прозрачно и просто</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Встреча с заказчиком', icon: 'Users' },
              { step: '2', title: 'Обсуждение специфики работы', icon: 'FileText' },
              { step: '3', title: 'Заключение договора', icon: 'FileCheck' },
              { step: '4', title: 'Оплата', icon: 'CreditCard' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="bg-black border-gold/30 hover:border-gold transition-all text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black font-montserrat">
                      {item.step}
                    </div>
                    <CardTitle className="text-white text-lg font-montserrat">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-gold" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="отзывы" className="py-20 px-4 bg-gradient-to-b from-black to-gray-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
              Отзывы наших клиентов
            </h2>
            <p className="text-gray-light text-lg">Что говорят о нас заказчики</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Алексей Морозов',
                company: 'Event Agency "Премиум"',
                text: 'Сотрудничаем с БУРЕВЕСТНИК-РУС уже второй год. Охраняли более 20 наших мероприятий - всегда профессионально и без нареканий. Особенно порадовала работа на корпоративе с 500+ гостями.',
                rating: 5
              },
              {
                name: 'Марина Соколова',
                company: 'Ресторан "Seasons"',
                text: 'Заказывали охрану для свадьбы дочери. Очень переживали, но ребята работали незаметно и тактично. Гости даже не заметили охрану, но порядок был идеальный. Спасибо!',
                rating: 5
              },
              {
                name: 'Игорь Петров',
                company: 'ООО "ТехноСтрой"',
                text: 'Организовывали выставку строительного оборудования. БУРЕВЕСТНИК-РУС обеспечил полный контроль доступа, досмотр и безопасность экспонатов. Работают четко по регламенту.',
                rating: 5
              },
              {
                name: 'Елена Васильева',
                company: 'Концертное агентство',
                text: 'Охраняли концерт на 2000 человек. Отлично организовали потоки людей, не было давки и конфликтов. Профессионалы своего дела! Будем обращаться ещё.',
                rating: 5
              },
              {
                name: 'Дмитрий Кузнецов',
                company: 'Спортивный клуб "Чемпион"',
                text: 'Заказывали охрану для турнира по боксу. Сотрудники опытные, физически подготовленные, знают как работать с большими скоплениями людей. Рекомендую!',
                rating: 5
              },
              {
                name: 'Ольга Романова',
                company: 'Банкетный зал "Версаль"',
                text: 'Постоянно заказываем охрану для банкетов и праздников. Ребята всегда приезжают вовремя, работают аккуратно и вежливо. Цены адекватные, качество на высоте. Очень довольны сотрудничеством!',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-dark to-black border-gold/20 hover:border-gold/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-black font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-white text-base font-montserrat">{review.name}</CardTitle>
                      <CardDescription className="text-gold text-sm">{review.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-gray-light text-sm leading-relaxed">{review.text}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* License Section */}
      <section id="лицензии" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
              Лицензия и сертификаты
            </h2>
            <p className="text-gray-light text-lg">Мы работаем официально и имеем все необходимые разрешения</p>
          </div>
          
          <Card className="bg-gradient-to-br from-gray-dark to-black border-2 border-gold/30 hover:border-gold transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheck" size={48} className="text-black" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
                    Лицензия на осуществление частной охранной деятельности
                  </h3>
                  <div className="space-y-2 text-gray-light">
                    <p className="text-lg">
                      <span className="text-gold font-semibold">№ Л056-00106-77/02339889</span>
                    </p>
                    <p className="text-lg">
                      от <span className="text-gold font-semibold">21 мая 2025 г.</span>
                    </p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-lg">
                    <Icon name="CheckCircle" size={20} className="text-gold" />
                    <span className="text-gold font-semibold">Проверено и подтверждено</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'Award', text: 'Официально' },
              { icon: 'FileCheck', text: 'Все разрешения' },
              { icon: 'ShieldCheck', text: 'Страхование' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-black/50 border border-gold/20 rounded-lg p-4">
                <Icon name={item.icon as any} size={24} className="text-gold" />
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="контакты" className="py-20 px-4 bg-gradient-to-b from-gray-dark to-black">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-gray-dark border-gold/30">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white font-montserrat">
                Есть вопросы? Мы перезвоним!
              </CardTitle>
              <CardDescription className="text-gray-light text-lg">
                Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black border-gold/30 text-white placeholder:text-gray-light focus:border-gold"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-black border-gold/30 text-white placeholder:text-gray-light focus:border-gold"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Сообщение (необязательно)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black border-gold/30 text-white placeholder:text-gray-light focus:border-gold min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-gold to-gold-dark text-black font-bold text-lg py-6 hover:opacity-90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-light text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" className="text-gold" size={32} />
                <h3 className="text-xl font-bold text-white font-montserrat">БУРЕВЕСТНИК-РУС</h3>
              </div>
              <p className="text-gray-light text-sm mb-4">
                индекс 109156, г. Люберцы,<br />
                ул. Комсомольская д. 15А, пом. 25
              </p>
              <p className="text-gray-light text-sm">Пн-Пт: 8:00 - 21:00</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 font-montserrat">Охрана объектов</h4>
              <ul className="space-y-2 text-sm text-gray-light">
                <li>Ресторанов и кафе</li>
                <li>Магазинов</li>
                <li>Офисов</li>
                <li>Банков</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 font-montserrat">Охрана мероприятий</h4>
              <ul className="space-y-2 text-sm text-gray-light">
                <li>Концертов</li>
                <li>Корпоративов</li>
                <li>Свадеб</li>
                <li>Спортивных мероприятий</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 font-montserrat">Контакты</h4>
              <div className="space-y-3">
                <a href="tel:84990000000" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
                  <Icon name="Phone" size={16} />
                  8 (499) 000-00-00
                </a>
                <a href="mailto:sales@brv-rus.ru" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
                  <Icon name="Mail" size={16} />
                  sales@brv-rus.ru
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gold/20 pt-8 text-center text-gray-light text-sm">
            <p>&copy; 2025 ЧОП «БУРЕВЕСТНИК-РУС». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;