import { ArrowLeft, ArrowRight, Check, Star } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  { id: 1, name: "Sarah M.", text: `"I'm blown away by the quality and style of the clothes I received from Shop.co."`, rating: 5 },
  { id: 2, name: "Alex K.", text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co."`, rating: 5 },
  { id: 3, name: "James L.", text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co."`, rating: 5 },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
      <div className="flex justify-between items-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-black">Our Happy Customers</h2>
        <div className="flex gap-4">
          <button onClick={() => scroll('left')} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <button onClick={() => scroll('right')} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 scroll-smooth no-scrollbar">
        {testimonials.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[85%] sm:w-[70%] md:w-[400px] bg-white border border-gray-200 rounded-[20px] p-6 md:p-8 flex flex-col gap-3">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (<Star key={i} size={20} fill="currentColor" stroke="none" />))}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-black">{item.name}</span>
              <div className="bg-green-500 rounded-full p-[2px]"><Check size={14} className="text-white" strokeWidth={4} /></div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}