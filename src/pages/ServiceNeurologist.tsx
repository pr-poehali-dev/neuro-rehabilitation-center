import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const ServiceNeurologist = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [homeServiceOpen, setHomeServiceOpen] = useState(false);

  const targetAudience = [
    {
      icon: 'Search',
      title: '«Родитель в поиске причины и плана»',
      child: 'Ваш ребенок: 1,5-7 лет, есть конкретные проблемы (не говорит, гиперактивен, ходит на цыпочках)',
      pain: 'Ваша боль: Перепробовали все советы из интернета, но ничего не помогает. Боитесь упустить время.',
      solution: 'Наше решение: Доктор станет вашим «капитаном» — возьмет на себя руководство процессом и составит понятный план действий.',
    },
    {
      icon: 'Heart',
      title: '«Родитель ребенка со сложным диагнозом»',
      child: 'Ваш ребенок: С установленным диагнозом (РАС, ДЦП, эпилепсия)',
      pain: 'Ваша боль: Устали от «конвейерного» подхода в других центрах. Ищете современные методы, а не устаревшие схемы.',
      solution: 'Наше решение: Глубокий анализ случая, современные протоколы лечения, долгосрочное ведение пациента.',
    },
    {
      icon: 'BookOpen',
      title: '«Родитель школьника с проблемами в учебе»',
      child: 'Ваш ребенок: Школьник с невнимательностью, плохой памятью, головными болями',
      pain: 'Ваша боль: Школа «давит», учителя считают ребенка ленивым. Семейные ссоры из-за уроков.',
      solution: 'Наше решение: Выявим неврологические причины неуспеваемости и дадим рекомендации для школы.',
    },
  ];

  const consultationSteps = [
    {
      step: 'Шаг 1',
      title: 'Знакомство и анамнез',
      duration: '20-30 минут',
      description: 'Подробная беседа с родителями, сбор информации о развитии ребенка, анализ медицинских документов.',
      icon: 'Users',
    },
    {
      step: 'Шаг 2',
      title: 'Осмотр ребенка',
      duration: '20-30 минут',
      description: 'Бережный неврологический осмотр, оценка психомоторного развития, проверка рефлексов.',
      icon: 'Activity',
    },
    {
      step: 'Шаг 3',
      title: 'Обсуждение плана',
      duration: '20-30 минут',
      description: 'Постановка диагноза, составление индивидуального плана лечения, ответы на вопросы.',
      icon: 'FileText',
    },
    {
      step: 'Шаг 4',
      title: 'Поддержка после приема',
      duration: 'Постоянно',
      description: 'Доступ к врачу по вопросам лечения, корректировка плана при необходимости.',
      icon: 'HeadphonesIcon',
    },
  ];

  const faqs = [
    {
      question: 'Сколько длится консультация?',
      answer: 'Прием длится от 60 до 90 минут — столько, сколько нужно для вашего случая.',
    },
    {
      question: 'Нужно ли брать с собой ребенка?',
      answer: 'Да, осмотр ребенка обязателен для постановки точного диагноза.',
    },
    {
      question: 'Что взять с собой на консультацию?',
      answer: 'Принесите все медицинские документы: выписки, результаты обследований, видео проблемных моментов.',
    },
    {
      question: 'Можно ли получить онлайн-консультацию?',
      answer: 'Первичная консультация требует очного осмотра. Последующие консультации возможны онлайн.',
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

        <Sheet open={appointmentOpen} onOpenChange={setAppointmentOpen}>
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
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/21c67491-5d3c-416c-8c88-d39ecde31b47/files/17ed6d78-0493-4c1a-8892-1cd99ad72430.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/90"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Консультация детского невролога — начало пути к здоровью вашего ребенка
            </h1>
            <p className="mb-4 text-xl font-semibold text-accent md:text-2xl">
              Первичный прием у невролога Носовой Алёны Валерьевны с составлением индивидуального плана лечения
            </p>
            <p className="mb-8 text-base text-white/90 md:text-lg">
              Устали от хождений по врачам без результата? Получите четкий диагноз и пошаговый план действий уже на первой консультации. Мы не просто ставим диагноз — мы начинаем лечение.
            </p>

            <div className="mb-8 grid gap-4 text-left sm:grid-cols-2 md:text-base text-sm">
              <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <Icon name="Check" className="h-6 w-6 flex-shrink-0 text-accent" />
                <span className="text-white">Прием длится столько, сколько нужно</span>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <Icon name="Check" className="h-6 w-6 flex-shrink-0 text-accent" />
                <span className="text-white">Используем доказательные методы</span>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <Icon name="Check" className="h-6 w-6 flex-shrink-0 text-accent" />
                <span className="text-white">Составляем индивидуальный план</span>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <Icon name="Check" className="h-6 w-6 flex-shrink-0 text-accent" />
                <span className="text-white">Объясняем всё доступным языком</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Sheet open={appointmentOpen} onOpenChange={setAppointmentOpen}>
                <SheetTrigger asChild>
                  <Button size="lg" className="text-base">
                    Записаться на консультацию
                    <Icon name="Calendar" className="ml-2 h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Записаться на консультацию</SheetTitle>
                  </SheetHeader>
                  <form className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Введите имя" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <Label htmlFor="child">Имя ребенка и возраст</Label>
                      <Input id="child" placeholder="Иван, 5 лет" />
                    </div>
                    <div>
                      <Label htmlFor="comment">Опишите ситуацию</Label>
                      <Textarea id="comment" rows={4} placeholder="Расскажите о проблеме" />
                    </div>
                    <Button className="w-full">Отправить заявку</Button>
                  </form>
                </SheetContent>
              </Sheet>
              <Button size="lg" variant="secondary" asChild>
                <a href="#doctor">Узнать о враче подробнее</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
              Для кого эта консультация?
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              Если вы узнаете себя в одном из этих портретов — эта консультация для вас
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {targetAudience.map((audience, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Icon name={audience.icon} className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-4 text-center text-lg font-bold text-primary">{audience.title}</h3>
                    <div className="space-y-3 text-sm">
                      <p className="text-muted-foreground">{audience.child}</p>
                      <p className="font-medium text-destructive">{audience.pain}</p>
                      <p className="rounded-lg bg-accent/10 p-3 font-medium text-accent-foreground">{audience.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
              Что входит в консультацию?
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              Полный комплекс диагностики и планирования лечения
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Icon name="Activity" className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary">Диагностический блок</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>Полный неврологический осмотр</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>Оценка психомоторного развития</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>Анализ медицинской документации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>Подробный сбор анамнеза</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-secondary/10 p-2">
                      <Icon name="Target" className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary">Стратегический блок</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span>Составление индивидуального плана лечения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span>Определение необходимых обследований</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span>Рекомендации по смежным специалистам</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span>Назначение терапии при необходимости</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-accent/10 p-2">
                      <Icon name="MessageCircle" className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-accent-foreground">Информационный блок</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>Подробное объяснение диагноза и прогноза</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>Ответы на все ваши вопросы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>Рекомендации для занятий дома</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>Дальнейший план действий</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="doctor" className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
              Почему выбирают доктора Носову?
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src="https://cdn.poehali.dev/projects/21c67491-5d3c-416c-8c88-d39ecde31b47/files/d5e0b1f8-46a1-4012-ad64-b66ec8b09a73.jpg" 
                  alt="Носова Алёна Валерьевна" 
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-bold text-primary">Алёна Валерьевна Носова</h3>
                <p className="mb-6 text-lg font-medium text-secondary">Врач-невролог</p>

                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-primary">Профессиональные качества:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>15+ лет опыта в детской неврологии</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>Специализация на сложных случаях развития</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>Постоянное обучение современным методам</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>Авторские методики реабилитации</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-primary">Личные качества:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Heart" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>Умение найти подход к любому ребенку</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Heart" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>Терпеливое объяснение родителям</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Heart" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>Ответственный подход к каждому случаю</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Heart" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>Искренняя вовлеченность в результат</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 p-4">
                  <p className="italic text-foreground">
                    «Мой подход — найти корень проблемы и работать с ним, а не просто убирать симптомы. Вместе мы составим маршрут к здоровью вашего ребенка»
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
              Чем наша консультация отличается от других?
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              Сравните и убедитесь сами
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="bg-primary p-4 text-left font-bold text-primary-foreground">Наш центр</th>
                    <th className="bg-muted p-4 text-left font-medium text-muted-foreground">Государственная поликлиника</th>
                    <th className="bg-muted p-4 text-left font-medium text-muted-foreground">Частные врачи</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="bg-primary/5 p-4 font-medium text-primary">Прием 60-90 минут</td>
                    <td className="p-4 text-muted-foreground">Прием 10-15 минут</td>
                    <td className="p-4 text-muted-foreground">Стандартный прием 30 минут</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-primary/5 p-4 font-medium text-primary">Индивидуальный план</td>
                    <td className="p-4 text-muted-foreground">Общие рекомендации</td>
                    <td className="p-4 text-muted-foreground">Рекомендации без контроля</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-primary/5 p-4 font-medium text-primary">Команда специалистов</td>
                    <td className="p-4 text-muted-foreground">Направление в другую поликлинику</td>
                    <td className="p-4 text-muted-foreground">Направление к неизвестным специалистам</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-primary/5 p-4 font-medium text-primary">Доказательные методы</td>
                    <td className="p-4 text-muted-foreground">Устаревшие протоколы</td>
                    <td className="p-4 text-muted-foreground">Часто отсутствие методик</td>
                  </tr>
                  <tr>
                    <td className="bg-primary/5 p-4 font-medium text-primary">Долгосрочное ведение</td>
                    <td className="p-4 text-muted-foreground">Разовые консультации</td>
                    <td className="p-4 text-muted-foreground">Отсутствие преемственности</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
              Как проходит консультация?
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              Пошаговый процесс от начала до результата
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {consultationSteps.map((step, index) => (
                <Card key={index} className="border-l-4 border-l-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Icon name={step.icon} className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 text-sm font-semibold text-accent">{step.step}</div>
                        <h3 className="mb-1 text-lg font-bold text-primary">{step.title}</h3>
                        <div className="mb-2 text-xs text-muted-foreground">{step.duration}</div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
              Отзывы о консультациях
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              Истории наших пациентов
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-accent/10 p-2">
                      <Icon name="Users" className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary">«Наконец-то нашли своего врача!»</h3>
                  </div>
                  <p className="mb-3 text-sm font-medium text-secondary">Семья Ивановых, сын Кирилл 5 лет</p>
                  <p className="text-sm italic text-muted-foreground">
                    «После консультации у Алёны Валерьевны мы впервые поняли, что происходит с сыном. Получили четкий план на 3 месяца — уже видим прогресс!»
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-accent/10 p-2">
                      <Icon name="Heart" className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary">«Избавились от головных болей»</h3>
                  </div>
                  <p className="mb-3 text-sm font-medium text-secondary">Мама школьницы Ани 10 лет</p>
                  <p className="text-sm italic text-muted-foreground">
                    «Дочь жаловалась на головные боли перед школой. Доктор выявила причину и назначила лечение. Теперь учится с удовольствием!»
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
              Частые вопросы
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border bg-white px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl">
              Стоимость и запись
            </h2>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="mb-2 text-4xl font-bold text-primary">3 000 ₽</div>
                  <div className="text-lg font-medium text-secondary">Консультация детского невролога</div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-semibold text-primary">Что входит в стоимость:</h3>
                  <div className="grid gap-3 text-left sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm">Полный неврологический осмотр</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm">Составление индивидуального плана</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm">Письменные рекомендации</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm">Ответы на все вопросы</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6 rounded-lg bg-accent/10 p-4">
                  <p className="mb-2 font-semibold text-primary">📞 Запишитесь сейчас и получите:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ Консультацию в удобное время</li>
                    <li>✓ Предварительную беседу с администратором</li>
                    <li>✓ Подготовку к приему</li>
                  </ul>
                </div>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="lg" className="w-full text-base sm:w-auto">
                      Записаться на консультацию
                      <Icon name="Calendar" className="ml-2 h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Записаться на консультацию</SheetTitle>
                    </SheetHeader>
                    <form className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="final-name">Ваше имя</Label>
                        <Input id="final-name" placeholder="Введите имя" />
                      </div>
                      <div>
                        <Label htmlFor="final-phone">Телефон</Label>
                        <Input id="final-phone" type="tel" placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <Label htmlFor="final-child">Имя ребенка и возраст</Label>
                        <Input id="final-child" placeholder="Иван, 5 лет" />
                      </div>
                      <div>
                        <Label htmlFor="final-comment">Опишите ситуацию</Label>
                        <Textarea id="final-comment" rows={4} placeholder="Расскажите о проблеме" />
                      </div>
                      <Button className="w-full">Отправить заявку</Button>
                    </form>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>

            <p className="mt-8 text-lg font-medium text-primary">
              «Мы поможем вашему ребенку реализовать его потенциал»
            </p>
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

export default ServiceNeurologist;