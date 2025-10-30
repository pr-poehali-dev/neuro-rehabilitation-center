import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Events = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [homeServiceOpen, setHomeServiceOpen] = useState(false);

  const benefits = {
    specialists: [
      { icon: 'TrendingUp', text: 'Повышение профессиональной квалификации' },
      { icon: 'BookOpen', text: 'Новые методики для работы' },
      { icon: 'Award', text: 'Сертификат участника' },
      { icon: 'Users', text: 'Обмен опытом с коллегами' },
    ],
    parents: [
      { icon: 'Heart', text: 'Понимание особенностей ребенка' },
      { icon: 'Wrench', text: 'Практические инструменты помощи' },
      { icon: 'MessageCircle', text: 'Ответы на конкретные вопросы' },
      { icon: 'HandHeart', text: 'Поддержка сообщества' },
    ],
    students: [
      { icon: 'Lightbulb', text: 'Уникальные знания от практиков' },
      { icon: 'HelpCircle', text: 'Возможность задать вопросы экспертам' },
      { icon: 'Briefcase', text: 'Знакомство с будущими работодателями' },
      { icon: 'GraduationCap', text: 'Углубление профильного образования' },
    ],
  };

  const archiveEvents = [
    {
      date: 'Сентябрь 2024',
      title: 'Семинар: «Нейрореабилитация после черепно-мозговых травм»',
      participants: 35,
      materials: 'Доступны для скачивания',
    },
    {
      date: 'Июнь 2024',
      title: 'Мастер-класс: «Логопедический массаж в коррекции дизартрии»',
      participants: 28,
      materials: 'Фотоотчет доступен в галерее',
    },
    {
      date: 'Март 2024',
      title: 'Круглый стол: «Интеграция детей с ОВЗ в образовательную среду»',
      participants: 42,
      materials: 'Видеозапись доступна для просмотра',
    },
  ];

  const testimonials = [
    {
      quote: 'Открыла для себя новые методы работы',
      author: 'Марина, логопед-дефектолог',
      text: 'Посещаю ваши семинары регулярно. Всегда получаю практические знания, которые сразу могу применять в работе. Спасибо за качественную организацию!',
    },
    {
      quote: 'Наконец-то поняла, как помочь своему ребенку',
      author: 'Ольга, мама ребенка с РАС',
      text: 'После конференции по аутизму наша жизнь изменилась. Получила конкретные рекомендации и главное — понимание, что делать дальше.',
    },
    {
      quote: 'Отличная площадка для профессионального роста',
      author: 'Сергей, студент медвуза',
      text: 'Как будущему неврологу, мне очень ценен такой практический опыт. Спасибо за возможность учиться у лучших специалистов!',
    },
  ];

  const participationFormats = [
    {
      icon: 'Ticket',
      title: 'Очное участие',
      features: [
        'Живое общение с спикерами',
        'Практические мастер-классы',
        'Неформальное общение в перерывах',
        'Раздаточные материалы',
      ],
    },
    {
      icon: 'Monitor',
      title: 'Онлайн-трансляция',
      features: [
        'Участие из любого города',
        'Запись мероприятия',
        'Возможность задавать вопросы',
        'Электронные материалы',
      ],
    },
    {
      icon: 'BookOpen',
      title: 'Запись мероприятия',
      features: [
        'Доступ в любое время',
        'Повторный просмотр',
        'Все материалы в одном месте',
        'Доступ на 30 дней',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Можно ли получить налоговый вычет за участие?',
      answer: 'Да, для специалистов мы предоставляем все необходимые документы для налогового вычета.',
    },
    {
      question: 'Есть ли скидки для студентов?',
      answer: 'Да, студентам предоставляем скидку 30% на все мероприятия при предъявлении студенческого билета.',
    },
    {
      question: 'Можно ли оплатить участие в рассрочку?',
      answer: 'Да, для дорогостоящих курсов возможна оплата в 2 этапа.',
    },
    {
      question: 'Предоставляются ли материалы мероприятия?',
      answer: 'Да, все участники получают полный пакет материалов в электронном виде.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-primary shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <Icon name="Sparkles" className="h-8 w-8 text-primary-foreground" />
              <span className="text-xl font-bold text-primary-foreground">Потенциал</span>
            </a>
          </div>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-primary-foreground hover:text-accent transition-colors" href="/">
                    Главная
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-primary-foreground hover:text-accent data-[state=open]:text-accent">О нас</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      <li><a href="/#about" className="block rounded-md p-2 text-sm hover:bg-accent">Наша философия</a></li>
                      <li><a href="/#team" className="block rounded-md p-2 text-sm hover:bg-accent">Команда</a></li>
                      <li><a href="#" className="block rounded-md p-2 text-sm hover:bg-accent">Лицензии и документы</a></li>
                      <li><a href="#" className="block rounded-md p-2 text-sm hover:bg-accent">Галерея</a></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-primary-foreground hover:text-accent data-[state=open]:text-accent">Детям</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-2 p-4">
                      <li className="font-semibold text-xs text-muted-foreground px-2">Консультации и диагностика</li>
                      <li><a href="/services/neurologist" className="block rounded-md p-2 text-sm hover:bg-accent">Невролог</a></li>
                      <li><a href="#" className="block rounded-md p-2 text-sm hover:bg-accent">Диагностика готовности к школе</a></li>
                      <li className="font-semibold text-xs text-muted-foreground px-2 mt-2">Терапия</li>
                      <li><a href="#" className="block rounded-md p-2 text-sm hover:bg-accent">Бобат-терапия</a></li>
                      <li><a href="#" className="block rounded-md p-2 text-sm hover:bg-accent">БАК</a></li>
                      <li><a href="#" className="block rounded-md p-2 text-sm hover:bg-accent">ЛФК/АФК</a></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-primary-foreground hover:text-accent data-[state=open]:text-accent">Взрослым</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-2 p-4">
                      <li className="font-semibold text-xs text-muted-foreground px-2">Консультации</li>
                      <li><a href="#" className="block rounded-md p-2 text-sm hover:bg-accent">Невролог</a></li>
                      <li><a href="#" className="block rounded-md p-2 text-sm hover:bg-accent">ЭЭГ</a></li>
                      <li className="font-semibold text-xs text-muted-foreground px-2 mt-2">Терапия</li>
                      <li><a href="#" className="block rounded-md p-2 text-sm hover:bg-accent">Рефлексотерапия</a></li>
                      <li><a href="#" className="block rounded-md p-2 text-sm hover:bg-accent">БАК</a></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-primary-foreground hover:text-accent transition-colors" href="#">
                    Программы
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-primary-foreground hover:text-accent transition-colors" href="/events">
                    Мероприятия
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-primary-foreground hover:text-accent transition-colors" href="/#contact">
                    Контакты
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:text-accent hover:bg-primary/90" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Меню</SheetTitle>
          </SheetHeader>
          <nav className="mt-6 flex flex-col gap-2">
            <a href="/" className="rounded-md p-3 text-sm font-medium hover:bg-accent">Главная</a>
            <a href="/#about" className="rounded-md p-3 text-sm font-medium hover:bg-accent">О нас</a>
            <a href="/services/neurologist" className="rounded-md p-3 text-sm font-medium hover:bg-accent">Детям</a>
            <a href="/#services" className="rounded-md p-3 text-sm font-medium hover:bg-accent">Взрослым</a>
            <a href="#" className="rounded-md p-3 text-sm font-medium hover:bg-accent">Программы</a>
            <a href="/events" className="rounded-md p-3 text-sm font-medium hover:bg-accent">Мероприятия</a>
            <a href="/#contact" className="rounded-md p-3 text-sm font-medium hover:bg-accent">Контакты</a>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Sheet open={homeServiceOpen} onOpenChange={setHomeServiceOpen}>
          <SheetTrigger asChild>
            <Button size="lg" className="shadow-lg">
              <Icon name="Home" className="mr-2 h-5 w-5" />
              Специалист на дом
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Специалист на дом</SheetTitle>
            </SheetHeader>
            <form className="mt-6 space-y-4">
              <div>
                <Label htmlFor="home-name">Ваше имя</Label>
                <Input id="home-name" placeholder="Введите имя" />
              </div>
              <div>
                <Label htmlFor="home-phone">Телефон</Label>
                <Input id="home-phone" type="tel" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <Label htmlFor="home-service">Услуга</Label>
                <Input id="home-service" placeholder="Невролог, психолог, др." />
              </div>
              <div>
                <Label htmlFor="home-address">Адрес</Label>
                <Input id="home-address" placeholder="Укажите адрес" />
              </div>
              <div>
                <Label htmlFor="home-comment">Комментарий</Label>
                <Textarea id="home-comment" placeholder="Дополнительная информация" />
              </div>
              <Button className="w-full">Отправить заявку</Button>
            </form>
          </SheetContent>
        </Sheet>

        <Sheet open={registrationOpen} onOpenChange={setRegistrationOpen}>
          <SheetTrigger asChild>
            <Button size="lg" className="shadow-lg">
              <Icon name="Calendar" className="mr-2 h-5 w-5" />
              Записаться на прием
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Записаться на прием</SheetTitle>
            </SheetHeader>
            <form className="mt-6 space-y-4">
              <div>
                <Label htmlFor="appt-name">Ваше имя</Label>
                <Input id="appt-name" placeholder="Введите имя" />
              </div>
              <div>
                <Label htmlFor="appt-phone">Телефон</Label>
                <Input id="appt-phone" type="tel" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <Label htmlFor="appt-service">Услуга/специалист</Label>
                <Input id="appt-service" placeholder="Консультация невролога" />
              </div>
              <div>
                <Label htmlFor="appt-date">Удобная дата/время</Label>
                <Input id="appt-date" type="datetime-local" />
              </div>
              <Button className="w-full">Отправить заявку</Button>
            </form>
          </SheetContent>
        </Sheet>

        <Sheet open={callbackOpen} onOpenChange={setCallbackOpen}>
          <SheetTrigger asChild>
            <Button size="lg" variant="secondary" className="shadow-lg">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Заказать звонок
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Заказать звонок</SheetTitle>
            </SheetHeader>
            <form className="mt-6 space-y-4">
              <div>
                <Label htmlFor="call-name">Ваше имя</Label>
                <Input id="call-name" placeholder="Введите имя" />
              </div>
              <div>
                <Label htmlFor="call-phone">Телефон</Label>
                <Input id="call-phone" type="tel" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <Label htmlFor="call-time">Удобное время для звонка</Label>
                <Input id="call-time" type="time" />
              </div>
              <Button className="w-full">Заказать звонок</Button>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/21c67491-5d3c-416c-8c88-d39ecde31b47/files/e39b4e93-9ce4-4a51-9c15-79e8c12fd849.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/90"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Экспертные знания — доступно каждому
            </h1>
            <p className="mb-4 text-xl font-semibold text-accent md:text-2xl">
              Конференции, семинары и мастер-классы от ведущих специалистов центра «Потенциал»
            </p>
            <p className="mb-8 text-base text-white/90 md:text-lg">
              Мы делимся опытом и современными знаниями в области неврологии и реабилитации. Присоединяйтесь к профессиональному сообществу!
            </p>

            <div className="mb-8 grid gap-4 text-left sm:grid-cols-2 md:text-base text-sm">
              <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <Icon name="Target" className="h-6 w-6 flex-shrink-0 text-accent" />
                <span className="text-white">Актуальные методики лечения</span>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <Icon name="Users" className="h-6 w-6 flex-shrink-0 text-accent" />
                <span className="text-white">Живое общение с экспертами</span>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <Icon name="Lightbulb" className="h-6 w-6 flex-shrink-0 text-accent" />
                <span className="text-white">Практические знания для применения</span>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <Icon name="Handshake" className="h-6 w-6 flex-shrink-0 text-accent" />
                <span className="text-white">Новые профессиональные контакты</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-base" onClick={() => document.getElementById('upcoming')?.scrollIntoView({ behavior: 'smooth' })}>
                Узнать о ближайших мероприятиях
                <Icon name="ArrowDown" className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base border-white text-white hover:bg-white hover:text-primary" onClick={() => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })}>
                Смотреть архив мероприятий
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="upcoming" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Ближайшие мероприятия
          </h2>

          <Card className="mx-auto max-w-4xl border-2 shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="mb-2 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                    15 ноября 2024
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    Медико-психолого-педагогическая конференция
                  </h3>
                  <p className="text-lg font-semibold text-muted-foreground">
                    «Проблемы детей с расстройством аутистического спектра: диагностика, коррекция и поддержка в семье»
                  </p>
                </div>
              </div>

              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Дата и время:</p>
                    <p className="text-muted-foreground">15 ноября 2024, 10:00-17:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Место проведения:</p>
                    <p className="text-muted-foreground">Центр «Потенциал», ул. Грибоедова, д. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Ведущие:</p>
                    <p className="text-muted-foreground">Носова Алёна Валерьевна, Горяйнова Яна Олеговна</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="DollarSign" className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Стоимость участия:</p>
                    <p className="text-muted-foreground">1 500 ₽</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-lg font-semibold">Для кого:</h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                    <span className="text-sm">Родители детей с РАС</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                    <span className="text-sm">Педагоги и дефектологи</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                    <span className="text-sm">Психологи и логопеды</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                    <span className="text-sm">Студенты профильных специальностей</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-lg font-semibold">Программа конференции:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3 rounded-lg bg-muted/50 p-3">
                    <span className="font-semibold text-primary">10:00-11:30</span>
                    <span>Современные подходы к диагностике РАС</span>
                  </div>
                  <div className="flex gap-3 rounded-lg bg-muted/50 p-3">
                    <span className="font-semibold text-primary">11:30-13:00</span>
                    <span>Эффективные методы коррекции</span>
                  </div>
                  <div className="flex gap-3 rounded-lg bg-muted/50 p-3">
                    <span className="font-semibold text-primary">13:00-14:00</span>
                    <span>Перерыв на обед</span>
                  </div>
                  <div className="flex gap-3 rounded-lg bg-muted/50 p-3">
                    <span className="font-semibold text-primary">14:00-15:30</span>
                    <span>Работа с семьей: психологическая поддержка</span>
                  </div>
                  <div className="flex gap-3 rounded-lg bg-muted/50 p-3">
                    <span className="font-semibold text-primary">15:30-17:00</span>
                    <span>Практические кейсы и разбор сложных случаев</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full" onClick={() => setRegistrationOpen(true)}>
                Зарегистрироваться на конференцию
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Преимущества участия
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon name="Briefcase" className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-4 text-center text-xl font-semibold text-primary">Для специалистов</h3>
                <ul className="space-y-3">
                  {benefits.specialists.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name={benefit.icon} className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon name="Users" className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-4 text-center text-xl font-semibold text-primary">Для родителей</h3>
                <ul className="space-y-3">
                  {benefits.parents.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name={benefit.icon} className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-4 text-center text-xl font-semibold text-primary">Для студентов</h3>
                <ul className="space-y-3">
                  {benefits.students.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name={benefit.icon} className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="archive" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Архив мероприятий
          </h2>

          <div className="mx-auto max-w-4xl space-y-4">
            {archiveEvents.map((event, index) => (
              <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 inline-block rounded-full bg-muted px-3 py-1 text-sm font-semibold text-primary">
                        {event.date}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Users" className="h-4 w-4" />
                          Участников: {event.participants}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="FileText" className="h-4 w-4" />
                          {event.materials}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" variant="outline">
              Смотреть все прошедшие мероприятия
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Отзывы участников
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <Icon name="Quote" className="h-12 w-12 text-primary/20" />
                  </div>
                  <h3 className="mb-2 text-center text-lg font-semibold text-primary">
                    {testimonial.quote}
                  </h3>
                  <p className="mb-4 text-center text-sm font-semibold text-muted-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Формы участия
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {participationFormats.map((format, index) => (
              <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Icon name={format.icon} className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-xl font-semibold text-primary">{format.title}</h3>
                  <ul className="space-y-3">
                    {format.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
              Организационная информация
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Как принять участие в мероприятии
            </p>

            <div className="mb-12 grid gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  1
                </div>
                <p className="text-sm font-semibold">Выберите мероприятие из расписания</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  2
                </div>
                <p className="text-sm font-semibold">Зарегистрируйтесь через форму на сайте</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  3
                </div>
                <p className="text-sm font-semibold">Оплатите участие любым удобным способом</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  4
                </div>
                <p className="text-sm font-semibold">Получите подтверждение и подробную программу</p>
              </div>
            </div>

            <h3 className="mb-6 text-center text-2xl font-bold text-primary">Частые вопросы</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Партнеры мероприятий
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Наши постоянные партнеры:
            </p>

            <div className="mb-8 grid gap-4 text-left sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg bg-background p-4">
                <Icon name="Building2" className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Департамент здравоохранения г. Коврова</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-background p-4">
                <Icon name="Heart" className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Центр социальной помощи семье и детям</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-background p-4">
                <Icon name="Users" className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Ассоциация дефектологов Владимирской области</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-background p-4">
                <Icon name="Star" className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Благотворительный фонд «Дети-ангелы»</span>
              </div>
            </div>

            <Button size="lg" variant="outline">
              Стать партнером мероприятия
              <Icon name="Handshake" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/21c67491-5d3c-416c-8c88-d39ecde31b47/files/e39b4e93-9ce4-4a51-9c15-79e8c12fd849.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <Card className="border-2 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="mb-4 text-center text-3xl font-bold text-primary">
                  Готовы присоединиться к нашему сообществу?
                </h2>
                <p className="mb-6 text-center text-muted-foreground">
                  Зарегистрируйтесь на ближайшее мероприятие и получите:
                </p>

                <div className="mb-6 grid gap-3 sm:grid-cols-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary" />
                    <span>Доступ к эксклюзивным знаниям</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary" />
                    <span>Практические навыки для работы</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary" />
                    <span>Сертификат участника</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary" />
                    <span>Новые профессиональные контакты</span>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <Label htmlFor="reg-name">Имя и фамилия</Label>
                    <Input id="reg-name" placeholder="Введите имя и фамилию" />
                  </div>
                  <div>
                    <Label htmlFor="reg-phone">Телефон</Label>
                    <Input id="reg-phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="reg-email">Email</Label>
                    <Input id="reg-email" type="email" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <Label htmlFor="reg-event">Выбор мероприятия</Label>
                    <Input id="reg-event" placeholder="Конференция по РАС, 15 ноября" />
                  </div>
                  <div>
                    <Label htmlFor="reg-comment">Комментарий или вопрос</Label>
                    <Textarea id="reg-comment" placeholder="Ваши пожелания или вопросы" rows={3} />
                  </div>
                  <Button className="w-full" size="lg">
                    Зарегистрироваться сейчас
                    <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                <p className="mt-6 text-center text-sm italic text-muted-foreground">
                  «Наши мероприятия — это инвестиция в ваше профессиональное будущее и качество помощи вашим пациентам»
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-semibold text-primary">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <Icon name="MapPin" className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  г. Ковров, ул. Грибоедова, д. 1
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 flex-shrink-0" />
                  8-912-95-70907
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 flex-shrink-0" />
                  8-993-747-99-07
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Clock" className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  Пн-Пт: 9:00-19:00, Сб: 9:00-16:00, Вс: Выходной
                </p>
                <p className="font-medium text-primary">Обязательна предварительная запись!</p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-primary">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/#about" className="hover:text-primary">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-primary">
                    Направления
                  </a>
                </li>
                <li>
                  <a href="/#team" className="hover:text-primary">
                    Специалисты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Полезные материалы
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-primary">Документы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Лицензии и документы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Прайс-лист
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Центр неврологии и реабилитации «Потенциал». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Events;