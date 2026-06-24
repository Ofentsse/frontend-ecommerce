import { X } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- Import Link here

export default function TopBanner() {
  return (
    <div className="bg-black text-white text-xs sm:text-sm py-2 px-4 text-center relative flex justify-center items-center">
      
      {/* Replace <a> with <Link> and point to "/register" */}
      <Link 
        to="/register" 
        className="hover:opacity-90 transition-opacity flex items-center flex-wrap justify-center gap-1"
      >
        <span className="hidden sm:inline">Sign up and get 20% off to your first order.</span>
        <span className="sm:hidden">Sign up and get 20% off to your first order.</span>
        <span className="underline font-bold">Sign Up Now</span>
      </Link>

      {/* The X button stays outside the link */}
      <button className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-gray-400 transition-colors">
        <X size={16} />
      </button>
    </div>
  );
}