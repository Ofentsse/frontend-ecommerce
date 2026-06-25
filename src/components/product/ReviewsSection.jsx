import React from 'react';
import { Star, MoreHorizontal, Check } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Samantha D.",
    rating: 4.5,
    date: "August 14, 2023",
    review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
  },
  {
    id: 2,
    name: "Alex M.",
    rating: 5,
    date: "August 15, 2023",
    review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: 4.5,
    date: "August 16, 2023",
    review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: 5,
    date: "August 17, 2023",
    review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this shirt stand out."
  },
  {
    id: 5,
    name: "Liam K.",
    rating: 5,
    date: "August 18, 2023",
    review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
  },
  {
    id: 6,
    name: "Ava H.",
    rating: 4.5,
    date: "August 19, 2023",
    review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
  }
];

// Helper to render stars with halves
const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => {
    if (i < Math.floor(rating)) {
      return <Star key={i} size={18} fill="currentColor" stroke="none" />;
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      return (
        <div key={i} className="relative w-[18px] h-[18px]">
          <Star size={18} className="absolute text-yellow-400" fill="none" stroke="currentColor" />
          <div className="absolute overflow-hidden w-[9px] h-[18px] text-yellow-400">
            <Star size={18} fill="currentColor" stroke="none" />
          </div>
        </div>
      );
    } else {
      return <Star key={i} size={18} fill="none" className="text-gray-300" />;
    }
  });
};

export default function ReviewsSection() {
  return (
    <div className="py-8 lg:py-12">
      
      {/* --- Tabs --- */}
      <div className="flex justify-between items-center border-b border-gray-200 mb-8 overflow-x-auto">
        <div className="flex gap-6 lg:gap-12 text-base lg:text-lg font-medium whitespace-nowrap">
          <button className="pb-4 text-gray-500 hover:text-black transition-colors">Product Details</button>
          <button className="pb-4 border-b-2 border-black text-black font-bold">Rating & Reviews</button>
          <button className="pb-4 text-gray-500 hover:text-black transition-colors">FAQs</button>
        </div>
      </div>

      {/* --- Header & Controls --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-xl lg:text-2xl font-bold text-black">
          All Reviews <span className="text-gray-400 font-normal">(451)</span>
        </h3>
        
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="bg-[#F0F0F0] p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <div className="grid grid-cols-2 gap-[2px]">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
          </button>
          
          <div className="bg-[#F0F0F0] rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1 cursor-pointer hover:bg-gray-200 transition-colors">
            Latest <span className="text-[10px] text-gray-500">▼</span>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors ml-auto sm:ml-0">
            Write a Review
          </button>
        </div>
      </div>

      {/* --- Reviews Grid --- */}
      {/* Mobile: 1 col, Desktop: 2 cols */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {reviewsData.map((review) => (
          <div key={review.id} className="bg-white border border-gray-200 rounded-[20px] p-6 lg:p-8 flex flex-col gap-3 relative">
            
            {/* 3 Dots Menu */}
            <button className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors">
              <MoreHorizontal size={20} />
            </button>

            {/* Stars */}
            <div className="flex text-yellow-400">
              {renderStars(review.rating)}
            </div>

            {/* Name & Verified */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-black">{review.name}</span>
              <div className="bg-green-500 rounded-full p-[2px]">
                <Check size={14} className="text-white" strokeWidth={4} />
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-500 text-sm leading-relaxed">
              "{review.review}"
            </p>

            {/* Date */}
            <p className="text-gray-400 text-sm mt-1 font-light">
              Posted on {review.date}
            </p>
          </div>
        ))}
      </div>

      {/* --- Load More Button --- */}
      <div className="flex justify-center mt-8 lg:mt-12">
        <button className="border border-gray-200 text-black font-medium py-3 px-12 rounded-full hover:bg-gray-50 transition-colors text-sm">
          Load More Reviews
        </button>
      </div>

    </div>
  );
}