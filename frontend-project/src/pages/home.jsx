import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { itemCatalog } from "../components/ItemDataComponents";
import HeroImage from "../assets/hero.png";
import { Carousel } from "../components/CarouselComponnents";


const TreeFeature = [
  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Fast Express Shipping",
    description: "Quick delivery to your door"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Verified Authentic Items",
    description: "100% genuine products"
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-white" />,
    title: "30-Day Returns",
    description: "Easy returns within 30 days"
  }
];






function Home() {
  const featuredProducts = itemCatalog.slice(0, 4);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TreeFeature.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-black p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-mono text-3xl md:text-4xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-600 mt-2">Discover our top picks this season</p>
            </div>
            <Link 
              to="/items" 
              className="hidden md:inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/item/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform "
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-black-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-black font-semibold group-hover:gap-2 inline-flex items-center gap-1">
                      View <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link 
              to="/items" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Upgrade Your Style?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our complete collection and find the perfect shoes for every occasion.
          </p>
          <Link 
            to="/items" 
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform "
          >
            Explore Collection
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
