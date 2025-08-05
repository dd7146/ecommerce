import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'men',
    name: "Men's Collection",
    description: 'Discover stylish clothing for the modern man',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    productCount: 6,
    color: 'from-blue-600 to-blue-700'
  },
  {
    id: 'women',
    name: "Women's Collection",
    description: 'Explore trendy fashion for the confident woman',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=400&fit=crop',
    productCount: 6,
    color: 'from-pink-600 to-pink-700'
  }
]

export default function CategoryShowcase() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our curated collections designed for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-80">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold">{category.name}</h3>
                      <p className="text-lg opacity-90">{category.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm opacity-75">
                          {category.productCount} Products
                        </span>
                        <div className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-200">
                          <span className="font-medium">Shop Now</span>
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 