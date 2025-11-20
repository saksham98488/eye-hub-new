import { useState } from 'react';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  rating?: number;
  reviews?: number;
}

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-emerald-600 hover:bg-emerald-700">New</Badge>
          )}
          {product.isBestSeller && (
            <Badge className="bg-amber-500 hover:bg-amber-600">Best Seller</Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-red-500 hover:bg-red-600">-{discount}%</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <motion.div
          className="absolute top-3 right-3 flex flex-col gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
            />
          </Button>
          {onQuickView && (
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
              onClick={() => onQuickView(product)}
            >
              <Eye className="w-4 h-4" />
            </Button>
          )}
        </motion.div>

        {/* Add to Cart Button - appears on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-lg"
            onClick={() => onAddToCart?.(product)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="text-gray-900 mb-2 line-clamp-1">{product.name}</h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating!)
                      ? 'text-amber-400 fill-amber-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {product.reviews && (
              <span className="text-xs text-gray-500">({product.reviews})</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1.5">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className="w-5 h-5 rounded-full border-2 border-gray-200 hover:border-emerald-600 transition-colors"
                style={{ backgroundColor: color }}
                aria-label={`Color ${color}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
