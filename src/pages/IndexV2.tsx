import { useState } from 'react';
import { cn } from '@/lib/utils';
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

const IndexV2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [homeServiceOpen, setHomeServiceOpen] = useState(false);

  const specialists = [
    {
      name: 'Носова Алёна Валерьевна',
      role: 'Врач-невролог',
      description: 'Диагностика и лечение заболеваний нервной системы у детей и взрослых. Составление индивидуальных программ реабилитации.',
      quote: 'Мой подход — найти корень проблемы и работать с ним, а не просто убирать симптомы.',
      image: 'https://cdn.poehali.dev/projects/21c67491-5d3c-416c-8c88-d39ecde31b47/files/d5e0b1f8-46a1-4012-ad64-b66ec8b09a73.jpg',
    },
    {
      name: 'Горяйнова Яна Олеговна',
      role: 'Медицинский психолог, Нейропсихолог',
      description: 'Диагностика и коррекция нарушений развития у детей (РАС, СДВГ, ЗПРР). Психологическое сопровождение взрослых.',
      quote: 'Помогаю мозгу найти новые пути развития, когда основные оказались заблокированы.',
      image: 'https://cdn.poehali.dev/projects/21c67491-5d3c-416c-8c88-d39ecde31b47/files/428859a1-a849-4d0c-bab0-092707b8fb23.jpg',
    },
    {
      name: 'Дунаева Мария Васильевна',
      role: 'Врач-рефлексотерапевт, Специалист по ЛФК',
      description: 'Восстановительное лечение после травм и инсультов. Лечение болевых синдромов. Нейрореабилитация.',
      quote: 'Тело обладает огромными ресурсами для самовосстановления — нужно лишь правильно ему помочь.',
      image: 'https://cdn.poehali.dev/projects/21c67491-5d3c-416c-8c88-d39ecde31b47/files/a4598a25-75e6-42b7-9498-403117c50e9a.jpg',
    },
    {
      name: 'Ольга Михайловна',
      role: 'Логопед-дефектолог',
      description: 'Коррекция речевых нарушений у детей и взрослых. Логопедический массаж. Работа с неговорящими детьми.',
      quote: 'Речь — это не просто слова. Это мост к общению с миром, и я помогаю его построить.',
      image: 'https://cdn.poehali.dev/projects/21c67491-5d3c-416c-8c88-d39ecde31b47/files/08d3bd9f-5f7e-4ee4-8bf5-31b063f06594.jpg',
    },
    {
      name: 'Романова',
      role: 'Специалист по БАК, Врач-физиотерапевт',
      description: 'Биоакустическая коррекция головного мозга. Нейротерапия. Функциональная диагностика.',
      quote: 'Использую методы, которые позволяют мозгу «услышать» себя и запустить процессы саморегуляции.',
      image: 'https://cdn.poehali.dev/projects/21c67491-5d3c-416c-8c88-d39ecde31b47/files/cb13a43b-757a-4b65-99e8-de64b17c5993.jpg',
    },
    {
      name: 'Ковалёва Елена Германовна',
      role: 'Инструктор ЛФК, Специалист по АФК',
      description: 'Лечебная физкультура для детей с ДЦП и взрослых с нарушениями движения. Кинезиотерапия.',
      quote: 'Правильное движение — это жизнь. Я учу этому движению, учитывая все возможности тела.',
      image: 'https://cdn.poehali.dev/projects/21c67491-5d3c-416c-8c88-d39ecde31b47/files/6761058f-c303-4ecc-9560-892e2d1ea3dc.jpg',
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header - Dark gradient with rounded bottom corners */}
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 shadow-2xl rounded-b-3xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Icon name="Sparkles" className="h-10 w-10 text-yellow-300" />
            <span className="text-2xl font-black text-white tracking-tight">Потенциал</span>
          </div>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-3 text-base font-bold text-white hover:text-yellow-300 transition-colors" href="/">
                    Главная
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-bold text-white hover:text-yellow-300 data-[state=open]:text-yellow-300">О нас</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-3 p-5 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                      <li><a href="/#about" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">Наша философия</a></li>
                      <li><a href="/#team" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">Команда</a></li>
                      <li><a href="#" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">Лицензии и документы</a></li>
                      <li><a href="#" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">Галерея</a></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-bold text-white hover:text-yellow-300 data-[state=open]:text-yellow-300">Детям</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-3 p-5 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                      <li className="font-black text-xs text-purple-900 px-3">Консультации и диагностика</li>
                      <li><a href="/services/neurologist" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">Невролог</a></li>
                      <li><a href="#" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">Диагностика готовности к школе</a></li>
                      <li className="font-black text-xs text-purple-900 px-3 mt-2">Терапия</li>
                      <li><a href="#" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">Бобат-терапия</a></li>
                      <li><a href="#" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">БАК</a></li>
                      <li><a href="#" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">ЛФК/АФК</a></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-bold text-white hover:text-yellow-300 data-[state=open]:text-yellow-300">Взрослым</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-3 p-5 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                      <li className="font-black text-xs text-purple-900 px-3">Консультации</li>
                      <li><a href="#" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">Невролог</a></li>
                      <li><a href="#" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">ЭЭГ</a></li>
                      <li className="font-black text-xs text-purple-900 px-3 mt-2">Терапия</li>
                      <li><a href="#" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">Рефлексотерапия</a></li>
                      <li><a href="#" className="block rounded-xl p-3 text-sm font-semibold hover:bg-white/70 transition-all">БАК</a></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-3 text-base font-bold text-white hover:text-yellow-300 transition-colors" href="#">
                    Программы
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-3 text-base font-bold text-white hover:text-yellow-300 transition-colors" href="/events">
                    Мероприятия
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-3 text-base font-bold text-white hover:text-yellow-300 transition-colors" href="#">
                    Контакты
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              onClick={() => setAppointmentOpen(true)} 
              className="hidden lg:block bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-purple-900 font-black px-6 py-3 rounded-full shadow-lg transform transition hover:scale-105"
            >
              Записаться
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Icon name="Menu" className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-gradient-to-br from-purple-100 to-pink-100">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-black text-purple-900">Меню</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 space-y-4">
                  <a href="/" className="block py-3 px-4 text-lg font-bold text-purple-900 hover:bg-white/70 rounded-xl transition-all">Главная</a>
                  <a href="/#about" className="block py-3 px-4 text-lg font-bold text-purple-900 hover:bg-white/70 rounded-xl transition-all">О нас</a>
                  <a href="/services/neurologist" className="block py-3 px-4 text-lg font-bold text-purple-900 hover:bg-white/70 rounded-xl transition-all">Услуги детям</a>
                  <a href="#" className="block py-3 px-4 text-lg font-bold text-purple-900 hover:bg-white/70 rounded-xl transition-all">Услуги взрослым</a>
                  <a href="#" className="block py-3 px-4 text-lg font-bold text-purple-900 hover:bg-white/70 rounded-xl transition-all">Программы</a>
                  <a href="/events" className="block py-3 px-4 text-lg font-bold text-purple-900 hover:bg-white/70 rounded-xl transition-all">Мероприятия</a>
                  <a href="#" className="block py-3 px-4 text-lg font-bold text-purple-900 hover:bg-white/70 rounded-xl transition-all">Контакты</a>
                  <Button onClick={() => { setMobileMenuOpen(false); setAppointmentOpen(true); }} className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-purple-900 font-black py-3 rounded-full shadow-lg">
                    Записаться на приём
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section - Colorful gradient with larger text */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYxMGMwIDItMiA0LTIgNHMtMi0yLTItNHYtMTB6bS0yMCAwYzAtMiAyLTQgMi00czIgMiAyIDR2MTBjMCAyLTIgNC0yIDRzLTItMi0yLTR2LTEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
            Мы раскрываем потенциал<br />каждого человека
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-100 mb-12 max-w-4xl mx-auto font-bold leading-relaxed">
            Центр нейрореабилитации для детей и взрослых.<br />Современные методики. Индивидуальный подход. Видимый результат.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button 
              onClick={() => setAppointmentOpen(true)} 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-yellow-300 font-black text-xl px-10 py-7 rounded-full shadow-2xl transform transition hover:scale-110 hover:rotate-1"
            >
              Записаться на консультацию
            </Button>
            <Button 
              onClick={() => setCallbackOpen(true)} 
              size="lg" 
              variant="outline" 
              className="border-4 border-white text-white hover:bg-white hover:text-purple-900 font-black text-xl px-10 py-7 rounded-full shadow-2xl transform transition hover:scale-110 hover:-rotate-1"
            >
              Перезвоните мне
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Vibrant cards */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              Почему именно мы?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-semibold">
              Центр «Потенциал» — это место, где объединились врачи, которые работают не по шаблону, а думают
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="border-0 shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-block p-5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl">
                    <Icon name={adv.icon} className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-purple-900 mb-4">{adv.title}</h3>
                  <p className="text-gray-700 font-semibold text-base leading-relaxed">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Colorful carousel */}
      <section id="team" className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6">
              Наша команда
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-semibold">
              Познакомьтесь с людьми, которые помогают каждый день
            </p>
          </div>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {specialists.map((specialist, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-2xl bg-white hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 rounded-3xl overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={specialist.image} 
                        alt={specialist.name} 
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
                      <h3 className="text-xl font-black text-purple-900 mb-2">{specialist.name}</h3>
                      <p className="text-sm font-bold text-pink-600 mb-4">{specialist.role}</p>
                      <p className="text-sm text-gray-700 mb-4 font-medium leading-relaxed">{specialist.description}</p>
                      <div className="p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl border-l-4 border-purple-600">
                        <p className="text-sm italic text-purple-900 font-semibold">"{specialist.quote}"</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 hover:from-purple-700 hover:to-pink-700 shadow-xl" />
            <CarouselNext className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 hover:from-purple-700 hover:to-pink-700 shadow-xl" />
          </Carousel>
        </div>
      </section>

      {/* Methods Section - Vibrant grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              Наши методики
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-semibold">
              Используем проверенные и современные методы лечения
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {methods.map((method, idx) => (
              <Card key={idx} className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-5 inline-block p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg">
                    <Icon name={method.icon} className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-purple-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-700 font-semibold">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Two columns with gradient backgrounds */}
      <section id="services" className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6">
              Наши направления
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Children Services */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-10 rounded-3xl shadow-2xl">
              <h3 className="text-4xl font-black text-white mb-8 text-center">Для детей</h3>
              <div className="space-y-6">
                {childServices.map((service, idx) => (
                  <Card key={idx} className="border-0 shadow-xl bg-white/95 hover:bg-white transition-all duration-300 transform hover:scale-105 rounded-2xl">
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                          <Icon name={service.icon} className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-indigo-900 mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Adult Services */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-10 rounded-3xl shadow-2xl">
              <h3 className="text-4xl font-black text-white mb-8 text-center">Для взрослых</h3>
              <div className="space-y-6">
                {adultServices.map((service, idx) => (
                  <Card key={idx} className="border-0 shadow-xl bg-white/95 hover:bg-white transition-all duration-300 transform hover:scale-105 rounded-2xl">
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                          <Icon name={service.icon} className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-purple-900 mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section - Colorful cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              Специальные предложения
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offers.map((offer, idx) => (
              <Card key={idx} className="border-0 shadow-2xl bg-gradient-to-br from-yellow-100 to-orange-100 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1 rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black text-orange-900 mb-4 leading-tight">{offer.title}</h3>
                  <p className="text-gray-700 mb-6 font-semibold text-base leading-relaxed">{offer.description}</p>
                  <Button 
                    onClick={() => setAppointmentOpen(true)} 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black py-4 rounded-full shadow-lg transform transition hover:scale-105"
                  >
                    {offer.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Vibrant cards */}
      <section className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6">
              Истории успеха
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-0 shadow-2xl bg-white hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 rounded-3xl">
                <CardContent className="p-8">
                  <div className="mb-5 inline-block p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl shadow-lg">
                    <Icon name={testimonial.icon} className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-purple-900 mb-3">{testimonial.title}</h3>
                  <p className="text-sm font-bold text-pink-600 mb-3">{testimonial.author}</p>
                  {testimonial.diagnosis && (
                    <p className="text-xs font-semibold text-gray-500 mb-4">{testimonial.diagnosis}</p>
                  )}
                  <p className="text-sm text-gray-700 italic font-medium leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold gradient */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYxMGMwIDItMiA0LTIgNHMtMi0yLTItNHYtMTB6bS0yMCAwYzAtMiAyLTQgMi00czIgMiAyIDR2MTBjMCAyLTIgNC0yIDRzLTItMi0yLTR2LTEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Начните свой путь к здоровью сегодня!
          </h2>
          <p className="text-2xl text-yellow-100 mb-12 max-w-3xl mx-auto font-bold">
            Запишитесь на первую консультацию и получите подробный план действий
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button 
              onClick={() => setAppointmentOpen(true)} 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-yellow-300 font-black text-xl px-12 py-7 rounded-full shadow-2xl transform transition hover:scale-110"
            >
              Записаться на консультацию
            </Button>
            <Button 
              onClick={() => setCallbackOpen(true)} 
              size="lg" 
              variant="outline" 
              className="border-4 border-white text-white hover:bg-white hover:text-purple-900 font-black text-xl px-12 py-7 rounded-full shadow-2xl transform transition hover:scale-110"
            >
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Gradient with rounded top */}
      <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-16 rounded-t-3xl">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Sparkles" className="h-10 w-10 text-yellow-300" />
                <span className="text-2xl font-black">Потенциал</span>
              </div>
              <p className="text-purple-200 font-semibold text-base leading-relaxed">
                Центр нейрореабилитации для детей и взрослых
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black mb-5 text-yellow-300">Контакты</h3>
              <div className="space-y-3 text-purple-200 font-semibold">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" className="h-5 w-5" />
                  +7 (XXX) XXX-XX-XX
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" className="h-5 w-5" />
                  info@potential.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-5 w-5" />
                  г. Москва, ул. Примерная, 123
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black mb-5 text-yellow-300">Режим работы</h3>
              <div className="space-y-2 text-purple-200 font-semibold">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб: 10:00 - 18:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black mb-5 text-yellow-300">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-110 shadow-lg">
                  <Icon name="Facebook" className="h-6 w-6" />
                </a>
                <a href="#" className="p-3 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl hover:from-pink-600 hover:to-red-700 transition-all transform hover:scale-110 shadow-lg">
                  <Icon name="Instagram" className="h-6 w-6" />
                </a>
                <a href="#" className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all transform hover:scale-110 shadow-lg">
                  <Icon name="Twitter" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-700 pt-8 text-center text-purple-200 font-semibold">
            <p>2024 Центр «Потенциал». Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Appointment Sheet */}
      <Sheet open={appointmentOpen} onOpenChange={setAppointmentOpen}>
        <SheetContent className="w-full sm:max-w-lg bg-gradient-to-br from-purple-50 to-pink-50 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-3xl font-black text-purple-900">Записаться на приём</SheetTitle>
          </SheetHeader>
          <form className="mt-8 space-y-6">
            <div>
              <Label htmlFor="name" className="text-base font-bold text-purple-900">Ваше имя</Label>
              <Input id="name" placeholder="Иван Иванов" className="mt-2 border-2 border-purple-300 rounded-xl py-3 font-semibold focus:border-purple-600" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-base font-bold text-purple-900">Телефон</Label>
              <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2 border-2 border-purple-300 rounded-xl py-3 font-semibold focus:border-purple-600" />
            </div>
            <div>
              <Label htmlFor="service" className="text-base font-bold text-purple-900">Выберите услугу</Label>
              <select id="service" className="mt-2 w-full border-2 border-purple-300 rounded-xl p-3 font-semibold focus:border-purple-600 bg-white">
                <option>Консультация невролога</option>
                <option>Консультация психолога</option>
                <option>ЛФК</option>
                <option>БАК-терапия</option>
                <option>Другое</option>
              </select>
            </div>
            <div>
              <Label htmlFor="comment" className="text-base font-bold text-purple-900">Комментарий</Label>
              <Textarea id="comment" placeholder="Опишите вашу ситуацию..." className="mt-2 border-2 border-purple-300 rounded-xl font-semibold focus:border-purple-600" rows={4} />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black text-lg py-4 rounded-full shadow-xl transform transition hover:scale-105">
              Отправить заявку
            </Button>
          </form>
        </SheetContent>
      </Sheet>

      {/* Callback Sheet */}
      <Sheet open={callbackOpen} onOpenChange={setCallbackOpen}>
        <SheetContent className="w-full sm:max-w-lg bg-gradient-to-br from-purple-50 to-pink-50">
          <SheetHeader>
            <SheetTitle className="text-3xl font-black text-purple-900">Заказать звонок</SheetTitle>
          </SheetHeader>
          <form className="mt-8 space-y-6">
            <div>
              <Label htmlFor="callback-name" className="text-base font-bold text-purple-900">Ваше имя</Label>
              <Input id="callback-name" placeholder="Иван Иванов" className="mt-2 border-2 border-purple-300 rounded-xl py-3 font-semibold focus:border-purple-600" />
            </div>
            <div>
              <Label htmlFor="callback-phone" className="text-base font-bold text-purple-900">Телефон</Label>
              <Input id="callback-phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2 border-2 border-purple-300 rounded-xl py-3 font-semibold focus:border-purple-600" />
            </div>
            <div>
              <Label htmlFor="callback-time" className="text-base font-bold text-purple-900">Удобное время для звонка</Label>
              <Input id="callback-time" placeholder="Например: сегодня после 15:00" className="mt-2 border-2 border-purple-300 rounded-xl py-3 font-semibold focus:border-purple-600" />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black text-lg py-4 rounded-full shadow-xl transform transition hover:scale-105">
              Заказать звонок
            </Button>
          </form>
        </SheetContent>
      </Sheet>

      {/* Home Service Sheet */}
      <Sheet open={homeServiceOpen} onOpenChange={setHomeServiceOpen}>
        <SheetContent className="w-full sm:max-w-lg bg-gradient-to-br from-purple-50 to-pink-50 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-3xl font-black text-purple-900">Вызов специалиста на дом</SheetTitle>
          </SheetHeader>
          <form className="mt-8 space-y-6">
            <div>
              <Label htmlFor="home-name" className="text-base font-bold text-purple-900">Ваше имя</Label>
              <Input id="home-name" placeholder="Иван Иванов" className="mt-2 border-2 border-purple-300 rounded-xl py-3 font-semibold focus:border-purple-600" />
            </div>
            <div>
              <Label htmlFor="home-phone" className="text-base font-bold text-purple-900">Телефон</Label>
              <Input id="home-phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2 border-2 border-purple-300 rounded-xl py-3 font-semibold focus:border-purple-600" />
            </div>
            <div>
              <Label htmlFor="home-address" className="text-base font-bold text-purple-900">Адрес</Label>
              <Input id="home-address" placeholder="Улица, дом, квартира" className="mt-2 border-2 border-purple-300 rounded-xl py-3 font-semibold focus:border-purple-600" />
            </div>
            <div>
              <Label htmlFor="home-specialist" className="text-base font-bold text-purple-900">Нужный специалист</Label>
              <select id="home-specialist" className="mt-2 w-full border-2 border-purple-300 rounded-xl p-3 font-semibold focus:border-purple-600 bg-white">
                <option>Невролог</option>
                <option>Психолог</option>
                <option>Инструктор ЛФК</option>
                <option>Другой специалист</option>
              </select>
            </div>
            <div>
              <Label htmlFor="home-comment" className="text-base font-bold text-purple-900">Комментарий</Label>
              <Textarea id="home-comment" placeholder="Опишите вашу ситуацию..." className="mt-2 border-2 border-purple-300 rounded-xl font-semibold focus:border-purple-600" rows={4} />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black text-lg py-4 rounded-full shadow-xl transform transition hover:scale-105">
              Вызвать специалиста
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default IndexV2;
