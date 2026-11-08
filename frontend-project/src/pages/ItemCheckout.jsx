import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { itemCatalog } from "../data/ItemDataComponents";
import CheckoutFormSection from "../components/ItemCheckout/CheckoutFormSection";
import OrderSummarySection from "../components/ItemCheckout/OrderSummarySection";
import OrderSuccessSection from "../components/ItemCheckout/OrderSuccessSection";

function ItemCheckout() {
  const { id } = useParams();
  const location = useLocation();
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "" });
  const [quantity, setQuantity] = useState(Math.max(1, Number(location.state?.quantity) || 1));
  const [orderPlaced, setOrderPlaced] = useState(false);
  const product = itemCatalog.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[var(--canvas)] p-6 text-[var(--text)]">
        <div className="max-w-md text-center">
          <h1 className="mb-4 text-4xl font-bold">Item not found</h1>
          <p className="mb-6 text-[var(--muted)]">The item you are looking for does not exist.</p>
          <Link to="/items" className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-strong)] px-6 py-3 font-semibold text-white transition hover:opacity-90">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const numericPrice = Number(product.price.replace(/[^\d]/g, ""));
  const subtotal = numericPrice * quantity;
  const shipping = subtotal > 5000 ? 0 : 250;
  const total = subtotal + shipping;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return <OrderSuccessSection form={form} quantity={quantity} product={product} total={total} />;
  }

  const inputClass = "mt-2 w-full rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary-strong)] focus:ring-2 focus:ring-[var(--primary)]/30";

  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
        <Link to={`/item/${product.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--primary-strong)]">
          <ArrowLeft className="h-4 w-4" /> Return to product
        </Link>
        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <CheckoutFormSection product={product} form={form} handleChange={handleChange} handleSubmit={handleSubmit} inputClass={inputClass} total={total} />
          <aside className="space-y-5 lg:sticky lg:top-6">
            <OrderSummarySection product={product} quantity={quantity} setQuantity={setQuantity} subtotal={subtotal} shipping={shipping} total={total} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ItemCheckout;
