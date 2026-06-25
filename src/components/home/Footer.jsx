import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- 1. Import Link

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] pt-0 relative mt-12 lg:mt-20">
      
      {/* --- Newsletter Banner (Floats on top) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 -mb-20 lg:-mb-24">
        <div className="bg-black rounded-[30px] px-6 py-10 md:px-16 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase leading-[1.1] max-w-lg text-center lg:text-left">
            Stay up to date about our latest offers
          </h2>
          <div className="w-full lg:w-auto flex flex-col gap-3 lg:min-w-[350px]">
            <div className="relative w-full bg-white rounded-full px-4 py-3 flex items-center">
              <Mail size={20} className="text-gray-400 mr-2" />
              <input type="email" placeholder="Enter your email address" className="bg-transparent outline-none w-full text-sm placeholder-gray-400" />
            </div>
            <button onClick={() => alert('Welcome to the Shop.co Newsletter! (Coming soon)')} className="w-full bg-white text-black font-medium py-3 rounded-full hover:bg-gray-100 transition-colors">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>

      {/* --- Main Footer Content --- */}
      <div className="pt-32 lg:pt-48 px-4 sm:px-6 lg:px-12 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 border-b border-gray-300 pb-12 mb-8">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4 pr-4">
            <Link to="/" className="text-3xl font-extrabold tracking-tight uppercase text-black hover:opacity-80 transition-opacity cursor-pointer">SHOP.CO</Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
            <div className="flex gap-3 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"><TwitterIcon /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"><FacebookIcon /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"><InstagramIcon /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"><YoutubeIcon /></a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-black text-base tracking-wider">COMPANY</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <Link to="/register" className="hover:text-black transition-colors">About</Link>
              <Link to="/register" className="hover:text-black transition-colors">Features</Link>
              <Link to="/register" className="hover:text-black transition-colors">Works</Link>
              <Link to="/register" className="hover:text-black transition-colors">Career</Link>
            </div>
          </div>

          {/* Column 3: Help */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-black text-base tracking-wider">HELP</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <Link to="/register" className="hover:text-black transition-colors">Customer Support</Link>
              <Link to="/register" className="hover:text-black transition-colors">Delivery Details</Link>
              <Link to="/register" className="hover:text-black transition-colors">Terms & Conditions</Link>
              <Link to="/register" className="hover:text-black transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Column 4: FAQ */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-black text-base tracking-wider">FAQ</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <Link to="/register" className="hover:text-black transition-colors">Account</Link>
              <Link to="/register" className="hover:text-black transition-colors">Manage Deliveries</Link>
              <Link to="/register" className="hover:text-black transition-colors">Orders</Link>
              <Link to="/register" className="hover:text-black transition-colors">Payments</Link>
            </div>
          </div>

          {/* Column 5: Resources */}
          <div className="flex flex-col gap-3 lg:block hidden">
            <h4 className="font-bold text-black text-base tracking-wider">RESOURCES</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <Link to="/register" className="hover:text-black transition-colors">Free eBooks</Link>
              <Link to="/register" className="hover:text-black transition-colors">Development Tutorial</Link>
              <Link to="/register" className="hover:text-black transition-colors">How to - Blog</Link>
              <Link to="/register" className="hover:text-black transition-colors">Youtube Playlist</Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Payment Icons */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 text-center md:text-left">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-2">
            <span className="bg-white px-3 py-1 rounded shadow-sm text-[10px] font-bold text-blue-900 border border-gray-100">VISA</span>
            <span className="bg-white px-3 py-1 rounded shadow-sm text-[10px] font-bold text-red-600 border border-gray-100">MC</span>
            <span className="bg-white px-3 py-1 rounded shadow-sm text-[10px] font-bold text-blue-500 border border-gray-100">PayPal</span>
            <span className="bg-white px-3 py-1 rounded shadow-sm text-[10px] font-bold text-gray-800 border border-gray-100">Apple</span>
            <span className="bg-white px-3 py-1 rounded shadow-sm text-[10px] font-bold text-black border border-gray-100">G Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}