
import { useEffect, useState } from 'react';

function Carousel({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [items]);

  if (!items.length) return null;

  const currentItem = items[activeIndex];

  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center px-2 py-4 md:px-6">
          <img
            src={currentItem.image}
            alt={currentItem.name}
            className="h-[360px] w-full max-w-[580px] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.28)] md:h-[440px]"
          />
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-3">
        <span className="text-[11px] font-medium tracking-[0.28em] text-[#dfe4e1]">
          {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>

        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.id ?? index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-[#6adf9b]' : 'w-2.5 bg-[#6a6a6a]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Carousel };
export default Carousel;