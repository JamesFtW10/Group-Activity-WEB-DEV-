import { Heart, ShoppingCart, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import RelatedProductsSection from "./RelatedProductsSection";

function ProductDetailsSection({ product, relatedProducts, sizeOptions, size, setSize, quantity, setQuantity, navigate }) {
  return (
    <section aria-label="Product details">
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
                  {sizeOptions.map((s) => (
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
          <RelatedProductsSection relatedProducts={relatedProducts} />
        )}
      </div>
      
    </section>
  );
}

export default ProductDetailsSection;
