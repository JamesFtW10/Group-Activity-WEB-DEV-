import { SlidersHorizontal } from "lucide-react";

function ProductsFilterSection({ categories, selectedCategory, filteredCount, sortOrder, onCategoryChange, onSortChange }) {
  return (
    <section aria-label="Product filters">
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4">
            <div className="flex items-center justify-between sm:justify-start gap-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Categories:</span>
              </div>
              <span className="text-sm text-gray-600">{filteredCount} Products</span>
            </div>
            <select
              aria-label="Sort products by price"
              value={sortOrder}
              onChange={(event) => onSortChange(event.target.value)}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          <div className="category-scroll-shell">
            <div className="category-scroll -mx-6 px-6 flex flex-nowrap gap-4 sm:gap-6 overflow-x-auto pb-1 snap-x snap-mandatory">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
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
    </section>
  );
}

export default ProductsFilterSection;
