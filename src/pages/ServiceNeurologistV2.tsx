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

const ServiceNeurologistV2 = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Header - Teal gradient with soft shadow */}
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700 shadow-lg">
        <div className="container mx-auto flex h-18 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <Icon name="Sparkles" className="h-9 w-9 text-amber-300" />
              <span className="text-2xl font-extrabold text-white tracking-wide">Потенциал</span>
            </a>
          </div>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-semibold text-white hover:text-amber-300 transition-colors" href="/">
                    Главная
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-amber-300 data-[state=open]:text-amber-300">О нас</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4 bg-gradient-to-br from-cyan-50 to-blue-50">
                      <li><a href="/#about" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">Наша философия</a></li>
                      <li><a href="/#team" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">Команда</a></li>
                      <li><a href="#" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">Лицензии и документы</a></li>
                      <li><a href="#" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">Галерея</a></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-amber-300 data-[state=open]:text-amber-300">Детям</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-2 p-4 bg-gradient-to-br from-cyan-50 to-blue-50">
                      <li className="font-bold text-xs text-teal-700 px-2">Консультации и диагностика</li>
                      <li><a href="/services/neurologist" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">Невролог</a></li>
                      <li><a href="#" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">Диагностика готовности к школе</a></li>
                      <li className="font-bold text-xs text-teal-700 px-2 mt-2">Терапия</li>
                      <li><a href="#" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">Бобат-терапия</a></li>
                      <li><a href="#" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">БАК</a></li>
                      <li><a href="#" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">ЛФК/АФК</a></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-amber-300 data-[state=open]:text-amber-300">Взрослым</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-2 p-4 bg-gradient-to-br from-cyan-50 to-blue-50">
                      <li className="font-bold text-xs text-teal-700 px-2">Консультации</li>
                      <li><a href="#" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">Невролог</a></li>
                      <li><a href="#" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">ЭЭГ</a></li>
                      <li className="font-bold text-xs text-teal-700 px-2 mt-2">Терапия</li>
                      <li><a href="#" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">Рефлексотерапия</a></li>
                      <li><a href="#" className="block rounded-lg p-2 text-sm font-medium hover:bg-teal-100">БАК</a></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-semibold text-white hover:text-amber-300 transition-colors" href="#">
                    Программы
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-semibold text-white hover:text-amber-300 transition-colors" href="/events">
                    Мероприятия
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-semibold text-white hover:text-amber-300 transition-colors" href="#">
                    Контакты
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              onClick={() => setAppointmentOpen(true)} 
              className="hidden lg:block bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-teal-900 font-bold px-6 py-2 shadow-md"
            >
              Записаться
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Icon name="Menu" className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-gradient-to-br from-cyan-50 to-blue-50">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold text-teal-900">Меню</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 space-y-3">
                  <a href="/" className="block py-2 px-3 text-base font-semibold text-teal-900 hover:bg-teal-100 rounded-lg">Главная</a>
                  <a href="/#about" className="block py-2 px-3 text-base font-semibold text-teal-900 hover:bg-teal-100 rounded-lg">О нас</a>
                  <a href="/services/neurologist" className="block py-2 px-3 text-base font-semibold text-teal-900 hover:bg-teal-100 rounded-lg">Невролог</a>
                  <a href="#" className="block py-2 px-3 text-base font-semibold text-teal-900 hover:bg-teal-100 rounded-lg">Программы</a>
                  <a href="/events" className="block py-2 px-3 text-base font-semibold text-teal-900 hover:bg-teal-100 rounded-lg">Мероприятия</a>
                  <a href="#" className="block py-2 px-3 text-base font-semibold text-teal-900 hover:bg-teal-100 rounded-lg">Контакты</a>
                  <Button onClick={() => { setMobileMenuOpen(false); setAppointmentOpen(true); }} className="w-full bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-teal-900 font-bold">
                    Записаться на приём
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section - Vibrant gradient */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Консультация детского невролога
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-100 mb-10 font-semibold leading-relaxed">
              Найдем причину проблемы и составим четкий план действий
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button 
                onClick={() => setAppointmentOpen(true)} 
                size="lg" 
                className="bg-white text-teal-900 hover:bg-amber-300 font-bold text-lg px-10 py-6 shadow-xl"
              >
                Записаться на консультацию
              </Button>
              <Button 
                onClick={() => setCallbackOpen(true)} 
                size="lg" 
                variant="outline" 
                className="border-3 border-white text-white hover:bg-white hover:text-teal-900 font-bold text-lg px-10 py-6"
              >
                Перезвоните мне
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section - Cards with left border accent */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-5">
              Для кого эта консультация?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              Узнайте себя в одной из этих историй
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((audience, idx) => (
              <Card key={idx} className="border-l-8 border-teal-500 shadow-lg bg-gradient-to-br from-white to-cyan-50 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="mb-5 inline-block p-4 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg">
                    <Icon name={audience.icon} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-teal-900 mb-4">{audience.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <p className="font-bold text-blue-900 mb-1">Ваш ребенок:</p>
                      <p className="text-gray-700 font-medium">{audience.child}</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                      <p className="font-bold text-red-900 mb-1">Ваша боль:</p>
                      <p className="text-gray-700 font-medium">{audience.pain}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <p className="font-bold text-green-900 mb-1">Наше решение:</p>
                      <p className="text-gray-700 font-medium">{audience.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Steps - Timeline design */}
      <section className="py-16 bg-gradient-to-br from-cyan-100 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-5">
              Как проходит консультация
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              Четыре шага к пониманию и решению проблемы
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-8">
            {consultationSteps.map((step, idx) => (
              <Card key={idx} className="border-0 shadow-lg bg-white hover:shadow-2xl transition-all">
                <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg">
                      <Icon name={step.icon} className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-4 py-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-sm font-bold rounded-full">{step.step}</span>
                      <span className="px-4 py-1 bg-amber-100 text-amber-800 text-sm font-bold rounded-full">{step.duration}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-teal-900 mb-3">{step.title}</h3>
                    <p className="text-base text-gray-700 font-medium leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section - Highlighted card */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-teal-600 to-blue-600 text-white overflow-hidden">
              <CardContent className="p-10 md:p-14 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
                    Стоимость консультации
                  </h2>
                  <div className="text-center mb-8">
                    <div className="text-6xl md:text-7xl font-black mb-2">3 500₽</div>
                    <p className="text-xl font-semibold text-cyan-100">60-90 минут комплексного приёма</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
                    <p className="text-lg font-semibold mb-4 text-center">Что входит в консультацию:</p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Icon name="Check" className="h-6 w-6 text-amber-300 flex-shrink-0" />
                        <span className="font-medium">Подробный сбор анамнеза и беседа с родителями</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Check" className="h-6 w-6 text-amber-300 flex-shrink-0" />
                        <span className="font-medium">Неврологический осмотр ребенка</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Check" className="h-6 w-6 text-amber-300 flex-shrink-0" />
                        <span className="font-medium">Постановка диагноза и объяснение причин</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Check" className="h-6 w-6 text-amber-300 flex-shrink-0" />
                        <span className="font-medium">Индивидуальный план лечения и рекомендации</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Check" className="h-6 w-6 text-amber-300 flex-shrink-0" />
                        <span className="font-medium">Поддержка врача после консультации</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Button 
                      onClick={() => setAppointmentOpen(true)} 
                      size="lg" 
                      className="bg-white text-teal-900 hover:bg-amber-300 font-black text-xl px-12 py-6 shadow-xl"
                    >
                      Записаться сейчас
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion with custom styling */}
      <section className="py-16 bg-gradient-to-br from-cyan-100 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-5">
              Частые вопросы
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <AccordionTrigger className="px-6 py-5 text-lg font-bold text-teal-900 hover:bg-teal-50 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base text-gray-700 font-medium bg-gradient-to-br from-white to-cyan-50">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section - Vibrant gradient */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Запишитесь на консультацию прямо сейчас
          </h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-3xl mx-auto font-semibold">
            Не откладывайте заботу о здоровье вашего ребенка. Получите профессиональную помощь уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button 
              onClick={() => setAppointmentOpen(true)} 
              size="lg" 
              className="bg-white text-teal-900 hover:bg-amber-300 font-black text-xl px-12 py-6 shadow-xl"
            >
              Записаться на приём
            </Button>
            <Button 
              onClick={() => setCallbackOpen(true)} 
              size="lg" 
              variant="outline" 
              className="border-3 border-white text-white hover:bg-white hover:text-teal-900 font-bold text-xl px-12 py-6"
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Gradient */}
      <footer className="bg-gradient-to-br from-gray-800 to-teal-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Icon name="Sparkles" className="h-9 w-9 text-amber-300" />
                <span className="text-2xl font-extrabold">Потенциал</span>
              </div>
              <p className="text-cyan-200 font-medium">
                Центр нейрореабилитации для детей и взрослых
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-300">Контакты</h3>
              <div className="space-y-2 text-cyan-200 font-medium">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (XXX) XXX-XX-XX
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@potential.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  г. Москва, ул. Примерная, 123
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-300">Режим работы</h3>
              <div className="space-y-2 text-cyan-200 font-medium">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб: 10:00 - 18:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-300">Мы в соцсетях</h3>
              <div className="flex gap-3">
                <a href="#" className="p-3 bg-teal-700 rounded-lg hover:bg-teal-600 transition-colors">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-teal-700 rounded-lg hover:bg-teal-600 transition-colors">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-teal-700 rounded-lg hover:bg-teal-600 transition-colors">
                  <Icon name="Twitter" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-700 pt-6 text-center text-cyan-200 font-medium">
            <p>2024 Центр «Потенциал». Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Appointment Sheet */}
      <Sheet open={appointmentOpen} onOpenChange={setAppointmentOpen}>
        <SheetContent className="w-full sm:max-w-lg bg-gradient-to-br from-cyan-50 to-blue-50 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-teal-900">Записаться на приём</SheetTitle>
          </SheetHeader>
          <form className="mt-6 space-y-5">
            <div>
              <Label htmlFor="name" className="text-sm font-semibold text-teal-900">Ваше имя</Label>
              <Input id="name" placeholder="Иван Иванов" className="mt-2 border-2 border-teal-300 focus:border-teal-600" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-semibold text-teal-900">Телефон</Label>
              <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2 border-2 border-teal-300 focus:border-teal-600" />
            </div>
            <div>
              <Label htmlFor="service" className="text-sm font-semibold text-teal-900">Выберите услугу</Label>
              <select id="service" className="mt-2 w-full border-2 border-teal-300 rounded-md p-2 focus:border-teal-600">
                <option>Консультация невролога</option>
                <option>Консультация психолога</option>
                <option>ЛФК</option>
                <option>БАК-терапия</option>
                <option>Другое</option>
              </select>
            </div>
            <div>
              <Label htmlFor="comment" className="text-sm font-semibold text-teal-900">Комментарий</Label>
              <Textarea id="comment" placeholder="Опишите вашу ситуацию..." className="mt-2 border-2 border-teal-300 focus:border-teal-600" rows={4} />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-base py-3">
              Отправить заявку
            </Button>
          </form>
        </SheetContent>
      </Sheet>

      {/* Callback Sheet */}
      <Sheet open={callbackOpen} onOpenChange={setCallbackOpen}>
        <SheetContent className="w-full sm:max-w-lg bg-gradient-to-br from-cyan-50 to-blue-50">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-teal-900">Заказать звонок</SheetTitle>
          </SheetHeader>
          <form className="mt-6 space-y-5">
            <div>
              <Label htmlFor="callback-name" className="text-sm font-semibold text-teal-900">Ваше имя</Label>
              <Input id="callback-name" placeholder="Иван Иванов" className="mt-2 border-2 border-teal-300 focus:border-teal-600" />
            </div>
            <div>
              <Label htmlFor="callback-phone" className="text-sm font-semibold text-teal-900">Телефон</Label>
              <Input id="callback-phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2 border-2 border-teal-300 focus:border-teal-600" />
            </div>
            <div>
              <Label htmlFor="callback-time" className="text-sm font-semibold text-teal-900">Удобное время для звонка</Label>
              <Input id="callback-time" placeholder="Например: сегодня после 15:00" className="mt-2 border-2 border-teal-300 focus:border-teal-600" />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-base py-3">
              Заказать звонок
            </Button>
          </form>
        </SheetContent>
      </Sheet>

      {/* Home Service Sheet */}
      <Sheet open={homeServiceOpen} onOpenChange={setHomeServiceOpen}>
        <SheetContent className="w-full sm:max-w-lg bg-gradient-to-br from-cyan-50 to-blue-50 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-teal-900">Вызов специалиста на дом</SheetTitle>
          </SheetHeader>
          <form className="mt-6 space-y-5">
            <div>
              <Label htmlFor="home-name" className="text-sm font-semibold text-teal-900">Ваше имя</Label>
              <Input id="home-name" placeholder="Иван Иванов" className="mt-2 border-2 border-teal-300 focus:border-teal-600" />
            </div>
            <div>
              <Label htmlFor="home-phone" className="text-sm font-semibold text-teal-900">Телефон</Label>
              <Input id="home-phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2 border-2 border-teal-300 focus:border-teal-600" />
            </div>
            <div>
              <Label htmlFor="home-address" className="text-sm font-semibold text-teal-900">Адрес</Label>
              <Input id="home-address" placeholder="Улица, дом, квартира" className="mt-2 border-2 border-teal-300 focus:border-teal-600" />
            </div>
            <div>
              <Label htmlFor="home-specialist" className="text-sm font-semibold text-teal-900">Нужный специалист</Label>
              <select id="home-specialist" className="mt-2 w-full border-2 border-teal-300 rounded-md p-2 focus:border-teal-600">
                <option>Невролог</option>
                <option>Психолог</option>
                <option>Инструктор ЛФК</option>
                <option>Другой специалист</option>
              </select>
            </div>
            <div>
              <Label htmlFor="home-comment" className="text-sm font-semibold text-teal-900">Комментарий</Label>
              <Textarea id="home-comment" placeholder="Опишите вашу ситуацию..." className="mt-2 border-2 border-teal-300 focus:border-teal-600" rows={4} />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-base py-3">
              Вызвать специалиста
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ServiceNeurologistV2;
