'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Product } from '@/data/products'
import { formatPrice, getDiscountPercentage } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    // Add to cart logic would go here
    console.log('Added to cart:', product.name)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div
        className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {product.originalPrice && (
            <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
              -{getDiscountPercentage(product.originalPrice, product.price)}%
            </div>
          )}

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded">
              Featured
            </div>
          )}

          {/* Action Buttons */}
          <div className={cn(
            "absolute top-2 right-2 flex flex-col space-y-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          )}>
            <button
              onClick={handleWishlist}
              className={cn(
                "w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-colors",
                isWishlisted ? "text-primary-600" : "text-gray-600 hover:text-primary-600"
              )}
            >
              <Heart className="h-4 w-4" fill={isWishlisted ? "currentColor" : "none"} />
            </button>
            
            <button
              onClick={handleAddToCart}
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>

          {/* Out of Stock Overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-medium">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-1 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3 w-3",
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Colors */}
          <div className="flex items-center mt-2 space-x-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{
                  backgroundColor: color.toLowerCase().includes('blue') ? '#3B82F6' :
                    color.toLowerCase().includes('red') ? '#EF4444' :
                    color.toLowerCase().includes('green') ? '#10B981' :
                    color.toLowerCase().includes('pink') ? '#EC4899' :
                    color.toLowerCase().includes('yellow') ? '#F59E0B' :
                    color.toLowerCase().includes('white') ? '#FFFFFF' :
                    color.toLowerCase().includes('black') ? '#000000' :
                    color.toLowerCase().includes('gray') ? '#6B7280' :
                    color.toLowerCase().includes('navy') ? '#1E3A8A' :
                    color.toLowerCase().includes('beige') ? '#F5F5DC' : '#6B7280'
                }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
} 