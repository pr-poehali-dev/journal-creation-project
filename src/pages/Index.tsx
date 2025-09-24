import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  readTime: string;
}

interface Interview {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  readTime: string;
}

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  photographer: string;
  description: string;
}

interface SubscriptionPlan {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
}

export default function Index() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);

  const featuredArticles: Article[] = [
    {
      id: 1,
      title: "Искусство соблазнения в бизнесе",
      subtitle: "Как харизма и элегантность помогают достигать вершин корпоративного мира",
      category: "БИЗНЕС",
      image: "/img/f780a50c-db34-4ffc-80b2-8c6b20cf0593.jpg",
      readTime: "12 мин"
    },
    {
      id: 2,
      title: "Роскошь частного пространства",
      subtitle: "Дизайн интерьеров для успешного мужчины: от минимализма к декадансу",
      category: "СТИЛЬ ЖИЗНИ",
      image: "/img/b74b3fab-2d31-475c-82b2-bfddc14d29f9.jpg",
      readTime: "8 мин"
    },
    {
      id: 3,
      title: "Философия мужской элегантности",
      subtitle: "Вечные принципы стиля, которые не подвластны времени и моде",
      category: "МОДА",
      image: "/img/fe04a14e-bf3a-4a99-bfc1-b16dabf0a219.jpg",
      readTime: "15 мин"
    },
    {
      id: 4,
      title: "Коллекционирование как искусство",
      subtitle: "От винтажных часов до современного арта: что собирают джентльмены",
      category: "КОЛЛЕКЦИИ",
      image: "/img/c647e1e6-872e-46e5-9bb6-f2026fa94c71.jpg",
      readTime: "10 мин"
    }
  ];

  const interviews: Interview[] = [
    {
      id: 1,
      name: "Александра Михайлова",
      title: "Фотограф, арт-директор",
      quote: "Красота — это форма гениальности, которая не требует объяснений",
      image: "/img/c1aa4ae5-85da-42aa-b049-6bc61ce13915.jpg",
      readTime: "20 мин"
    },
    {
      id: 2,
      name: "Виктория Соколова", 
      title: "Модель, актриса",
      quote: "Настоящая элегантность — это умение быть собой в любой ситуации",
      image: "/img/cc1e0f0a-b078-4202-8e9f-9f29b8468e2b.jpg",
      readTime: "16 мин"
    }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Свет и тень",
      category: "НЮ-АРТ",
      image: "/img/f780a50c-db34-4ffc-80b2-8c6b20cf0593.jpg",
      photographer: "Андрей Волков",
      description: "Исследование света и формы в классическом ню-арт стиле"
    },
    {
      id: 2,
      title: "Элегантность линий",
      category: "ПОРТРЕТ",
      image: "/img/b74b3fab-2d31-475c-82b2-bfddc14d29f9.jpg",
      photographer: "Марина Петрова",
      description: "Художественная фотография, раскрывающая красоту женственности"
    },
    {
      id: 3,
      title: "Минимализм форм",
      category: "АРТ-НЮ",
      image: "/img/fe04a14e-bf3a-4a99-bfc1-b16dabf0a219.jpg",
      photographer: "Дмитрий Кузнецов",
      description: "Современный взгляд на классическую художественную фотографию"
    },
    {
      id: 4,
      title: "Игра контрастов",
      category: "СТУДИЯ",
      image: "/img/c647e1e6-872e-46e5-9bb6-f2026fa94c71.jpg",
      photographer: "Елена Смирнова",
      description: "Драматическое освещение в стиле fashion-арт"
    },
    {
      id: 5,
      title: "Естественная красота",
      category: "NATURAL",
      image: "/img/c1aa4ae5-85da-42aa-b049-6bc61ce13915.jpg",
      photographer: "Алексей Морозов",
      description: "Природная грация в интерьерной съемке"
    },
    {
      id: 6,
      title: "Роскошь интимности",
      category: "BOUDOIR",
      image: "/img/cc1e0f0a-b078-4202-8e9f-9f29b8468e2b.jpg",
      photographer: "Ольга Белова",
      description: "Изысканная будуарная фотография в премиальном стиле"
    }
  ];

  const subscriptionPlans: SubscriptionPlan[] = [
    {
      name: "DIGITAL",
      price: "1 490",
      period: "в месяц",
      features: [
        "Цифровой доступ ко всем материалам",
        "Архив за 3 года",
        "Эксклюзивные фотогалереи",
        "Мобильное приложение"
      ]
    },
    {
      name: "PREMIUM",
      price: "3 990",
      period: "в месяц",
      popular: true,
      features: [
        "Все возможности Digital",
        "Печатная версия журнала",
        "Приглашения на закрытые мероприятия",
        "Персональные рекомендации",
        "Приоритетная поддержка"
      ]
    },
    {
      name: "ELITE",
      price: "12 990",
      period: "в месяц",
      features: [
        "Все возможности Premium", 
        "Личная встреча с редакцией",
        "Эксклюзивные интервью",
        "Доступ к частным мероприятиям",
        "Персональный консультант по стилю",
        "Лимитированные коллекционные издания"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-4xl font-bold tracking-wider">GENTLEMAN</h1>
              <nav className="hidden md:flex space-x-8 text-sm tracking-wide">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">СТИЛЬ</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">LUXURY</a>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">АРТ-ГАЛЕРЕЯ</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">БИЗНЕС</a>
                <a href="#interviews" className="text-gray-300 hover:text-white transition-colors">ИНТЕРВЬЮ</a>
              </nav>
            </div>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
              ПОДПИСАТЬСЯ
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/f780a50c-db34-4ffc-80b2-8c6b20cf0593.jpg" 
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-bold tracking-wider uppercase mb-6">
            ЭКСКЛЮЗИВНЫЙ НОМЕР
          </span>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            ИСКУССТВО<br />СОБЛАЗНЕНИЯ
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Философия мужского стиля, роскошь и элегантность в каждой детали. 
            Откройте мир изысканного вкуса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
              ЧИТАТЬ НОМЕР
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              АРТ-ГАЛЕРЕЯ
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 tracking-wide">ИЗБРАННЫЕ МАТЕРИАЛЫ</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Эксклюзивные статьи о стиле, успехе и философии современного джентльмена
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredArticles.map((article) => (
              <Card 
                key={article.id} 
                className="bg-black border-gray-800 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative h-80">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wider">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-2 leading-tight">{article.title}</h4>
                    <p className="text-gray-300 text-sm">{article.readTime} чтения</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Art Gallery */}
      <section id="gallery" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 tracking-wide">ХУДОЖЕСТВЕННАЯ ГАЛЕРЕЯ</h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Коллекция изысканной ню-арт фотографии от ведущих мастеров жанра. 
              Искусство красоты в каждом кадре.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card 
                key={item.id}
                className="bg-gray-900 border-gray-800 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedGallery(item)}
              >
                <div className="relative h-96">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.photographer}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                      <Icon name="Eye" size={16} className="mr-2" />
                      ПРОСМОТР
                    </Button>
                  </div>
                </div>
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
                      "{interview.quote}"
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
              Получайте эксклюзивный контент, художественные фотогалереи и премиум-аксессуары. 
              Окунитесь в мир изысканного искусства и стиля.
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
                Эстетика современного мужчины
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Красота — это не просто внешность, это философия жизни. В каждом номере мы исследуем 
                грани мужской привлекательности, от классических канонов до современных интерпретаций.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Наша редакция собирает лучших фотографов и моделей, чтобы создавать контент, 
                который вдохновляет и формирует новые стандарты мужского стиля и элегантности.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Читать полностью
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg"></div>
              <img 
                src="/img/fe04a14e-bf3a-4a99-bfc1-b16dabf0a219.jpg" 
                alt="Editorial"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white tracking-wider">GENTLEMAN</h4>
              <p className="text-gray-400">
                Премиальный мужской журнал о стиле, роскоши и художественной фотографии
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Twitter" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Youtube" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold tracking-wide uppercase">Рубрики</h5>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Стиль</a>
                <a href="#" className="block hover:text-white transition-colors">Арт-галерея</a>
                <a href="#" className="block hover:text-white transition-colors">Интервью</a>
                <a href="#" className="block hover:text-white transition-colors">Luxury</a>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold tracking-wide uppercase">О журнале</h5>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Редакция</a>
                <a href="#" className="block hover:text-white transition-colors">Фотографы</a>
                <a href="#" className="block hover:text-white transition-colors">Контакты</a>
                <a href="#" className="block hover:text-white transition-colors">Подписка</a>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold tracking-wide uppercase">Подписка</h5>
              <p className="text-gray-400 text-sm">
                Получайте эксклюзивный контент и арт-фотографии
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
            <p>&copy; 2024 Gentleman Magazine. Все права защищены. 18+</p>
          </div>
        </div>
      </footer>

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

      {/* Gallery Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4" onClick={() => setSelectedGallery(null)}>
          <div className="max-w-5xl w-full bg-gray-900 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh]">
              <img 
                src={selectedGallery.image} 
                alt={selectedGallery.title}
                className="w-full h-full object-contain bg-black"
              />
              <Button 
                variant="ghost" 
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedGallery(null)}
              >
                <Icon name="X" size={24} />
              </Button>
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-bold tracking-wider">
                  {selectedGallery.category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{selectedGallery.title}</h4>
                  <p className="text-gray-400">Автор: {selectedGallery.photographer}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                    <Icon name="Heart" size={16} />
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">{selectedGallery.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={16} />
                    <span>3.2k</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={16} />
                    <span>247</span>
                  </div>
                </div>
                <Button className="bg-white text-black hover:bg-gray-100">
                  Смотреть серию
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}