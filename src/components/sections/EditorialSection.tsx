import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function EditorialSection() {
  return (
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
  );
}