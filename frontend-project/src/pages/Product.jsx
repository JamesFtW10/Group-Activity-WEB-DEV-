import { useState } from "react";
import { itemCatalog } from "../data/ItemDataComponents";
import ProductsHeaderSection from "../components/Product/ProductsHeaderSection";
import ProductsFilterSection from "../components/Product/ProductsFilterSection";
import ProductsGridSection from "../components/Product/ProductsGridSection";

function Product() {
  const [sortOrder, setSortOrder] = useState("low-to-high");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(itemCatalog.map((item) => item.category))];
  const filteredItems = selectedCategory === "All"
    ? itemCatalog
    : itemCatalog.filter((item) => item.category === selectedCategory);
  const sortedItems = [...filteredItems].sort((a, b) => {
    const priceA = Number(a.price.replace(/[^0-9.]/g, ""));
    const priceB = Number(b.price.replace(/[^0-9.]/g, ""));
    return sortOrder === "high-to-low" ? priceB - priceA : priceA - priceB;
  });

  return (
    <div className="mt-20 min-h-screen bg-gray-50">
      <ProductsHeaderSection />
      <ProductsFilterSection
        categories={categories}
        selectedCategory={selectedCategory}
        filteredCount={filteredItems.length}
        sortOrder={sortOrder}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortOrder}
      />
      <ProductsGridSection
        products={sortedItems}
        totalProducts={itemCatalog.length}
        filteredCount={filteredItems.length}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default Product;

