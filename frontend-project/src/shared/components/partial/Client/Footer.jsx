import { Link } from "react-router-dom";
import KevsShoesLogo from "../../../../assets/ItemsImages/kevs-logo-merged.png";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img className="h-8 w-8 object-contain" src={KevsShoesLogo} alt="Kev's Shoes" />
              <span className="text-white text-lg font-bold">Kev's Shoes</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium footwear collection for every occasion. Quality shoes that combine style and comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h6>
            <ul className="space-y-2">
              <li><Link to="/items" className="text-sm hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/items" className="text-sm hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/items" className="text-sm hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/items" className="text-sm hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h6 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Customer Service</h6>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h6>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Warranty</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 Kev's Shoes. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-xs text-gray-500 px-3 py-1 bg-gray-900 rounded">Fast Shipping</span>
            <span className="text-xs text-gray-500 px-3 py-1 bg-gray-900 rounded">Authentic Products</span>
            <span className="text-xs text-gray-500 px-3 py-1 bg-gray-900 rounded">30-Day Returns</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer