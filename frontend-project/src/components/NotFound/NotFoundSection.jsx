import { Link } from "react-router-dom";
import { SearchX, Home, ArrowLeft } from "lucide-react";

function NotFoundSection() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 bg-white border rounded-full border-[#e7e7e7] shadow-[0_10px_24px_rgba(0,0,0,0.06)] flex items-center justify-center">
            <SearchX className="w-14 h-14 text-[#6b7280]" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-8xl font-extrabold text-[#111827] font-mono tracking-tighter leading-none">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-[#111111]">Page Not Found</h2>
        <p className="mt-3 text-[#4a4a4a] leading-relaxed max-w-sm mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#111827] text-white font-semibold no-underline shadow-lg hover:bg-[#1f2937] transition-colors">
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 bg-white text-[#111111] font-semibold cursor-pointer hover:border-[#111827] hover:text-[#111827] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
        <p className="mt-10 text-xs text-[#6b7280] tracking-wide uppercase font-bold">Kev's Shoes</p>
      </div>
    </div>
  );
}

export default NotFoundSection;
