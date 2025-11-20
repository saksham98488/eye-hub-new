'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ProductCard, Product } from './ProductCard';
import { ArrowRight, Shield, Award, Truck, HeadphonesIcon, Eye, Sun, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { useState } from 'react';

export function HomePage() {
  const router = useRouter();
  const bestSellers: Product[] = [
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
    }
  ];

  const categories = [
    {
      title: 'Eyeglasses',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1586165168228-06be0f2dafcb?w=600',
      description: 'Prescription & Fashion'
    },
    {
      title: 'Sunglasses',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1577909698488-3c3705c9c265?w=600',
      description: 'UV Protection & Style'
    },
    {
      title: 'Prescription Lenses',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1760437628019-7797f4f68750?w=600',
      description: 'Advanced Technology'
    },
    {
      title: 'Kids Collection',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1569522178101-2483554e5602?w=600',
      description: 'Durable & Colorful'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] bg-gradient-to-br from-gray-50 to-emerald-50 overflow-hidden">
        <div className="container mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 gap-8 h-full items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-emerald-600 hover:bg-emerald-700">
                New Collection 2024
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900">
                See The World
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Differently
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Discover premium eyewear that combines style, comfort, and cutting-edge lens technology.
                Certified by opticians, loved by customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-8"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-2"
                  >
                    Our Story
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-3xl text-gray-900">15K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Premium Frames</div>
                </div>
                <div>
                  <div className="text-3xl text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative h-full hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-[500px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1651199922386-60da638de82b?w=800"
                    alt="Model wearing glasses"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-900">Certified Quality</div>
                        <div className="text-xs text-gray-500">Optician Approved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-8 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Shield className="w-8 h-8 text-emerald-600 mb-2" />
              <h4 className="text-gray-900 mb-1">Premium Quality</h4>
              <p className="text-sm text-gray-600">Certified Lenses</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Truck className="w-8 h-8 text-emerald-600 mb-2" />
              <h4 className="text-gray-900 mb-1">Free Shipping</h4>
              <p className="text-sm text-gray-600">On Orders $99+</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Award className="w-8 h-8 text-emerald-600 mb-2" />
              <h4 className="text-gray-900 mb-1">2-Year Warranty</h4>
              <p className="text-sm text-gray-600">Quality Guaranteed</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <HeadphonesIcon className="w-8 h-8 text-emerald-600 mb-2" />
              <h4 className="text-gray-900 mb-1">Expert Support</h4>
              <p className="text-sm text-gray-600">24/7 Assistance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-gray-900 mb-4">Shop By Category</h2>
            <p className="text-xl text-gray-600">Find the perfect eyewear for every need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link href="/products" key={category.title}>
                <motion.div
                  className="group relative h-80 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <category.icon className="w-8 h-8 mb-3" />
                  <h3 className="text-2xl mb-1">{category.title}</h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex justify-between items-end mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl text-gray-900 mb-4">Best Sellers</h2>
              <p className="text-xl text-gray-600">Customer favorites you'll love</p>
            </div>
            <Link href="/products">
              <Button
                variant="outline"
                className="rounded-full hidden md:flex"
              >
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => router.push(`/products/${p.id}`)}
                onAddToCart={(p) => console.log('Add to cart:', p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Banner 1 */}
            <motion.div
              className="relative h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-600 p-8 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10 text-white max-w-md">
                <Badge className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 mb-4">
                  Limited Time
                </Badge>
                <h3 className="text-3xl mb-3">Blue Light Lenses</h3>
                <p className="text-emerald-50 mb-6">
                  Protect your eyes from digital screens. Get 25% off all blue light blocking lenses.
                </p>
                <Link href="/products">
                  <Button
                    className="bg-white text-emerald-600 hover:bg-gray-100 rounded-full"
                  >
                    Shop Blue Light
                  </Button>
                </Link>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760437628019-7797f4f68750?w=600"
                  alt="Blue light lenses"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Banner 2 */}
            <motion.div
              className="relative h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 p-8 flex items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10 text-white max-w-md">
                <Badge className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 mb-4">
                  New Arrivals
                </Badge>
                <h3 className="text-3xl mb-3">Summer Collection</h3>
                <p className="text-amber-50 mb-6">
                  Discover our latest sunglasses collection. UV protection meets premium style.
                </p>
                <Link href="/products">
                  <Button
                    className="bg-white text-amber-600 hover:bg-gray-100 rounded-full"
                  >
                    Explore Collection
                  </Button>
                </Link>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577909698488-3c3705c9c265?w=600"
                  alt="Summer sunglasses"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands worldwide</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                rating: 5,
                text: 'Absolutely love my new glasses! The quality is outstanding and the customer service was exceptional.',
                avatar: 'https://images.unsplash.com/photo-1704749301600-29be53d0f534?w=200'
              },
              {
                name: 'Michael Chen',
                rating: 5,
                text: 'Best optical store experience ever. The prescription was perfect and delivery was super fast.',
                avatar: 'https://images.unsplash.com/photo-1651199922386-60da638de82b?w=200'
              },
              {
                name: 'Emily Davis',
                rating: 5,
                text: 'The blue light lenses have made such a difference for my screen time. Highly recommend!',
                avatar: 'https://images.unsplash.com/photo-1704749301600-29be53d0f534?w=200'
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">Verified Customer</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}