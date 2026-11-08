import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";



function FeatureSection({ products }) {
    return (
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
            {products.map((product) => (
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
    ) }


export default FeatureSection;