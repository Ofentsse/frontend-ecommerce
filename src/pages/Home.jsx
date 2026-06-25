import Hero from '../components/home/Hero';
import BrandStrip from '../components/home/BrandStrip';
import { Link } from 'react-router-dom';
import ProductCard from '../components/home/ProductCard';
import DressStyleGrid from '../components/home/DressStyleGrid';
import Testimonials from '../components/home/Testimonials';     
import Footer from '../components/home/Footer';                 
import { newArrivals, topSelling } from '../data/mockProducts';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <BrandStrip />

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center uppercase tracking-tight mb-8 lg:mb-12">New Arrivals</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-12">
          {newArrivals.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="block">
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </section>

      {/* Top Selling */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 lg:pt-12 pb-12 lg:pb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center uppercase tracking-tight mb-8 lg:mb-12">Top Selling</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-12">
          {topSelling.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="block">
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </section>

      <DressStyleGrid />
      
      <Testimonials /> 
      
      <Footer />        
    </div>
  );
}