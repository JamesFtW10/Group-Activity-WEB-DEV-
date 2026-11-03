import { ArrowRight, SlidersHorizontal, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { itemCatalog } from "../components/ItemDataComponents";

function Items() {
  const [sortOrder, setSortOrder] = useState("low-to-high");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from itemCatalog
  const categories = ["All", ...new Set(itemCatalog.map(item => item.category))];

  // Filter by category first, then sort
  const filteredItems = selectedCategory === "All" 
    ? itemCatalog 
    : itemCatalog.filter(item => item.category === selectedCategory);

  const sortedItems = [...filteredItems].sort((a, b) => {
    const priceA = Number(a.price.replace(/[^0-9.]/g, ""));
    const priceB = Number(b.price.replace(/[^0-9.]/g, ""));
    return sortOrder === "high-to-low" ? priceB - priceA : priceA - priceB;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="mt-6 max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">Discover our complete collection of premium footwear</p>
        </div>
      </div>

      {/* Filters & Sort Bar */}
      <div className="bg-white border-b sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4">
            <div className="flex items-center justify-between sm:justify-start gap-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Categories:</span>
              </div>
              <span className="text-sm text-gray-600">{filteredItems.length} Products</span>
            </div>
            <select
              aria-label="Sort products by price"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          {/* Category Filter Buttons */}
          <div className="category-scroll-shell">
            <div className="category-scroll -mx-6 px-6 flex flex-nowrap gap-4 sm:gap-6 overflow-x-auto pb-1 snap-x snap-mandatory">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`snap-start shrink-0 cursor-pointer px-1 py-2 border-b-2 text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? "text-black border-black"
                      : "text-gray-500 border-transparent hover:text-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {sortedItems.map((item) => (
            <Link
              key={item.id}
              to={`/item/${item.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100 aspect-square">
                <img
                  className="w-full h-full object-contain p-3  transition-transform duration-500"
                  src={item.image}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Quick View Badge */}
                <div className="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  NEW
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h2 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-1 group-hover:text-black-600 transition-colors">
                  {item.name}
                </h2>
                
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`w-3 h-3 ${
                        index < Math.floor(item.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : index < item.rating
                          ? "fill-yellow-400/50 text-yellow-400"
                          : "fill-none text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-600 ml-1">
                    {item.rating}
                  </span>
                </div>
                
                {/* Price & Action */}
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-base font-bold text-gray-900">
                    {item.price}
                  </span>
                  <span className="text-xs text-black font-semibold group-hover:gap-1.5 inline-flex items-center gap-1 transition-all">
                    View
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Showing {filteredItems.length} of {itemCatalog.length} products
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>
      </div>
    </div>
  );
}

export default Items;
