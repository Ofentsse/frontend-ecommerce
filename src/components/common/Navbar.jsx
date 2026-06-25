import { Menu, Search, ShoppingCart, User, LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left Section - Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="lg:hidden text-gray-800">
            <Menu size={24} />
          </button>
          <Link to="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase hover:opacity-80 transition-opacity whitespace-nowrap">
            THRIFT SET
          </Link>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/category" className="flex items-center gap-1 hover:text-black transition-colors whitespace-nowrap">
            Shop <span className="text-[10px]">▼</span>
          </Link>
          <Link to="/category" className="hover:text-black transition-colors whitespace-nowrap">On Sale</Link>
          <Link to="/category" className="hover:text-black transition-colors whitespace-nowrap">New Arrivals</Link>
          <Link className="hover:text-black transition-colors whitespace-nowrap">Brands</Link>
        </div>

        {/* Right Section - Search & Icons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 w-48 lg:w-64">
            <Search size={18} className="text-gray-500 mr-2 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent outline-none w-full text-sm placeholder-gray-500" 
            />
          </div>
          
          {/* Mobile Search */}
          <button className="sm:hidden text-gray-800 hover:text-black transition-colors">
            <Search size={22} />
          </button>
          
          {/* Cart */}
          <Link to="/cart" className="text-gray-800 hover:text-black transition-colors">
            <ShoppingCart size={22} />
          </Link>
          
          {/* Auth Section */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link to="/profile" className="text-gray-800 hover:text-black transition-colors">
                <User size={22} />
              </Link>
              <button 
                onClick={logout}
                className="text-sm text-gray-600 hover:text-black transition-colors hidden sm:block"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link 
                to="/login" 
                className="text-gray-800 hover:text-black transition-colors flex items-center gap-1.5"
              >
                <LogIn size={20} />
                <span className="text-sm font-medium hidden sm:inline">Sign In</span>
              </Link>
              <Link 
                to="/register" 
                className="text-gray-800 hover:text-black transition-colors flex items-center gap-1.5"
              >
                <UserPlus size={20} />
                <span className="text-sm font-medium hidden sm:inline">Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}