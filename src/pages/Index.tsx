import { useState } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedArticles from '@/components/sections/FeaturedArticles';
import ArtGallery from '@/components/sections/ArtGallery';
import ExclusiveInterviews from '@/components/sections/ExclusiveInterviews';
import PremiumSubscription from '@/components/sections/PremiumSubscription';
import EditorialSection from '@/components/sections/EditorialSection';
import Footer from '@/components/sections/Footer';
import ArticleModal from '@/components/modals/ArticleModal';
import GalleryModal from '@/components/modals/GalleryModal';
import { Article, GalleryItem } from '@/types';
import { featuredArticles, interviews, galleryItems, subscriptionPlans } from '@/data/magazineData';

export default function Index() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <FeaturedArticles 
        articles={featuredArticles} 
        onArticleClick={setSelectedArticle} 
      />
      <ArtGallery 
        galleryItems={galleryItems} 
        onGalleryClick={setSelectedGallery} 
      />
      <ExclusiveInterviews interviews={interviews} />
      <PremiumSubscription subscriptionPlans={subscriptionPlans} />
      <EditorialSection />
      <Footer />
      
      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
      <GalleryModal 
        galleryItem={selectedGallery} 
        onClose={() => setSelectedGallery(null)} 
      />
    </div>
  );
}