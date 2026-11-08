import { useNavigate, Link, useParams } from "react-router-dom";
import { itemCatalog } from "../data/ItemDataComponents";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProductBreadcrumbSection from "../components/Item/ProductBreadcrumbSection";
import ProductDetailsSection from "../components/Item/ProductDetailsSection";

function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [size, setSize] = useState(40);
  const [quantity, setQuantity] = useState(1);
  const product = itemCatalog.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Item not found</h1>
          <p className="text-gray-600 mb-6">The item you are looking for does not exist.</p>
          <Link to="/items" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = itemCatalog.filter((item) => item.id !== product.id).slice(0, 4);
  const letterBasedSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const sizesOptions = product.category === "Laces" || product.category === "ShoeBag" || product.category === "Socks"
    ? letterBasedSizes
    : [38, 39, 40, 41, 42, 43, 44];
  const sizeOptions = product.category === "ShoeCare"
    ? ["100 mL", "200 mL", "300 mL", "400 mL", "500 mL"]
    : sizesOptions;

  return (
    <div className="mt-6 min-h-screen bg-[var(--canvas)] text-[var(--text)]">
      <ProductBreadcrumbSection />
      <ProductDetailsSection
        product={product}
        relatedProducts={relatedProducts}
        sizeOptions={sizeOptions}
        size={size}
        setSize={setSize}
        quantity={quantity}
        setQuantity={setQuantity}
        navigate={navigate}
      />
    </div>
  );
}

export default Item;
