import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Photo {
  id: number;
  title: string;
  description: string;
  image: string;
  page: number;
}

const photos: Photo[] = [
  {
    id: 1,
    title: "Портретная съемка",
    description: "Исследование человеческих эмоций через объектив камеры. Черно-белая фотография подчеркивает глубину взгляда.",
    image: "/img/e6ce4f6d-5677-4d77-9a6c-57d341797b0e.jpg",
    page: 3
  },
  {
    id: 2,
    title: "Городские пейзажи", 
    description: "Архитектурная красота современного города в минималистичном стиле. Игра света и тени на городских улицах.",
    image: "/img/ed45fc63-8ebd-4a34-8d15-8ae71650e0fd.jpg",
    page: 7
  },
  {
    id: 3,
    title: "Природные ландшафты",
    description: "Драматичное небо и естественная композиция создают атмосферу спокойствия и величия природы.",
    image: "/img/92925b68-39af-4eaf-b826-58fabeacb451.jpg",
    page: 11
  }
];

const tableOfContents = [
  { title: "От редактора", page: 2 },
  { title: "Портретная съемка", page: 3 },
  { title: "Техника черно-белой фотографии", page: 5 },
  { title: "Городские пейзажи", page: 7 },
  { title: "Композиция в фотографии", page: 9 },
  { title: "Природные ландшафты", page: 11 },
  { title: "Авторы номера", page: 12 }
];

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-black">
                PHOTOGRAPHY MAGAZINE
              </h1>
              <p className="text-gray-600 mt-1">Issue #42 • September 2024</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600">Home</a>
              <a href="#galleries" className="text-gray-900 hover:text-gray-600">Galleries</a>
              <a href="#articles" className="text-gray-900 hover:text-gray-600">Articles</a>
              <a href="#about" className="text-gray-900 hover:text-gray-600">About</a>
              <a href="#contact" className="text-gray-900 hover:text-gray-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold text-black mb-6 leading-tight">
              Искусство через объектив
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Исследуем мир современной фотографии через призму творчества и технического мастерства. 
              Каждый кадр — это история, рассказанная светом и тенью.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
              <Icon name="Camera" size={20} className="mr-2" />
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-black mb-12 text-center">Содержание номера</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tableOfContents.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100">
                <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                <span className="text-gray-600 font-mono">стр. {item.page}</span>
              </div>
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