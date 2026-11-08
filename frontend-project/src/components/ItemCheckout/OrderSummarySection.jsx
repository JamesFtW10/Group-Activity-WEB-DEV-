import { Minus, Plus, ShieldCheck, Truck } from "lucide-react";

const formatPeso = (amount) => `₱${amount.toLocaleString("en-PH")}`;

function OrderSummarySection({ product, quantity, setQuantity, subtotal, shipping, total }) {
  return (
    <section aria-label="Order summary">
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
                    
    </section>
  );
}

export default OrderSummarySection;
