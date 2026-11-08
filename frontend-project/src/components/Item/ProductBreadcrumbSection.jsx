import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ProductBreadcrumbSection() {
  return (
    <section aria-label="Product breadcrumb">
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
      
    </section>
  );
}

export default ProductBreadcrumbSection;
