import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, SlidersHorizontal, X, Star } from 'lucide-react';

// Sample products data
const allProducts = [
  { id: 1, name: 'PBS - Custom Hats', price: 145, originalPrice: 242, rating: 3.5, category: 'T-shirts', image: 'https://i.pinimg.com/1200x/a0/74/42/a07442be04de644bb4bcf1f5c51b377a.jpg' },
  { id: 2, name: 'Vintage Tommy Hilfiger Sailing', price: 180, originalPrice: 242, rating: 4.0, category: 'Shirts', image: 'https://i.pinimg.com/736x/19/3b/45/193b4509570c96103f9c45bc56719f1b.jpg' },
  { id: 3, name: 'Black Striped T-shirt', price: 120, originalPrice: 160, rating: 4.0, category: 'T-shirts', image: 'https://picsum.photos/seed/3/300/300' },
  { id: 4, name: 'Skinny Fit Jeans', price: 240, originalPrice: 260, rating: 3.5, category: 'Jeans', image: 'https://picsum.photos/seed/4/300/300' },
  { id: 5, name: 'Checkered Shirt', price: 180, originalPrice: null, rating: 4.5, category: 'Shirts', image: 'https://picsum.photos/seed/5/300/300' },
  { id: 6, name: 'Sleeve Striped T-shirt', price: 130, originalPrice: 160, rating: 4.5, category: 'T-shirts', image: 'https://picsum.photos/seed/6/300/300' },
  { id: 7, name: 'Vertical Striped Shirt', price: 212, originalPrice: null, rating: 5.0, category: 'Shirts', image: 'https://picsum.photos/seed/7/300/300' },
  { id: 8, name: 'Courage Graphic T-shirt', price: 145, originalPrice: null, rating: 4.0, category: 'T-shirts', image: 'https://picsum.photos/seed/8/300/300' },
  { id: 9, name: 'Loose Fit Bermuda Shorts', price: 80, originalPrice: null, rating: 3.0, category: 'Shorts', image: 'https://picsum.photos/seed/9/300/300' },
];

const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodies', 'Jeans'];
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'Black'];
const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large'];
const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

export default function Category() {
  const { categoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('T-shirts');
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedDressStyle, setSelectedDressStyle] = useState('Casual');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const toggleColor = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High': return a.price - b.price;
      case 'Price: High to Low': return b.price - a.price;
      case 'Rating: High to Low': return b.rating - a.rating;
      default: return 0;
    }
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const categoryTitle = categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : 'Casual';

  // Render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < fullStars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
        ))}
        <span className="text-xs text-gray-500 ml-1">{rating}/5</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{categoryTitle}</span>
      </div>

      {/* Mobile Header */}
      <div className="flex items-center justify-between lg:hidden mb-4">
        <h1 className="text-xl font-bold text-gray-900">{categoryTitle}</h1>
        <button 
          onClick={() => setShowFilters(true)}
          className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      <div className="flex gap-6 lg:gap-8">
        {/* Desktop Filters - Left Sidebar */}
        <div className="hidden lg:block w-56 xl:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-base font-bold text-gray-900 mb-4">Filters</h2>
            
            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Price</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-600">${priceRange[0]}</span>
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1 accent-black"
                />
                <span className="text-xs text-gray-600">${priceRange[1]}</span>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColors.includes(color) ? 'border-black ring-2 ring-black ring-offset-1' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedSizes.includes(size) ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dress Style */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Dress Style</h3>
              <div className="space-y-1.5">
                {dressStyles.map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedDressStyle(style)}
                    className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      selectedDressStyle === style ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Apply Filter
            </button>
          </div>
        </div>

        {/* Mobile Filters - Slide In */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Filters</h2>
                <button onClick={() => setShowFilters(false)} className="p-1 hover:bg-gray-100 rounded">
                  <X size={24} />
                </button>
              </div>

              {/* Mobile filter content - same as desktop but simplified */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
                  <div className="space-y-1.5">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm ${
                          selectedCategory === cat ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Price</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">${priceRange[0]}</span>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="flex-1"
                    />
                    <span className="text-xs">${priceRange[1]}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => toggleColor(color)}
                        className={`w-7 h-7 rounded-full border-2 ${
                          selectedColors.includes(color) ? 'border-black ring-2 ring-black' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-1.5 rounded-lg text-xs ${
                          selectedSizes.includes(size) ? 'bg-black text-white' : 'bg-gray-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Dress Style</h3>
                  <div className="space-y-1.5">
                    {dressStyles.map((style) => (
                      <button
                        key={style}
                        onClick={() => setSelectedDressStyle(style)}
                        className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm ${
                          selectedDressStyle === style ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800"
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Section - Right Side */}
        <div className="flex-1 min-w-0">
          {/* Desktop Title */}
          <div className="hidden lg:block">
            <h1 className="text-2xl font-bold text-gray-900">{categoryTitle}</h1>
          </div>

          {/* Products Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3 mb-4">
            <p className="text-sm text-gray-500">
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} Products
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="Most Popular">Most Popular</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Rating: High to Low">Rating: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {currentProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=Product'; }}
                    />
                  </div>
                  <div className="p-2 sm:p-3">
                    <h3 className="font-medium text-sm text-gray-900 truncate">{product.name}</h3>
                    <div className="mt-0.5">{renderStars(product.rating)}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-gray-900 text-sm">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-200">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Prev
              </button>
              
              <div className="flex items-center gap-1">
                {[...Array(Math.min(totalPages, 10))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-lg text-sm transition-colors ${
                      currentPage === i + 1
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                {totalPages > 10 && <span className="text-gray-400">...</span>}
              </div>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}