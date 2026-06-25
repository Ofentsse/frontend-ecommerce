import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// Sample cart data - replace with your actual cart state
const initialCartItems = [
  { 
    id: 1, 
    name: 'Gradient Graphic T-shirt', 
    size: 'Large', 
    color: 'White', 
    price: 145, 
    quantity: 1,
    image: 'https://via.placeholder.com/80x80' 
  },
  { 
    id: 2, 
    name: 'Checkered Shirt', 
    size: 'Medium', 
    color: 'Red', 
    price: 180, 
    quantity: 1,
    image: 'https://via.placeholder.com/80x80' 
  },
  { 
    id: 3, 
    name: 'Skinny Fit Jeans', 
    size: 'Large', 
    color: 'Blue', 
    price: 240, 
    quantity: 1,
    image: 'https://via.placeholder.com/80x80' 
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showPromoError, setShowPromoError] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discountAmount + deliveryFee;

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      // If quantity is 0, ask if they want to remove the item
      const item = cartItems.find(item => item.id === id);
      toast((t) => (
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Remove "{item.name}" from cart?</p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                removeItem(id);
              }}
              className="px-3 py-1 bg-red-500 text-white rounded text-xs font-medium hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ), {
        duration: 5000,
        position: 'top-center',
      });
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    toast.success('Quantity updated!', {
      duration: 2000,
      position: 'top-center',
    });
  };

  // Remove item
  const removeItem = (id) => {
    const item = cartItems.find(item => item.id === id);
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.success(`${item.name} removed from cart`, {
      duration: 3000,
      position: 'top-center',
      icon: '🗑️',
    });
  };

  // Apply promo code
  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'SAVE20') {
      setDiscount(0.2);
      setShowPromoError(false);
      setPromoCode('');
      toast.success('🎉 20% discount applied!', {
        duration: 3000,
        position: 'top-center',
      });
    } else if (promoCode.trim().toUpperCase() === 'SAVE10') {
      setDiscount(0.1);
      setShowPromoError(false);
      setPromoCode('');
      toast.success('🎉 10% discount applied!', {
        duration: 3000,
        position: 'top-center',
      });
    } else if (promoCode.trim() === '') {
      toast.error('Please enter a promo code', {
        duration: 3000,
        position: 'top-center',
      });
    } else {
      setShowPromoError(true);
      toast.error('Invalid promo code. Try SAVE20 or SAVE10', {
        duration: 4000,
        position: 'top-center',
      });
    }
  };

  // Checkout handler
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!', {
        duration: 3000,
        position: 'top-center',
      });
      return;
    }
    toast.success('🎉 Proceeding to checkout!', {
      duration: 3000,
      position: 'top-center',
    });
    // Navigate to checkout page
    // navigate('/checkout');
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <>
        <Toaster />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
          <div className="bg-gray-100 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-sm sm:text-base text-gray-500 mb-6">Looks like you haven't added any items yet</p>
          <Link 
            to="/" 
            className="inline-block bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Cart</span>
        </div>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">YOUR CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4 sm:space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-gray-200 relative">
                  {/* Product Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0 w-full sm:w-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium text-sm sm:text-base text-gray-900 truncate">{item.name}</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-0.5">
                          <p className="text-xs sm:text-sm text-gray-500">Size: {item.size}</p>
                          <p className="text-xs sm:text-sm text-gray-500">Color: {item.color}</p>
                        </div>
                      </div>
                      
                      {/* Price & Quantity & Delete */}
                      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 sm:gap-4">
                        <span className="font-medium text-sm sm:text-base text-gray-900">${item.price}</span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 sm:gap-3">
                          <button 
                            className="p-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} className="sm:w-4 sm:h-4" />
                          </button>
                          <span className="w-5 sm:w-6 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            className="p-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} className="sm:w-4 sm:h-4" />
                          </button>
                        </div>

                        {/* Delete/Trash Icon */}
                        <button 
                          className="text-gray-400 hover:text-red-500 transition-colors ml-1 sm:ml-2"
                          onClick={() => {
                            const itemName = item.name;
                            toast((t) => (
                              <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium">Remove "{itemName}" from cart?</p>
                                <div className="flex gap-2 justify-end">
                                  <button
                                    onClick={() => {
                                      toast.dismiss(t.id);
                                      removeItem(item.id);
                                    }}
                                    className="px-3 py-1 bg-red-500 text-white rounded text-xs font-medium hover:bg-red-600 transition-colors"
                                  >
                                    Remove
                                  </button>
                                  <button
                                    onClick={() => toast.dismiss(t.id)}
                                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium hover:bg-gray-300 transition-colors"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ), {
                              duration: 5000,
                              position: 'top-center',
                            });
                          }}
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} className="sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping - Desktop */}
            <div className="mt-6 hidden lg:block">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 sticky top-24">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-2.5 sm:space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-xs sm:text-sm">Subtotal</span>
                  <span className="font-medium text-gray-900 text-xs sm:text-sm">${subtotal.toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-xs sm:text-sm">Discount (-{(discount * 100)}%)</span>
                    <span className="font-medium text-red-500 text-xs sm:text-sm">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600 text-xs sm:text-sm">Delivery Fee</span>
                  <span className="font-medium text-gray-900 text-xs sm:text-sm">${deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between font-bold text-base sm:text-lg">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-4 sm:mt-6">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="text" 
                    placeholder="Add promo code"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value);
                      setShowPromoError(false);
                    }}
                    className={`flex-1 px-3 sm:px-4 py-2 border ${
                      showPromoError ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors`}
                    onKeyPress={(e) => e.key === 'Enter' && applyPromo()}
                  />
                  <button 
                    className="px-4 sm:px-6 py-2 bg-black text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                    onClick={applyPromo}
                  >
                    Apply
                  </button>
                </div>
                {showPromoError && (
                  <p className="text-xs text-red-500 mt-1">Invalid promo code. Try SAVE20 or SAVE10</p>
                )}
                {discount > 0 && (
                  <p className="text-xs text-green-500 mt-1">✅ {discount * 100}% discount applied!</p>
                )}
              </div>

              {/* Checkout Button */}
              <button 
                className="w-full bg-black text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors mt-4 sm:mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Go to Checkout →
              </button>
            </div>
          </div>
        </div>

        {/* Continue Shopping - Mobile Bottom */}
        <div className="mt-6 sm:mt-8 lg:hidden">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
}