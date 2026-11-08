import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const formatPeso = (amount) => `₱${amount.toLocaleString("en-PH")}`;

function OrderSuccessSection({ form, quantity, product, total }) {
  return (
    <section aria-label="Order success">
            <div className="flex min-h-[65vh] items-center justify-center bg-[var(--canvas)] px-5 py-12 text-[var(--text)]">
                <section className="w-full max-w-xl rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-8 text-center shadow-[0_18px_45px_rgba(42,33,22,0.06)] md:p-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)]/20 text-[var(--accent)]"><Check className="h-8 w-8" /></div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-strong)]">Order received</p>
                    <h1 className="mt-2 text-3xl font-bold">Thank you, {form.name}!</h1>
                    <p className="mt-3 text-[var(--muted)]">Your order for {quantity} {product.name}{quantity > 1 ? "s" : ""} has been placed. A confirmation will be sent to {form.email}.</p>
                    <p className="mt-5 text-lg font-semibold">Total: {formatPeso(total)}</p>
                    <Link to="/items" className="mt-8 inline-flex rounded-full bg-[var(--primary-strong)] px-6 py-3 font-semibold text-white transition hover:opacity-90">Continue shopping</Link>
                </section>
            </div>
            
    </section>
  );
}

export default OrderSuccessSection;
