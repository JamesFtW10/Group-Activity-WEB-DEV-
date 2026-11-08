import { itemCatalog } from "../data/ItemDataComponents";
import { Carousel } from "../components/Home/CarouselComponnents";
import FeatureSection from "../components/Home/FeatureSection";
import CtaSection from "../components/Home/CtaSection";
import HeroSection from "../components/Home/HeroSection";
import IconTreeFeatureSection from "../components/Home/IconTreeFeatureSection";



function Home() {
  const featuredProducts = itemCatalog.slice(0, 4);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <IconTreeFeatureSection />

      {/* Featured Products Section */}
      <FeatureSection title="Featured Products" products={featuredProducts} />

      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}

export default Home
