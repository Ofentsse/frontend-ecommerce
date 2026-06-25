import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mt-10 border-t border-gray-100 pt-6">
      <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
        <ChevronLeft size={16} /> Previous
      </button>
      
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button 
            key={num} 
            className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${num === 1 ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            {num}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
        Next <ChevronRight size={16} />
      </button>
    </div>
  );
}