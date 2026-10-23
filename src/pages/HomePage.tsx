import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { RoutinePhilosophy } from '../components/home/RoutinePhilosophy';
import { BestsellersSlider } from '../components/home/BestsellersSlider';
import { IngredientSpotlight } from '../components/home/IngredientSpotlight';
import { SkinQuizBanner } from '../components/home/SkinQuizBanner';
import { CustomerReviews } from '../components/home/CustomerReviews';
import { QuickViewModal } from '../components/product/QuickViewModal';
import type { Product } from '../types';

interface HomePageProps {
  onOpenQuiz: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuiz }) => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <main>
      <HeroSection onOpenQuiz={onOpenQuiz} />
      <RoutinePhilosophy />
      <BestsellersSlider onQuickView={(p) => setQuickViewProduct(p)} />
      <IngredientSpotlight />
      <SkinQuizBanner onOpenQuiz={onOpenQuiz} />
      <CustomerReviews />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </main>
  );
};
