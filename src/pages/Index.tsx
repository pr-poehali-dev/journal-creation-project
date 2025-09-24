import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  readTime: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Стиль современного джентльмена",
    subtitle: "Как выглядеть безупречно в любой ситуации",
    category: "STYLE",
    image: "/img/a7159cf3-00a4-4938-9e48-4f5ff9d324cc.jpg",
    readTime: "8 мин",
    featured: true
  },
  {
    id: 2,
    title: "Суперкары 2024",
    subtitle: "Топ-10 самых желанных автомобилей года",
    category: "АВТО",
    image: "/img/6a9816a6-75a6-4875-8592-b6f59035e976.jpg",
    readTime: "12 мин"
  },
  {
    id: 3,
    title: "Часы как инвестиция",
    subtitle: "Механические шедевры, которые растут в цене",
    category: "LUXURY",
    image: "/img/86e5ee30-2807-41d8-be6e-0caaaab0019d.jpg",
    readTime: "6 мин"
  }
];

const categories = [
  { name: "СТИЛЬ", count: 24 },
  { name: "АВТО", count: 18 },
  { name: "LUXURY", count: 15 },
  { name: "БИЗНЕС", count: 22 },
  { name: "СПОРТ", count: 19 },
  { name: "ТЕХНОЛОГИИ", count: 16 }
];

const interviews = [
  {
    id: 1,
    name: "Александр Петров",
    title: "CEO Компании TechCorp",
    quote: "Успех — это не случайность, а результат последовательных усилий и правильных решений.",
    image: "/img/33d16fb5-65aa-4eb6-9987-384da7c575c8.jpg",
    readTime: "15 мин"
  },
  {
    id: 2,
    name: "Дмитрий Козлов",
    title: "Мишлен-шеф ресторана Beluga",
    quote: "Кулинария — это искусство, которое требует страсти и безупречного вкуса.",
    image: "/img/a52fde34-163b-4555-87ba-d5085cdcb276.jpg",
    readTime: "12 мин"
  }
];

