import { Link } from 'react-router-dom'; // <--- THIS LINE WAS MISSING

export default function Hero() {
  return (
    <main className="bg-[#F2F0F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 lg:py-20 items-center">
        
        {/* Left Text */}
        <div className="flex flex-col gap-6 z-10 pt-4 lg:pt-0">
          <h1 className="text-[40px] sm:text-[50px] lg:text-[64px] font-black uppercase leading-[1] tracking-tight text-black">
            Find Clothes<br />That Matches<br />Your Style
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality.
          </p>
          
          {/* The Shop Now Button wrapped in Link */}
          <Link to="/category" className="bg-black text-white px-14 py-4 rounded-full w-fit font-medium hover:bg-gray-800 transition-colors">
            Shop Now
          </Link>
          
          <div className="flex flex-wrap gap-6 sm:gap-12 mt-6">
            <div><h3 className="text-2xl sm:text-4xl font-bold">200+</h3><p className="text-xs sm:text-sm text-gray-500">International Brands</p></div>
            <div className="hidden sm:block w-[1px] bg-gray-300"></div>
            <div><h3 className="text-2xl sm:text-4xl font-bold">2,000+</h3><p className="text-xs sm:text-sm text-gray-500">High-Quality Products</p></div>
            <div className="hidden sm:block w-[1px] bg-gray-300"></div>
            <div><h3 className="text-2xl sm:text-4xl font-bold">30,000+</h3><p className="text-xs sm:text-sm text-gray-500">Happy Customers</p></div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end items-center pt-4 lg:pt-0">
          <div className="absolute -top-10 right-4 lg:top-0 lg:right-10 text-3xl lg:text-5xl">
            <div className="clip-star bg-black w-8 h-8 lg:w-12 lg:h-12 rotate-12"></div>
          </div>
          <div className="absolute bottom-1/2 left-10 lg:left-0 text-4xl lg:text-5xl z-0">
            <div className="clip-star bg-black w-6 h-6 lg:w-10 lg:h-10"></div>
          </div>
          <img 
            src="https://i.pinimg.com/1200x/12/7b/41/127b41ae854386752953e466f23b4de4.jpg" 
            alt="Fashion Models" 
            className="w-full h-auto object-cover mix-blend-multiply" 
          />
        </div>
      </div>
    </main>
  );
}