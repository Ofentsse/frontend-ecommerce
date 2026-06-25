import { Star } from 'lucide-react';

export default function ProductCard({ image, name, rating, price, originalPrice, discount }) {
  
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => {
      if (i < Math.floor(rating)) return <Star key={i} size={16} fill="currentColor" stroke="none" />;
      else if (i === Math.floor(rating) && rating % 1 !== 0) {
        return <div key={i} className="relative w-4 h-4"><Star size={16} className="absolute text-yellow-400" fill="none" /><div className="absolute overflow-hidden w-2 h-4 text-yellow-400"><Star size={16} fill="currentColor" /></div></div>;
      }
      else return <Star key={i} size={16} fill="none" className="text-gray-300" />;
    });
  };

  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden aspect-square mb-4 relative">
        <img src={image} alt={name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="flex text-yellow-400">{renderStars(rating)}</div>
          <span className="text-xs sm:text-sm">{rating}/<span className="text-gray-400">5</span></span>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xl sm:text-2xl font-bold text-black">${price}</span>
          {originalPrice && <span className="text-lg sm:text-xl text-gray-400 line-through">${originalPrice}</span>}
          {discount && <span className="text-xs sm:text-sm text-red-500 bg-red-100 px-2 py-1 rounded-full font-medium">-{discount}%</span>}
        </div>
      </div>
    </div>
  );
}