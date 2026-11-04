import { useNavigate, Link, useParams } from "react-router-dom";
import { itemCatalog } from "../components/ItemDataComponents";
import React from "react";

import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [size, setSize] = React.useState(40);
  const [quantity, setQuantity] = React.useState(1);
  const product = itemCatalog.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Item not found
          </h1>
          <p className="text-gray-600 mb-6">
            The item you are looking for does not exist.
          </p>
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
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mt-6 min-h-screen bg-[var(--canvas)] text-[var(--text)]">
      {/* Breadcrumb */}
      <div className="border-b border-[var(--line)] bg-[var(--panel)]">
        <div className="max-w-7xl mx-auto px-6 py-4 ">
          <Link
            to="/items"
            className="inline-flex items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--primary-strong)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid overflow-hidden rounded-[30px] border border-[var(--line)] bg-[var(--panel)] shadow-[0_18px_45px_rgba(17,24,39,0.08)] md:grid-cols-2">
          {/* Product Image */}
          <div className="relative flex min-h-[360px] items-center justify-center bg-gray-100 p-8 md:p-12">
            <span className="absolute left-6 top-6 rounded-full bg-black px-4 py-2 text-xs font-bold text-white shadow-lg">
              {product.category}
            </span>

            <img
              src={product.image}
              alt={product.name}
              className="relative w-full max-w-md object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="flex-1">
              <h1 className="mb-4 text-4xl font-bold text-[var(--text)]">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-[var(--text)]">
                  {product.price}
                </span>
                <span className="rounded-full bg-[var(--accent)]/15 px-3 py-1 text-sm font-semibold text-[var(--accent)]">
                  In Stock
                </span>
              </div>

              <p className="mb-8 text-lg leading-relaxed text-[var(--muted)]">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-8">
                <label className="mb-3 block text-sm font-semibold text-[var(--text)]">
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
                          : "border-gray-300 text-[var(--text)] hover:border-black hover:text-black"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <label className="mb-3 block text-sm font-semibold text-[var(--text)]">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="h-10 w-10 cursor-pointer rounded-xl border border-[var(--line)] font-bold text-[var(--text)] transition-colors hover:border-[var(--primary-strong)]"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-lg font-semibold text-[var(--text)]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="h-10 w-10 cursor-pointer rounded-xl border border-[var(--line)] font-bold text-[var(--text)] transition-colors hover:border-[var(--primary-strong)]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <button type="button" onClick={() => navigate(`/item/${product.id}/checkout`, { state: { quantity, size } })} className="flex cursor-pointer flex-1 items-center justify-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-white shadow-lg transition-all  hover:opacity-90 hover:shadow-xl">
                  <ShoppingCart className="w-5 h-5" />
                  Checkout
                </button>

                <button type="button" aria-label="Add to wishlist" className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] transition-all hover:border-[var(--primary-strong)] hover:bg-[black]">
                  <Heart className="h-6 w-6 text-[var(--muted)] transition-colors hover:text-[var(--primary-strong)]" />
                </button>
              </div>

              {/* Features */}
              <div className="space-y-3 border-t border-[var(--line)] pt-6">
                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                    <Truck className="h-5 w-5 text-[var(--muted)]" />
                  <span>Free shipping on orders over ₱5,000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                    <ShieldCheck className="h-5 w-5 text-[var(--muted)]" />
                  <span>100% Authentic Products</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                    <RefreshCw className="h-5 w-5 text-[var(--muted)]" />
                  <span>30-Day Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/item/${item.id}`}
                  className="group overflow-hidden rounded-2xl bg-[var(--panel)] shadow-md transition-all duration-300  hover:shadow-xl"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 font-semibold text-[var(--text)]">
                      {item.name}
                    </h3>
                    <p className="text-lg font-bold text-[var(--text)]">
                      {item.price}
                    </p>
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
