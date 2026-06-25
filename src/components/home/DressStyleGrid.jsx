import { Link } from 'react-router-dom';

const styleItems = [
  {
    id: 1,
    title: "Casual",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&q=80",
    link: "/category" // We will point this to the Category page later
  },
  {
    id: 2,
    title: "Formal",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=500&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Party",
    image: "https://images.unsplash.com/photo-1566492031773-4f6e44693157?w=500&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Gym",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80",
    link: "#"
  }
];

export default function DressStyleGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12 lg:pb-20">
      
      {/* Light Gray Container */}
      <div className="bg-[#F0F0F0] rounded-[40px] px-6 py-10 md:px-16 md:py-16">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center uppercase tracking-tight mb-8 md:mb-14">
          Browse by Dress Style
        </h2>

        {/* Grid Layout */}
        {/* Mobile: 1 column, Desktop: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          
          {styleItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.link}
              className="relative bg-white rounded-[20px] overflow-hidden h-[190px] md:h-[290px] cursor-pointer hover:shadow-lg transition-shadow group"
            >
              {/* Text Content (Top Left) */}
              <div className="absolute top-6 left-8 z-10">
                <h3 className="text-xl md:text-3xl font-bold text-black leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Image Content (Overlapping the right side) */}
              <div className="absolute right-[-10%] bottom-0 h-[120%] w-[75%] md:h-[130%] md:w-[80%] flex items-end justify-end">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}