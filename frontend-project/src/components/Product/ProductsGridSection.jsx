import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

function ProductsGridSection({ products, totalProducts, filteredCount, selectedCategory }) {
  return (
    <section aria-label="Product collection">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {products.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden bg-gray-100 aspect-square">
                <img className="w-full h-full object-contain p-3 transition-transform duration-500" src={item.image} alt={item.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</div>
              </div>
              <div className="p-3">
                <h2 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-1 group-hover:text-black-600 transition-colors">{item.name}</h2>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className={`w-3 h-3 ${index < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : index < item.rating ? "fill-yellow-400/50 text-yellow-400" : "fill-none text-gray-300"}`} />
                  ))}
                  <span className="text-xs text-gray-600 ml-1">{item.rating}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-base font-bold text-gray-900">{item.price}</span>
                  <span className="text-xs text-black font-semibold group-hover:gap-1.5 inline-flex items-center gap-1 transition-all">View <ArrowRight className="w-3 h-3" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-10">
          Showing {filteredCount} of {totalProducts} products
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>
      </div>
    </section>
  );
}

export default ProductsGridSection;
