import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="relative bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-4xl font-bold tracking-wider">MR.ALEKS</h1>
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
  );
}