'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ProductCard, Product } from './ProductCard';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { SlidersHorizontal, X } from 'lucide-react';

export function ProductListing() {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);

  const products: Product[] = [
    {
      id: '1',
      name: 'Classic Aviator Gold',
      brand: 'Premium Collection',
      price: 189,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1577909698488-3c3705c9c265?w=600',
      colors: ['#FFD700', '#000000', '#C0C0C0'],
      isBestSeller: true,
      rating: 4.8,
      reviews: 124
    },
    {
      id: '2',
      name: 'Modern Square Frame',
      brand: 'Urban Style',
      price: 149,
      image: 'https://images.unsplash.com/photo-1586165168228-06be0f2dafcb?w=600',
      colors: ['#000000', '#8B4513', '#4A5568'],
      isNew: true,
      rating: 4.9,
      reviews: 89
    },
    {
      id: '3',
      name: 'Vintage Round Glasses',
      brand: 'Classic Line',
      price: 129,
      originalPrice: 159,
      image: 'https://images.unsplash.com/photo-1569522178101-2483554e5602?w=600',
      colors: ['#000000', '#8B4513'],
      rating: 4.7,
      reviews: 156
    },
    {
      id: '4',
      name: 'Premium Sunglasses',
      brand: 'Luxury Series',
      price: 299,
      image: 'https://images.unsplash.com/photo-1762328022186-825da09c00ef?w=600',
      colors: ['#000000', '#1E40AF', '#059669'],
      isBestSeller: true,
      isNew: true,
      rating: 5.0,
      reviews: 203
    },
    {
      id: '5',
      name: 'Retro Cat Eye',
      brand: 'Vintage Collection',
      price: 139,
      image: 'https://images.unsplash.com/photo-1586165168228-06be0f2dafcb?w=600',
      colors: ['#DC2626', '#000000', '#F59E0B'],
      rating: 4.6,
      reviews: 78
    },
    {
      id: '6',
      name: 'Sport Performance',
      brand: 'Active Series',
      price: 199,
      originalPrice: 259,
      image: 'https://images.unsplash.com/photo-1577909698488-3c3705c9c265?w=600',
      colors: ['#000000', '#DC2626', '#2563EB'],
      rating: 4.8,
      reviews: 142
    },
    {
      id: '7',
      name: 'Minimalist Wire',
      brand: 'Modern Basics',
      price: 99,
      image: 'https://images.unsplash.com/photo-1569522178101-2483554e5602?w=600',
      colors: ['#C0C0C0', '#FFD700', '#CD7F32'],
      isNew: true,
      rating: 4.5,
      reviews: 65
    },
    {
      id: '8',
      name: 'Designer Oversized',
      brand: 'Luxury Line',
      price: 349,
      image: 'https://images.unsplash.com/photo-1762328022186-825da09c00ef?w=600',
      colors: ['#000000', '#8B4513'],
      isBestSeller: true,
      rating: 4.9,
      reviews: 187
    }
  ];

  const frameShapes = ['Round', 'Square', 'Aviator', 'Cat Eye', 'Wayfarer', 'Rectangle'];
  const genders = ['Unisex', 'Men', 'Women', 'Kids'];
  const brands = ['Premium Collection', 'Urban Style', 'Classic Line', 'Luxury Series', 'Active Series'];
  const lensTypes = ['Prescription', 'Blue Light', 'Progressive', 'Photochromic', 'Polarized'];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl text-gray-900 mb-2">All Eyewear</h1>
          <p className="text-gray-600">Explore our complete collection of premium frames and lenses</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8 bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
              {showFilters && <X className="w-4 h-4 ml-2" />}
            </Button>
            <div className="text-sm text-gray-600">
              Showing {products.length} products
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Label className="text-sm text-gray-600">Sort by:</Label>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <motion.aside
              className="w-80 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="bg-white rounded-2xl p-6 space-y-6 sticky top-32">
                {/* Frame Shape */}
                <div>
                  <h3 className="text-gray-900 mb-3">Frame Shape</h3>
                  <div className="space-y-2">
                    {frameShapes.map((shape) => (
                      <div key={shape} className="flex items-center">
                        <Checkbox id={`shape-${shape}`} />
                        <Label
                          htmlFor={`shape-${shape}`}
                          className="ml-2 text-sm text-gray-600 cursor-pointer"
                        >
                          {shape}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gender */}
                <div className="pt-6 border-t">
                  <h3 className="text-gray-900 mb-3">Gender</h3>
                  <div className="space-y-2">
                    {genders.map((gender) => (
                      <div key={gender} className="flex items-center">
                        <Checkbox id={`gender-${gender}`} />
                        <Label
                          htmlFor={`gender-${gender}`}
                          className="ml-2 text-sm text-gray-600 cursor-pointer"
                        >
                          {gender}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="pt-6 border-t">
                  <h3 className="text-gray-900 mb-3">Price Range</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500}
                    step={10}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Brands */}
                <div className="pt-6 border-t">
                  <h3 className="text-gray-900 mb-3">Brand</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center">
                        <Checkbox id={`brand-${brand}`} />
                        <Label
                          htmlFor={`brand-${brand}`}
                          className="ml-2 text-sm text-gray-600 cursor-pointer"
                        >
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lens Type */}
                <div className="pt-6 border-t">
                  <h3 className="text-gray-900 mb-3">Lens Type</h3>
                  <div className="space-y-2">
                    {lensTypes.map((lens) => (
                      <div key={lens} className="flex items-center">
                        <Checkbox id={`lens-${lens}`} />
                        <Label
                          htmlFor={`lens-${lens}`}
                          className="ml-2 text-sm text-gray-600 cursor-pointer"
                        >
                          {lens}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="pt-6 border-t">
                  <Button variant="outline" className="w-full rounded-full">
                    Clear All Filters
                  </Button>
                </div>
              </div>
            </motion.aside>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard
                    product={product}
                    onQuickView={(p) => router.push(`/products/${p.id}`)}
                    onAddToCart={(p) => console.log('Add to cart:', p)}
                  />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <Button variant="outline" className="rounded-full">
                Previous
              </Button>
              <Button className="rounded-full bg-emerald-600 hover:bg-emerald-700">
                1
              </Button>
              <Button variant="outline" className="rounded-full">
                2
              </Button>
              <Button variant="outline" className="rounded-full">
                3
              </Button>
              <Button variant="outline" className="rounded-full">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
