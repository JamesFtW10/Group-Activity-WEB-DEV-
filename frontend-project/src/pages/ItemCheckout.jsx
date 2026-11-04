import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Check, CreditCard, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { itemCatalog } from "../components/ItemDataComponents";

const formatPeso = (amount) => `₱${amount.toLocaleString("en-PH")}`;

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
        return (
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
        );
    }

    const inputClass = "mt-2 w-full rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary-strong)] focus:ring-2 focus:ring-[var(--primary)]/30";

    return (
        <div className="min-h-screen bg-[var(--canvas)] text-[var(--text)]">
            <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
                <Link to={`/item/${product.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--primary-strong)]">
                    <ArrowLeft className="h-4 w-4" /> Return to product
                </Link>

                <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
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

                    <aside className="space-y-5 lg:sticky lg:top-6">
                        <section className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_18px_45px_rgba(42,33,22,0.06)]">
                            <h2 className="text-xl font-bold">Order summary</h2>
                            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--panel-alt)] p-3">
                                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2"><img src={product.image} alt={product.name} className="h-full w-full object-contain" /></div>
                                <div className="min-w-0 flex-1"><p className="text-sm text-[var(--muted)]">{product.category}</p><p className="mt-1 truncate font-semibold">{product.name}</p><p className="mt-1 text-sm font-semibold text-[var(--primary-strong)]">{product.price}</p></div>
                            </div>
                            <div className="mt-5 flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--panel-alt)] p-4 text-sm">
                                <span className="font-medium">Quantity</span>
                                <div className="flex items-center gap-3 rounded-full bg-[var(--panel)] px-2 py-1 shadow-sm">
                                    <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line)] transition hover:border-[var(--primary-strong)] hover:text-[var(--primary-strong)]" aria-label="Decrease quantity"><Minus className="h-3.5 w-3.5" /></button>
                                    <span className="min-w-5 text-center font-semibold">{quantity}</span>
                                    <button type="button" onClick={() => setQuantity((current) => current + 1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line)] transition hover:border-[var(--primary-strong)] hover:text-[var(--primary-strong)]" aria-label="Increase quantity"><Plus className="h-3.5 w-3.5" /></button>
                                </div>
                            </div>
                            <div className="mt-6 space-y-3 text-sm text-[var(--muted)]">
                                <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold text-[var(--text)]">{formatPeso(subtotal)}</span></div>
                                <div className="flex justify-between"><span>Shipping</span><span className="font-semibold text-[var(--text)]">{shipping === 0 ? "Free" : formatPeso(shipping)}</span></div>
                            </div>
                            <div className="mt-6 flex justify-between border-t border-[var(--line)] pt-4 text-base font-bold"><span>Total</span><span>{formatPeso(total)}</span></div>
                        </section>
                        <section className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_18px_45px_rgba(42,33,22,0.06)]">
                            <div className="flex items-start gap-3"><div className="rounded-full bg-[var(--primary)]/20 p-2 text-[var(--primary-strong)]"><Truck className="h-4 w-4" /></div><div><p className="font-semibold">Delivery made easy</p><p className="mt-1 text-sm text-[var(--muted)]">Free delivery on orders above ₱5,000.</p></div></div>
                            <div className="mt-4 flex items-start gap-3 border-t border-[var(--line)] pt-4"><div className="rounded-full bg-[var(--accent)]/20 p-2 text-[var(--accent)]"><ShieldCheck className="h-4 w-4" /></div><div><p className="font-semibold">Authenticity guarantee</p><p className="mt-1 text-sm text-[var(--muted)]">Every pair is checked before shipping.</p></div></div>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default ItemCheckout;
