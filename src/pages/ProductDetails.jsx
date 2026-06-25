import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Heart, Star, Minus, Plus, ShoppingCart } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// Sample products data - in a real app, this would come from an API
const allProducts = [
  { id: 1, name: 'Gradient Graphic T-shirt', price: 145, originalPrice: 242, rating: 3.5, category: 'T-shirts', image: 'https://picsum.photos/seed/1/600/600', description: 'A stylish gradient graphic t-shirt perfect for casual wear. Made from premium quality cotton for maximum comfort.', sizes: ['S', 'M', 'L', 'XL'], colors: ['White', 'Black', 'Blue'] },
  { id: 2, name: 'Polo with Tipping Details', price: 180, originalPrice: 242, rating: 4.0, category: 'Shirts', image: 'https://picsum.photos/seed/2/600/600', description: 'Classic polo shirt with elegant tipping details. Perfect for both casual and semi-formal occasions.', sizes: ['M', 'L', 'XL'], colors: ['White', 'Navy'] },
  { id: 3, name: 'Black Striped T-shirt', price: 120, originalPrice: 160, rating: 4.0, category: 'T-shirts', image: 'https://picsum.photos/seed/3/600/600', description: 'Timeless black and white striped t-shirt. A versatile piece for any wardrobe.', sizes: ['S', 'M', 'L'], colors: ['Black/White'] },
  { id: 4, name: 'Skinny Fit Jeans', price: 240, originalPrice: 260, rating: 3.5, category: 'Jeans', image: 'https://picsum.photos/seed/4/600/600', description: 'Premium skinny fit jeans with just the right amount of stretch. Modern and comfortable.', sizes: ['28', '30', '32', '34', '36'], colors: ['Blue', 'Black'] },
  { id: 5, name: 'Checkered Shirt', price: 180, originalPrice: null, rating: 4.5, category: 'Shirts', image: 'https://picsum.photos/seed/5/600/600', description: 'Classic checkered pattern shirt. A timeless addition to your wardrobe.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Red/Black', 'Blue/White'] },
  { id: 6, name: 'Sleeve Striped T-shirt', price: 130, originalPrice: 160, rating: 4.5, category: 'T-shirts', image: 'https://picsum.photos/seed/6/600/600', description: 'Comfortable striped t-shirt with a modern fit. Perfect for everyday wear.', sizes: ['S', 'M', 'L'], colors: ['White/Navy'] },
  { id: 7, name: 'Vertical Striped Shirt', price: 212, originalPrice: null, rating: 5.0, category: 'Shirts', image: 'https://picsum.photos/seed/7/600/600', description: 'Elegant vertical striped shirt. Perfect for formal and casual occasions.', sizes: ['M', 'L', 'XL'], colors: ['Blue/White'] },
  { id: 8, name: 'Courage Graphic T-shirt', price: 145, originalPrice: null, rating: 4.0, category: 'T-shirts', image: 'https://picsum.photos/seed/8/600/600', description: 'Bold graphic t-shirt with a courageous design. Stand out from the crowd.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White'] },
  { id: 9, name: 'Loose Fit Bermuda Shorts', price: 80, originalPrice: null, rating: 3.0, category: 'Shorts', image: 'https://picsum.photos/seed/9/600/600', description: 'Comfortable loose fit Bermuda shorts. Perfect for summer days.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Khaki', 'Navy'] },
];

export default function ProductDetails() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Find product by id
  const product = allProducts.find(p => p.id === parseInt(id));

  // Handle product not found
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-500 mb-6">The product you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // Render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < fullStars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
        ))}
        <span className="text-sm text-gray-500 ml-2">{rating}/5</span>
      </div>
    );
  };

  // Add to cart handler
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size', { duration: 3000, position: 'top-center' });
      return;
    }
    if (!selectedColor) {
      toast.error('Please select a color', { duration: 3000, position: 'top-center' });
      return;
    }
    
    toast.success(`${product.name} added to cart! 🛒`, { duration: 3000, position: 'top-center' });
  };

  // Wishlist toggle
  const toggleWishlist = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Removed from wishlist' : 'Added to wishlist! ❤️', { duration: 2000, position: 'top-center' });
  };

  return (
    <>
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link to="/category" className="hover:text-black transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </div>

        {/* Back button */}
        <Link 
          to="/category" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x600?text=Product';
              }}
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              {renderStars(product.rating)}
              <span className="text-sm text-gray-500">(120 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="text-sm text-green-600 font-medium bg-green-100 px-2 py-1 rounded">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-4 text-sm sm:text-base">{product.description}</p>

            {/* Color Selection */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Select Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg text-sm transition-all ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
                <button className="text-sm text-gray-500 hover:text-black transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-3 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-3 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Wishlist */}
                <button
                  onClick={toggleWishlist}
                  className={`p-2 border rounded-lg transition-all ${
                    isLiked 
                      ? 'border-red-500 bg-red-50 text-red-500' 
                      : 'border-gray-300 text-gray-400 hover:text-red-500 hover:border-red-300'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900">Category</h4>
                  <p className="text-gray-500 mt-1">{product.category}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">SKU</h4>
                  <p className="text-gray-500 mt-1">PROD-{String(product.id).padStart(4, '0')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}