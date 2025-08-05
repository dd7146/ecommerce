import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Your
                <span className="block text-primary-200">Perfect Style</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 max-w-lg">
                Explore our curated collection of trendy clothing for men and women. 
                Quality fashion that fits your lifestyle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/category/men"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
              >
                Shop Men
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/category/women"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 group"
              >
                Shop Women
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-500">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-primary-200">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-primary-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-primary-200">Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=700&fit=crop"
                alt="Fashion Collection"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white text-primary-600 p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium">New Arrivals</div>
              <div className="text-2xl font-bold">30% OFF</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white p-3 rounded-full shadow-lg">
              <div className="text-xs">Free</div>
              <div className="text-sm font-bold">Shipping</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-400 rounded-full opacity-20 translate-x-12 translate-y-12"></div>
    </section>
  )
} 