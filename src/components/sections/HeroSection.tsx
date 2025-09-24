import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
  );
}