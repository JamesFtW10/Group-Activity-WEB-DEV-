import { Truck, ShieldCheck, RefreshCw } from "lucide-react";

const TreeFeature = [
  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Fast Express Shipping",
    description: "Quick delivery to your door",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Verified Authentic Items",
    description: "100% genuine products",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-white" />,
    title: "30-Day Returns",
    description: "Easy returns within 30 days",
  },
];

function IconTreeFeatureSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TreeFeature.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-black p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-mono font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IconTreeFeatureSection;
