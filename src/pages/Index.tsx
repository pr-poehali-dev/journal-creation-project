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

      {/* Photo Gallery */}
      <section id="galleries" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-black mb-12 text-center">Галерея фотографий</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setSelectedPhoto(photo)}>
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-black mb-3">{photo.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">{photo.description}</p>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm">
                      View Photo
                    </Button>
                    <span className="text-sm text-gray-500">стр. {photo.page}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-black mb-12 text-center">Статьи и интервью</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-black">Техника черно-белой фотографии</h4>
              <p className="text-gray-600 leading-relaxed">
                Черно-белая фотография — это не просто отсутствие цвета. Это особый язык визуального повествования, 
                где каждый оттенок серого несет смысловую нагрузку. В этой статье мы рассмотрим основные принципы 
                работы с контрастом, композицией и светом.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Мастерство черно-белой фотографии требует понимания того, как различные цвета переводятся 
                в оттенки серого. Красный фильтр может сделать небо драматически темным, а желтый — 
                подчеркнуть детали в облаках.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-black">Композиция в современной фотографии</h4>
              <p className="text-gray-600 leading-relaxed">
                Правила композиции существуют не для того, чтобы их слепо соблюдать, а чтобы знать, 
                когда и как их нарушать. Золотое сечение, правило третей, ведущие линии — все эти техники 
                служат одной цели: созданию гармоничного и выразительного изображения.
              </p>
              <p className="text-gray-600 leading-relaxed">
                В эпоху цифровой фотографии важно помнить о классических принципах, но не бояться 
                экспериментировать с новыми подходами к кадрированию и визуальному повествованию.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPhoto(null)}>
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.title}
                className="w-full h-[60vh] object-cover"
              />
              <Button 
                variant="ghost" 
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedPhoto(null)}
              >
                <Icon name="X" size={24} />
              </Button>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-black mb-4">{selectedPhoto.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">{selectedPhoto.description}</p>
              <p className="text-sm text-gray-500">Страница {selectedPhoto.page}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold mb-4">PHOTOGRAPHY MAGAZINE</h4>
          <p className="text-gray-400 mb-6">
            Ежемесячное издание для профессиональных фотографов и ценителей искусства
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            <Icon name="Twitter" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;