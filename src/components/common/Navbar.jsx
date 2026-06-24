import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex justify-between items-center">
        
        {/* Logo - Links to Home */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden"><Menu size={24} /></button>
          <Link to="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase cursor-pointer hover:opacity-80 transition-opacity">
            THRIFT SET
          </Link>
        </div>

        {/* Middle Links */}
        <div className="hidden lg:flex items-center gap-6 text-base font-medium text-gray-700">
          <Link to="/category" className="flex items-center gap-1 hover:text-black transition-colors">Shop <span className="text-[10px]">▼</span></Link>
          <Link to="/category" className="hover:text-black transition-colors">On Sale</Link>
          <Link to="/category" className="hover:text-black transition-colors">New Arrivals</Link>
          <Link className="hover:text-black transition-colors">Brands</Link>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4 flex-1 justify-end lg:justify-start lg:flex-none lg:w-auto ml-4">
          <div className="hidden sm:flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 w-full max-w-[400px] lg:ml-10">
            <Search size={18} className="text-gray-500 mr-2" />
            <input type="text" placeholder="Search for products..." className="bg-transparent outline-none w-full text-sm placeholder-gray-500" />
          </div>
          
          {/* Actions */}
          <button className="sm:hidden text-gray-800 hover:text-black transition-colors"><Search size={22} /></button>
          <Link to="/cart" className="text-gray-800 hover:text-black transition-colors"><ShoppingCart size={22} /></Link>
          <Link to="/shop" className="text-gray-800 hover:text-black transition-colors"><User size={22} /></Link>
        </div>
      </div>
    </nav>
  );
}