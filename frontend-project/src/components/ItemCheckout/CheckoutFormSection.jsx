import { Check, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const formatPeso = (amount) => `₱${amount.toLocaleString("en-PH")}`;

function CheckoutFormSection({ product, form, handleChange, handleSubmit, inputClass, total }) {
  return (
    <section aria-label="Checkout form">
                    <form onSubmit={handleSubmit} className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_18px_45px_rgba(42,33,22,0.06)] md:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-5">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-strong)]">Checkout</p>
                                <h1 className="mt-2 text-3xl font-bold">Complete your order</h1>
                            </div>
                            <div className="rounded-full bg-[var(--panel-alt)] px-3 py-2 text-xs font-semibold">Secure checkout</div>
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-[var(--line)] bg-[var(--panel-alt)] p-4">
                            <div><p className="text-sm font-medium text-[var(--muted)]">Shipping details</p><p className="mt-1 font-semibold">Where should we deliver?</p></div>
                            <div className="rounded-full bg-[var(--accent)]/20 p-2 text-[var(--accent)]"><Check className="h-4 w-4" /></div>
                        </div>

                        <div className="mt-7 grid gap-5 md:grid-cols-2">
                            <label className="block text-sm font-semibold">Full name<input required autoComplete="name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Juan Dela Cruz" className={inputClass} /></label>
                            <label className="block text-sm font-semibold">Email address<input required autoComplete="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="juan@email.com" className={inputClass} /></label>
                        </div>
                        <label className="mt-5 block text-sm font-semibold">Street address<input required autoComplete="street-address" type="text" name="address" value={form.address} onChange={handleChange} placeholder="123 Main Street" className={inputClass} /></label>
                        <div className="mt-5 grid gap-5 md:grid-cols-2">
                            <label className="block text-sm font-semibold">City<input required autoComplete="address-level2" type="text" name="city" value={form.city} onChange={handleChange} placeholder="Quezon City" className={inputClass} /></label>
                            <label className="block text-sm font-semibold">ZIP code<input required autoComplete="postal-code" inputMode="numeric" type="text" name="zip" value={form.zip} onChange={handleChange} placeholder="1101" className={inputClass} /></label>
                        </div>

                        <div className="mt-8 border-t border-[var(--line)] pt-6">
                            <div className="flex items-center justify-between gap-3"><h2 className="text-lg font-semibold">Payment method</h2><div className="flex items-center gap-2 text-[var(--muted)]"><CreditCard className="h-4 w-4" /><span className="text-sm font-medium">At checkout</span></div></div>
                            <div className="mt-4 rounded-2xl border border-[var(--line)] bg-[var(--panel-alt)] p-4 text-sm text-[var(--muted)]">Payment details will be arranged when your order is confirmed.</div>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <button type="submit" className="rounded-full bg-[var(--primary-strong)] px-7 py-3 text-sm font-bold text-white shadow-sm transition cursor-pointer  hover:opacity-90">Place order · {formatPeso(total)}</button>
                            <Link to={`/item/${product.id}`} className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--primary-strong)] hover:text-[var(--primary-strong)]">Continue shopping</Link>
                        </div>
                    </form>
                
    </section>
  );
}

export default CheckoutFormSection;