const subscriptionPlans = [
  {
    name: "Digital",
    price: "990",
    period: "в месяц",
    features: [
      "Цифровое издание",
      "Новые статьи каждую неделю",
      "Доступ к архиву",
      "Мобильное приложение"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "2990",
    period: "в месяц",
    features: [
      "Печатное + цифровое издание",
      "Эксклюзивные интервью",
      "Приоритетная доставка",
      "Подарочные аксессуары",
      "Приватные мероприятия"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "9990",
    period: "в месяц",
    features: [
      "Лимитированное издание",
      "Персональный консультант",
      "VIP-доступ к мероприятиям",
      "Премиум аксессуары",
      "Личная встреча с редакцией"
    ],
    popular: false
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-bold tracking-wider text-white">
                GENTLEMAN
              </h1>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-300 hover:text-white transition-colors uppercase text-sm font-medium tracking-wide">Главная</a>
                <a href="#style" className="text-gray-300 hover:text-white transition-colors uppercase text-sm font-medium tracking-wide">Стиль</a>
                <a href="#luxury" className="text-gray-300 hover:text-white transition-colors uppercase text-sm font-medium tracking-wide">Luxury</a>
                <a href="#auto" className="text-gray-300 hover:text-white transition-colors uppercase text-sm font-medium tracking-wide">Авто</a>
                <a href="#business" className="text-gray-300 hover:text-white transition-colors uppercase text-sm font-medium tracking-wide">Бизнес</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                Подписаться
              </Button>
              <Icon name="Search" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        <img 
          src={articles[0].image} 
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-left">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase">
              {articles[0].category}
            </span>
            <h2 className="text-7xl font-bold text-white leading-tight">
              {articles[0].title}
            </h2>
            <p className="text-2xl text-gray-200 max-w-2xl leading-relaxed">
              {articles[0].subtitle}
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                Читать статью
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <span className="text-gray-400 text-sm">{articles[0].readTime} чтения</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12 text-center tracking-wide">РУБРИКИ</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-black/50 border-gray-800 hover:bg-gray-900 transition-colors cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-bold text-white mb-2 tracking-wide">{category.name}</h4>
                  <p className="text-gray-400 text-sm">{category.count} статей</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="galleries" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12 text-center tracking-wide">ИЗБРАННЫЕ МАТЕРИАЛЫ</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={article.id} 
                className={`bg-gray-900 border-gray-800 overflow-hidden hover:scale-105 transition-transform cursor-pointer ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                onClick={() => setSelectedArticle(article)}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'h-96' : 'h-64'}`}>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase mb-3">
                      {article.category}
                    </span>
                    <h4 className={`font-bold text-white leading-tight ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                      {article.title}
                    </h4>
                    {index === 0 && (
                      <p className="text-gray-200 mt-2 text-lg">{article.subtitle}</p>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  {index !== 0 && (
                    <p className="text-gray-400 mb-4">{article.subtitle}</p>
                  )}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.readTime} чтения</span>
                    <Icon name="BookOpen" size={16} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Interviews */}
      <section id="interviews" className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12 text-center tracking-wide">ЭКСКЛЮЗИВНЫЕ ИНТЕРВЬЮ</h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {interviews.map((interview) => (
              <Card key={interview.id} className="bg-black/50 border-gray-800 overflow-hidden hover:bg-gray-900 transition-colors">
                <div className="relative h-80">
                  <img 
                    src={interview.image} 
                    alt={interview.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-2xl font-bold text-white mb-2">{interview.name}</h4>
                    <p className="text-gray-300 text-sm mb-4">{interview.title}</p>
                    <blockquote className="text-white text-lg italic leading-relaxed">
                      “{interview.quote}”
                    </blockquote>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                      Читать интервью
                    </Button>
                    <span className="text-gray-500 text-sm">{interview.readTime} чтения</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Subscription */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6 tracking-wide">ПРЕМИАЛЬНАЯ ПОДПИСКА</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Получайте эксклюзивный контент, приватные мероприятия и премиум-аксессуары. 
              Окунитесь в мир современного лайфстайла.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gray-900 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-white shadow-2xl' : 'border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                      ПОПУЛЯРНЫЙ
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-wide">{plan.name}</h4>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-lg ml-2">₽ {plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-gray-300">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-white mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-3 font-medium ${
                      plan.popular 
                        ? 'bg-white text-black hover:bg-gray-100' 
                        : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                    }`}
                  >
                    Оформить подписку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Отмена в любое время • Без обязательств • Пробный период 14 дней
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase">
                КОЛОНКА РЕДАКТОРА
              </span>
              <h3 className="text-4xl font-bold text-white leading-tight">
                Философия современного мужского стиля
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                В эпоху, когда границы между формальным и повседневным стилем стираются, 
                важно понимать основы элегантности, которые остаются неизменными на протяжении десятилетий.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Стиль — это не следование трендам, а понимание того, что подходит именно вам. 
                Это инвестиция в качественные вещи, которые прослужат годы, и умение их правильно сочетать.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Читать полностью
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg"></div>
              <img 
                src="/img/a7159cf3-00a4-4938-9e48-4f5ff9d324cc.jpg" 
                alt="Editorial"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4" onClick={() => setSelectedArticle(null)}>
          <div className="max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              <Button 
                variant="ghost" 
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedArticle(null)}
              >
                <Icon name="X" size={24} />
              </Button>
              <div className="absolute bottom-4 left-4">
                <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase mb-2">
                  {selectedArticle.category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-3xl font-bold text-white mb-4">{selectedArticle.title}</h4>
              <p className="text-xl text-gray-300 mb-6">{selectedArticle.subtitle}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                <span>{selectedArticle.readTime} чтения</span>
                <div className="flex items-center space-x-4">
                  <Icon name="Eye" size={16} />
                  <span>2.4k просмотров</span>
                </div>
              </div>
              <Button className="bg-white text-black hover:bg-gray-100 w-full py-3">
                Читать полную статью
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white tracking-wider">GENTLEMAN</h4>
              <p className="text-gray-400">
                Премиальный мужской журнал о стиле, роскоши и успехе
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Twitter" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Youtube" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold tracking-wide uppercase">Рубрики</h5>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Стиль</a>
                <a href="#" className="block hover:text-white transition-colors">Luxury</a>
                <a href="#" className="block hover:text-white transition-colors">Автомобили</a>
                <a href="#" className="block hover:text-white transition-colors">Бизнес</a>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold tracking-wide uppercase">О журнале</h5>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Редакция</a>
                <a href="#" className="block hover:text-white transition-colors">Реклама</a>
                <a href="#" className="block hover:text-white transition-colors">Контакты</a>
                <a href="#" className="block hover:text-white transition-colors">Подписка</a>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold tracking-wide uppercase">Подписка</h5>
              <p className="text-gray-400 text-sm">
                Получайте лучшие статьи о стиле и успехе
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l text-white placeholder-gray-500"
                />
                <Button className="bg-white text-black hover:bg-gray-100 rounded-l-none">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Gentleman Magazine. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;