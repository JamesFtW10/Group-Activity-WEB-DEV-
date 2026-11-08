import { Link } from "react-router-dom";

function RelatedProductsSection({ relatedProducts }) {
  return (
    <section aria-label="Related products">
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
          
    </section>
  );
}

export default RelatedProductsSection;
