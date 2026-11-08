import {ArrowDown} from "lucide-react"; 
import {Link} from "react-router-dom";
import Carousel from "./CarouselComponnents";
import {itemCatalog} from "../../data/ItemDataComponents";


function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="font-mono inline-block px-4 py-2  rounded-full text-sm font-medium">
                 Featured Products
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Premium Footwear
                <span className="block text-transparent bg-clip-text bg-white from-blue-400 to-purple-400">
                  Collection
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-lg">
                High-quality shoes that combine style, comfort, and performance. Engineered for your lifestyle.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/items" 
                  className="inline-flex items-center font-mono gap-2 px-3 py-3 text-sm bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform"
                >
                  Start Shopping
                  <ArrowDown className="w-5 h-5" />
                </Link>

              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-black-to-r from-black-500/20 to-purple-500/20 blur-3xl"></div>
              <Carousel items={itemCatalog.slice(0, 6)} />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>
    ) }

    export default HeroSection