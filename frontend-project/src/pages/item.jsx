import { Link, useParams } from "react-router-dom";
import { itemCatalog } from "../components/ItemDataComponents";
import React from "react";
import { ArrowLeft, Heart, ShoppingCart, Truck, ShieldCheck, RefreshCw } from "lucide-react";

function Item() {
  const { id } = useParams();
  const [size, setSize] = React.useState(40);
  const [quantity, setQuantity] = React.useState(1);
  const product = itemCatalog.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Item not found</h1>
          <p className="text-gray-600 mb-6">The item you are looking for does not exist.</p>
          <Link 
            to="/items" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (exclude current product)
  const relatedProducts = itemCatalog
    .filter(item => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            to="/items" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl overflow-hidden shadow-lg">
          
          {/* Product Image */}
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-12">
            <span className="absolute top-6 left-6 px-4 py-2 text-xs font-bold bg-black text-white rounded-full shadow-lg">
              New Arrival
            </span>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"></div>

            <img
              src={product.image}
              alt={product.name}
              className="relative w-full max-w-md object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>


          {/* Product Info */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">{product.price}</span>
                <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                  In Stock
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {[38, 39, 40, 41, 42, 43, 44].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`cursor-pointer px-6 py-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                        size === s
                          ? "border-black bg-black text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="cursor-pointer text-gray-800 w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="text-gray-900 text-lg font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="cursor-pointer text-gray-800 w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="cursor-pointer flex items-center justify-center w-14 h-14 border-2 border-gray-300 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all">
                  <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
                </button>
              </div>

              {/* Features */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span>Free shipping on orders over ₱5,000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span>100% Authentic Products</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <RefreshCw className="w-5 h-5 text-purple-600" />
                  <span>30-Day Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/item/${item.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-square">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-lg font-bold text-gray-900">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
