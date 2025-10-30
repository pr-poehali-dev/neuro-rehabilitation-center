import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const specialists = [
    {
      name: 'Носова Алёна Валерьевна',
      role: 'Врач-невролог, Руководитель центра',
      description: 'Диагностика и лечение заболеваний нервной системы у детей и взрослых. Составление индивидуальных программ реабилитации.',
      quote: 'Мой подход — найти корень проблемы и работать с ним, а не просто убирать симптомы.',
    },
    {
      name: 'Горяйнова Яна Олеговна',
      role: 'Медицинский психолог, Нейропсихолог',
      description: 'Диагностика и коррекция нарушений развития у детей (РАС, СДВГ, ЗПРР). Психологическое сопровождение взрослых.',
      quote: 'Помогаю мозгу найти новые пути развития, когда основные оказались заблокированы.',
    },
    {
      name: 'Дунаева Мария Васильевна',
      role: 'Врач-рефлексотерапевт, Специалист по ЛФК',
      description: 'Восстановительное лечение после травм и инсультов. Лечение болевых синдромов. Нейрореабилитация.',
      quote: 'Тело обладает огромными ресурсами для самовосстановления — нужно лишь правильно ему помочь.',
    },
    {
      name: 'Ольга Михайловна',
      role: 'Логопед-дефектолог',
      description: 'Коррекция речевых нарушений у детей и взрослых. Логопедический массаж. Работа с неговорящими детьми.',
      quote: 'Речь — это не просто слова. Это мост к общению с миром, и я помогаю его построить.',
    },
    {
      name: 'Романова',
      role: 'Специалист по БАК, Врач-физиотерапевт',
      description: 'Биоакустическая коррекция головного мозга. Нейротерапия. Функциональная диагностика.',
      quote: 'Использую методы, которые позволяют мозгу «услышать» себя и запустить процессы саморегуляции.',
    },
    {
      name: 'Ковалёва Елена Германовна',
      role: 'Инструктор ЛФК, Специалист по АФК',
      description: 'Лечебная физкультура для детей с ДЦП и взрослых с нарушениями движения. Кинезиотерапия.',
      quote: 'Правильное движение — это жизнь. Я учу этому движению, учитывая все возможности тела.',
    },
  ];

  const methods = [
    { icon: 'Radio', title: 'БАК', description: 'Биоакустическая коррекция мозга' },
    { icon: 'Baby', title: 'Бобат-терапия', description: 'Нейроразвивающая терапия' },
    { icon: 'Dumbbell', title: 'ЛФК/АФК', description: 'Лечебная физкультура' },
    { icon: 'HandMetal', title: 'Рефлексотерапия', description: 'Акупунктура и массаж' },
    { icon: 'MessageCircle', title: 'Логопедия', description: 'Развитие речи' },
    { icon: 'Brain', title: 'Нейропсихология', description: 'Когнитивная реабилитация' },
  ];

  const testimonials = [
    {
      icon: 'Users',
      title: 'Наконец-то нашли своего врача!',
      author: 'Семья Ивановых, сын Кирилл (5 лет)',
      diagnosis: 'диагноз: ЗПРР',
      text: 'После консультации у Алёны Валерьевны мы впервые поняли, что происходит с сыном и что делать. Следуем плану уже 3 месяца — прогресс огромный!',
    },
    {
      icon: 'Heart',
      title: 'Вернули возможность двигаться после инсульта',
      author: 'Мария Петровна (68 лет)',
      diagnosis: '',
      text: 'Благодаря курсу ЛФК и БАК снова могу самостоятельно ходить по квартире. Спасибо за терпение и профессионализм!',
    },
    {
      icon: 'Briefcase',
      title: 'Перестали болеть голова и спина',
      author: 'Андрей Сергеевич (42 года)',
      diagnosis: 'руководитель',
      text: 'Программа «Здоровая спина» изменила мою жизнь. Теперь работаю продуктивно без постоянного дискомфорта.',
    },
  ];

  const offers = [
    {
      title: 'Диагностический пакет «Понять всё о развитии ребёнка»',
      description: 'Консультация невролога + диагностика уровня развития. Вы получите ответы: "В чём причина?" и "Что делать?".',
      buttonText: 'Получить консультацию',
    },
    {
      title: 'Экспресс-диагностика «Причина головной боли»',
      description: 'Приём невролога + ЭЭГ. Быстро найдём источник проблемы и предложим лечение.',
      buttonText: 'Избавиться от боли',
    },
    {
      title: 'Выезд специалиста на дом — фиксированная стоимость',
      description: 'Невролог или психолог приедет к вам. Решение для лежачих больных и тех, у кого нет времени на визит в клинику.',
      buttonText: 'Вызвать специалиста',
    },
  ];

  const childServices = [
    {
      icon: 'Activity',
      title: 'Комплексная реабилитация при ДЦП',
      description: 'Используем опыт центра «Милосердие». Бобат-терапия, ЛФК, массаж, рефлексотерапия',
    },
    {
      icon: 'TrendingUp',
      title: 'Задержки развития',
      description: 'ЗПРР, ЗПР, аутизм, СДВГ. Занятия с логопедом, дефектологом, нейропсихологом',
    },
    {
      icon: 'Brain',
      title: 'Развитие когнитивных функций',
      description: 'Программы для улучшения памяти, внимания и мышления у детей с нормальным развитием',
    },
    {
      icon: 'Radio',
      title: 'БАК-терапия',
      description: 'Биоакустическая коррекция мозга для нормализации работы нервной системы',
    },
  ];

  const adultServices = [
    {
      icon: 'HeartPulse',
      title: 'Постинсультная реабилитация',
      description: 'Восстановление после инсультов, травм, операций. Индивидуальные программы',
    },
    {
      icon: 'Pill',
      title: 'Лечение боли',
      description: 'Головные боли, боли в спине и шее. Рефлексотерапия, массаж, физиотерапия',
    },
    {
      icon: 'Shield',
      title: 'Постковидная реабилитация',
      description: 'Восстановление после COVID-19. Работа с астенией, когнитивными нарушениями',
    },
    {
      icon: 'Users',
      title: 'Возрастные изменения 45+',
      description: 'Улучшение памяти и внимания. Профилактика возрастных когнитивных нарушений',
    },
  ];

  const advantages = [
    {
      icon: 'Target',
      title: 'Авторские методики',
      description: 'Уникальные программы, разработанные нашими специалистами с учетом мирового опыта',
    },
    {
      icon: 'Users',
      title: 'Комплексный подход',
      description: 'Команда специалистов работает вместе над вашим результатом',
    },
    {
      icon: 'Activity',
      title: 'Собственный кабинет ЭЭГ',
      description: 'Функциональная диагностика прямо в центре — быстро и точно',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Потенциал</span>
          </div>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary" href="#about">
                    О нас
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary" href="#services">
                    Направления
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary" href="#team">
                    Команда
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary" href="#contact">
                    Контакты
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Icon name="Calendar" className="mr-2 h-4 w-4" />
                  Записаться
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Записаться на прием</SheetTitle>
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
                    <Label htmlFor="service">Услуга</Label>
                    <Input id="service" placeholder="Консультация невролога" />
                  </div>
                  <div>
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea id="comment" placeholder="Опишите вашу ситуацию" />
                  </div>
                  <Button className="w-full">Отправить заявку</Button>
                </form>
              </SheetContent>
            </Sheet>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-primary md:text-6xl">
              Используя наши возможности, поможем вам реализовать свой{' '}
              <span className="text-secondary">ПОТЕНЦИАЛ</span>
            </h1>
            <p className="mb-4 text-xl font-semibold text-secondary md:text-2xl">
              Мозг нуждается в тренировке, чтобы быть в полезной форме!
            </p>
            <p className="mb-8 text-base text-muted-foreground md:text-lg">
              Мы создали пространство, где есть всё для развития и восстановления деятельности головного и спинного мозга,
              лечения боли (голова, спина, руки, ноги) для детей и взрослых. Здесь вы найдете ответы, план действий и
              команду, которая поведет вас к результату.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="lg" className="text-base">
                    Получить план лечения
                    <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Получить план лечения</SheetTitle>
                  </SheetHeader>
                  <form className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="hero-name">Ваше имя</Label>
                      <Input id="hero-name" placeholder="Введите имя" />
                    </div>
                    <div>
                      <Label htmlFor="hero-phone">Телефон</Label>
                      <Input id="hero-phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <Label htmlFor="hero-comment">Опишите вашу ситуацию</Label>
                      <Textarea id="hero-comment" rows={4} placeholder="Расскажите о вашей проблеме" />
                    </div>
                    <Button className="w-full">Отправить заявку</Button>
                  </form>
                </SheetContent>
              </Sheet>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+79129570907">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  8-912-95-70907
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
              Мы — команда, которая становится вашим «капитаном» в лечении
            </h2>
            <p className="mb-12 text-center text-base text-muted-foreground md:text-lg">
              Мы понимаем вашу усталость от поисков и неопределённости. Наша философия — комплексный подход и персональная
              ответственность. Мы создали пространство, где есть всё для развития и восстановления деятельности головного и
              спинного мозга для детей и взрослых.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {advantages.map((advantage, index) => (
                <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Icon name={advantage.icon} className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-primary">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 rounded-lg bg-muted/50 p-8 text-center">
              <p className="text-lg font-semibold text-primary">
                Мы не обещаем чуда. Мы создаём систему, которая приводит к результату.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
              Комплексные программы для детей и взрослых
            </h2>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-full bg-accent p-2">
                    <Icon name="Baby" className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Для детей</h3>
                </div>
                <div className="space-y-4">
                  {childServices.map((service, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardContent className="p-5">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="rounded-lg bg-accent/10 p-2">
                              <Icon name={service.icon} className="h-5 w-5 text-accent" />
                            </div>
                          </div>
                          <div>
                            <h4 className="mb-1 font-semibold text-primary">{service.title}</h4>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-full bg-secondary p-2">
                    <Icon name="User" className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Для взрослых</h3>
                </div>
                <div className="space-y-4">
                  {adultServices.map((service, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardContent className="p-5">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="rounded-lg bg-secondary/10 p-2">
                              <Icon name={service.icon} className="h-5 w-5 text-secondary" />
                            </div>
                          </div>
                          <div>
                            <h4 className="mb-1 font-semibold text-primary">{service.title}</h4>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
              Наши методики
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              Современные технологии реабилитации и развития
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {methods.map((method, index) => (
                <Card key={index} className="text-center transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-secondary/10 p-4">
                        <Icon name={method.icon} className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-primary">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
              Знакомьтесь с вашими специалистами
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {specialists.map((specialist, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-xl">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-bold text-primary">{specialist.name}</h3>
                    <p className="mb-3 text-sm font-medium text-secondary">{specialist.role}</p>
                    <p className="mb-4 text-sm text-muted-foreground">{specialist.description}</p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs italic text-foreground">"{specialist.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl">
              Мы гордимся тем, что меняем жизни к лучшему
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold">&gt;90%</div>
                  <p className="text-sm">родителей получают чёткий план действий уже после первой консультации</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary text-white">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold">15+</div>
                  <p className="text-sm">специалистов, работающих как единая команда ради вашего результата</p>
                </CardContent>
              </Card>
              <Card className="bg-accent text-accent-foreground">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold">×2</div>
                  <p className="text-sm">быстрее — среднее время постановки точного диагноза</p>
                </CardContent>
              </Card>
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold">100%</div>
                  <p className="text-sm">мы не отказываем в помощи даже в самых сложных случаях</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
              Нам доверяют самое ценное
            </h2>
            <p className="mb-12 text-center text-muted-foreground">Реальные истории наших пациентов</p>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-accent/10 p-3">
                        <Icon name={testimonial.icon} className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-primary">{testimonial.title}</h3>
                    <p className="mb-1 text-sm font-medium text-secondary">{testimonial.author}</p>
                    {testimonial.diagnosis && (
                      <p className="mb-3 text-xs text-muted-foreground">{testimonial.diagnosis}</p>
                    )}
                    <p className="text-sm italic text-muted-foreground">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-destructive/5 to-destructive/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
              Первый шаг к решению — со скидкой
            </h2>
            <p className="mb-12 text-center text-muted-foreground">Специальные предложения для новых пациентов</p>

            <div className="grid gap-8 md:grid-cols-3">
              {offers.map((offer, index) => (
                <Card key={index} className="border-2 border-destructive/20 transition-all hover:border-destructive/40 hover:shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-bold text-primary">{offer.title}</h3>
                    <p className="mb-6 text-sm text-muted-foreground">{offer.description}</p>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button className="w-full">{offer.buttonText}</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>{offer.title}</SheetTitle>
                        </SheetHeader>
                        <form className="mt-6 space-y-4">
                          <div>
                            <Label htmlFor={`offer-name-${index}`}>Ваше имя</Label>
                            <Input id={`offer-name-${index}`} placeholder="Введите имя" />
                          </div>
                          <div>
                            <Label htmlFor={`offer-phone-${index}`}>Телефон</Label>
                            <Input id={`offer-phone-${index}`} type="tel" placeholder="+7 (___) ___-__-__" />
                          </div>
                          <div>
                            <Label htmlFor={`offer-comment-${index}`}>Комментарий</Label>
                            <Textarea id={`offer-comment-${index}`} placeholder="Опишите вашу ситуацию" />
                          </div>
                          <Button className="w-full">Отправить заявку</Button>
                        </form>
                      </SheetContent>
                    </Sheet>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Сделайте самый важный звонок для своего здоровья
            </h2>
            <p className="mb-8 text-muted-foreground">
              Заполните форму — и через 15 минут мы перезвоним, чтобы выслушать вашу ситуацию, ответить на вопросы и
              подобрать нужного специалиста.
            </p>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Ваше имя</Label>
                    <Input id="contact-name" placeholder="Введите ваше имя" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Ваш телефон *</Label>
                    <Input id="contact-phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-1" required />
                  </div>
                  <Button size="lg" className="w-full">
                    Позвоните мне и помогите!
                  </Button>
                </form>
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
                  <a href="#about" className="hover:text-primary">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary">
                    Направления
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-primary">
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

export default Index;