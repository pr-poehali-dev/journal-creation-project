import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Interview } from '@/types';

interface ExclusiveInterviewsProps {
  interviews: Interview[];
}

export default function ExclusiveInterviews({ interviews }: ExclusiveInterviewsProps) {
  return (
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
  );
}