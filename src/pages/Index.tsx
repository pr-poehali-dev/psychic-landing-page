import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingOpen, setBookingOpen] = useState(false);

  const services = [
    {
      title: 'Личная консультация',
      description: 'Индивидуальный расклад на важные жизненные вопросы',
      price: '3000 ₽',
      duration: '60 мин',
      icon: 'Eye'
    },
    {
      title: 'Любовное гадание', 
      description: 'Узнайте правду об отношениях и будущем с партнером',
      price: '2500 ₽',
      duration: '45 мин',
      icon: 'Heart'
    },
    {
      title: 'Карьерный прогноз',
      description: 'Профессиональные перспективы и финансовое будущее',
      price: '2800 ₽',
      duration: '50 мин',
      icon: 'TrendingUp'
    },
    {
      title: 'Диагностика ауры',
      description: 'Энергетическое состояние и рекомендации по очищению',
      price: '2000 ₽',
      duration: '30 мин',
      icon: 'Sparkles'
    },
    {
      title: 'Родовая карма',
      description: 'Работа с родовыми программами и кармическими долгами',
      price: '4000 ₽',
      duration: '90 мин',
      icon: 'Users'
    },
    {
      title: 'Магическая защита',
      description: 'Постановка защитных барьеров и очищение от негатива',
      price: '3500 ₽',
      duration: '60 мин',
      icon: 'Shield'
    }
  ];

  const timeSlots = [
    '09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30'
  ];

  const testimonials = [
    {
      name: 'Анна К.',
      text: 'Белла предсказала мне встречу с будущим мужем с точностью до деталей! Всё сбылось через полгода.',
      rating: 5
    },
    {
      name: 'Дмитрий М.',
      text: 'Консультация по карьере помогла принять правильное решение. Благодаря советам получил повышение.',
      rating: 5
    },
    {
      name: 'Елена В.',
      text: 'Работа с родовой кармой изменила мою жизнь. Наконец-то разорвала негативные семейные сценарии.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Eye" className="text-primary" size={28} />
              <span className="text-xl font-bold">Белла Мистик</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
              <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Icon name="CalendarDays" size={20} />
                    Онлайн запись на консультацию
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Выберите дату</h3>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Доступное время</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                            className="text-sm"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Ваше имя" />
                      <Input placeholder="Телефон" type="tel" />
                    </div>
                    <Input placeholder="Email" type="email" />
                    <Textarea placeholder="Опишите ваш вопрос (необязательно)" />
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Подтвердить запись
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Открою тайны
                  <span className="text-primary block">вашего будущего</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Профессиональная ясновидящая с 15-летним опытом. Помогу найти ответы на самые важные жизненные вопросы через древние практики и интуитивные знания.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться на консультацию
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button size="lg" variant="outline">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Star" className="text-yellow-400 fill-current" size={16} />
                  <span>4.9/5 из 127 отзывов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" size={16} />
                  <span>100% конфиденциально</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/img/69f4301b-f3f7-4da0-895f-2769d1e8761a.jpg"
                  alt="Белла Мистик - профессиональная ясновидящая"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Мои услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Индивидуальный подход к каждому клиенту. Работаю с различными методами гадания и духовными практиками.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon name={service.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/img/e0a75278-8bb1-41f1-b9f1-1bea825555ce.jpg"
                alt="Магические атрибуты"
                className="w-full aspect-square object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">О моих способностях</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Дар ясновидения проявился у меня в детстве. Более 15 лет помогаю людям найти ответы на важные жизненные вопросы, используя древние методы гадания и современные энергетические практики.
                </p>
                <p>
                  Специализируюсь на картах Таро, рунических практиках, работе с чакрами и энергетическими потоками. Каждая консультация — это индивидуальный подход к вашей ситуации.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Точность прогнозов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-6 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят люди о моих консультациях</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/10 py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Eye" className="text-primary" size={24} />
                <span className="text-lg font-bold">Белла Мистик</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные эзотерические консультации с 15-летним опытом
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@bellamystic.ru</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Время работы</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>Пн-Пт: 09:00 - 21:00</div>
                <div>Сб-Вс: 10:00 - 20:00</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="sm" variant="outline">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button size="sm" variant="outline">
                  <Icon name="MessageCircle" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Белла Мистик. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}