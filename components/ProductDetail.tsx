'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ProductCard, Product } from './ProductCard';
import { Heart, ShoppingCart, Truck, Shield, RotateCcw, Star, Check, ZoomIn } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductDetailProps {
  productId?: string;
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedLensType, setSelectedLensType] = useState('standard');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    id: '1',
    name: 'Classic Aviator Gold',
    brand: 'Premium Collection',
    price: 189,
    originalPrice: 249,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1577909698488-3c3705c9c265?w=800',
      'https://images.unsplash.com/photo-1586165168228-06be0f2dafcb?w=800',
      'https://images.unsplash.com/photo-1569522178101-2483554e5602?w=800',
      'https://images.unsplash.com/photo-1762328022186-825da09c00ef?w=800'
    ],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Gold', value: '#FFD700' },
      { name: 'Silver', value: '#C0C0C0' }
    ],
    description: 'Timeless aviator design meets modern craftsmanship. These premium sunglasses feature high-quality polarized lenses and a durable metal frame, perfect for any occasion.',
    features: [
      'UV400 Protection',
      'Polarized Lenses',
      'Anti-Glare Coating',
      'Lightweight Frame',
      'Adjustable Nose Pads',
      'Spring Hinges'
    ]
  };

  const lensOptions = [
    {
      id: 'standard',
      name: 'Standard Lenses',
      description: 'Clear vision for everyday use',
      price: 0
    },
    {
      id: 'prescription',
      name: 'Prescription Lenses',
      description: 'Custom prescription lenses',
      price: 79
    },
    {
      id: 'blue-light',
      name: 'Blue Light Filter',
      description: 'Reduce digital eye strain',
      price: 49
    },
    {
      id: 'progressive',
      name: 'Progressive Lenses',
      description: 'Multi-focal lenses',
      price: 129
    },
    {
      id: 'photochromic',
      name: 'Photochromic',
      description: 'Adapt to light conditions',
      price: 99
    }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      date: 'November 10, 2024',
      text: 'Absolutely love these glasses! The quality is outstanding and they look even better in person. Very comfortable to wear all day.',
      verified: true
    },
    {
      name: 'Michael Chen',
      rating: 5,
      date: 'November 5, 2024',
      text: 'Best purchase I\'ve made in a while. The gold finish is beautiful and the lenses are crystal clear. Highly recommend!',
      verified: true
    },
    {
      name: 'Emily Davis',
      rating: 4,
      date: 'October 28, 2024',
      text: 'Great sunglasses! Only minor issue is they feel a bit snug at first, but they loosened up after a few days of wearing.',
      verified: true
    }
  ];

  const suggestedProducts: Product[] = [
    {
      id: '2',
      name: 'Modern Square Frame',
      brand: 'Urban Style',
      price: 149,
      image: 'https://images.unsplash.com/photo-1586165168228-06be0f2dafcb?w=600',
      colors: ['#000000', '#8B4513', '#4A5568'],
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
      rating: 5.0,
      reviews: 203
    }
  ];

  const selectedLens = lensOptions.find(l => l.id === selectedLensType);
  const totalPrice = product.price + (selectedLens?.price || 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-emerald-600">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 mb-20">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4 group">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-emerald-600 scale-95'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-emerald-600 mb-1">{product.brand}</p>
                <h1 className="text-3xl text-gray-900 mb-2">{product.name}</h1>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-900">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl text-gray-900">${totalPrice}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge className="bg-red-500 hover:bg-red-600">
                    Save ${product.originalPrice - product.price}
                  </Badge>
                </>
              )}
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <Label className="mb-3 block">Color: {product.colors.find(c => c.value === selectedColor)?.name}</Label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.value
                        ? 'border-emerald-600 scale-110'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Lens Selection */}
            <div className="mb-6">
              <Label className="mb-3 block">Lens Type</Label>
              <RadioGroup value={selectedLensType} onValueChange={setSelectedLensType}>
                <div className="space-y-3">
                  {lensOptions.map((lens) => (
                    <div
                      key={lens.id}
                      className={`flex items-start p-4 border-2 rounded-xl transition-all cursor-pointer ${
                        selectedLensType === lens.id
                          ? 'border-emerald-600 bg-emerald-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <RadioGroupItem value={lens.id} id={lens.id} className="mt-1" />
                      <Label htmlFor={lens.id} className="ml-3 flex-1 cursor-pointer">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-gray-900">{lens.name}</div>
                            <div className="text-sm text-gray-500">{lens.description}</div>
                          </div>
                          {lens.price > 0 && (
                            <span className="text-gray-900">+${lens.price}</span>
                          )}
                        </div>
                      </Label>
                      {selectedLensType === lens.id && (
                        <Check className="w-5 h-5 text-emerald-600 ml-2" />
                      )}
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <Label className="mb-3 block">Quantity</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center text-gray-900">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 mb-8">
              <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 rounded-full h-12">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${totalPrice * quantity}
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-sm text-gray-900">Free Shipping</div>
                <div className="text-xs text-gray-500">On orders $99+</div>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-sm text-gray-900">2-Year Warranty</div>
                <div className="text-xs text-gray-500">Quality guaranteed</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-sm text-gray-900">30-Day Returns</div>
                <div className="text-xs text-gray-500">Hassle-free</div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Tabs */}
        <div className="bg-white rounded-3xl p-8 mb-20">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="space-y-4">
              <h3 className="text-2xl text-gray-900">Product Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Crafted with precision and designed for comfort, these aviator sunglasses are the perfect blend of timeless style and modern functionality. The gold-tone metal frame is both lightweight and durable, ensuring long-lasting wear. Each pair comes with a premium case and cleaning cloth.
              </p>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <h3 className="text-2xl text-gray-900 mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl text-gray-900">Customer Reviews</h3>
                <Button variant="outline" className="rounded-full">
                  Write a Review
                </Button>
              </div>

              {reviews.map((review, index) => (
                <div key={index} className="border-b pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-900">{review.name}</span>
                        {review.verified && (
                          <Badge variant="outline" className="text-xs">Verified Purchase</Badge>
                        )}
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Suggested Products */}
        <div>
          <h2 className="text-3xl text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => router.push(`/products/${p.id}`)}
                onAddToCart={(p) => console.log('Add to cart:', p)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}