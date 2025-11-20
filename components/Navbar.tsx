'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Heart, User, Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount?: number;
}

export function Navbar({ cartCount = 0 }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      title: 'Eyeglasses',
      items: ['Round', 'Square', 'Cat Eye', 'Aviator', 'Wayfarer']
    },
    {
      title: 'Sunglasses',
      items: ['Polarized', 'UV Protection', 'Sport', 'Fashion', 'Classic']
    },
    {
      title: 'Lenses',
      items: ['Prescription', 'Blue Light', 'Progressive', 'Photochromic', 'Anti-Glare']
    },
    {
      title: 'Collections',
      items: ['New Arrivals', 'Best Sellers', 'Kids', 'Designer', 'Sale']
    }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 px-4 text-center">
        <p className="text-sm">
          Free Shipping on Orders Over $99 | 30-Day Returns | Certified Optician Support
        </p>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <span className="text-xl text-gray-900">Optical Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              className="text-gray-700 hover:text-emerald-600 transition-colors relative group"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <span className="flex items-center gap-1">
                Shop <ChevronDown className="w-4 h-4" />
              </span>
              
              {/* Mega Menu */}
              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-[800px]">
                      <div className="grid grid-cols-4 gap-8">
                        {categories.map((category) => (
                          <div key={category.title}>
                            <h3 className="text-gray-900 mb-3">{category.title}</h3>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item}>
                                  <Link
                                    href="/products"
                                    onClick={() => setMegaMenuOpen(false)}
                                    className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            
            <Link
              href="/products"
              className={`text-gray-700 hover:text-emerald-600 transition-colors ${
                pathname === '/products' ? 'text-emerald-600' : ''
              }`}
            >
              All Products
            </Link>
            <Link
              href="/about"
              className={`text-gray-700 hover:text-emerald-600 transition-colors ${
                pathname === '/about' ? 'text-emerald-600' : ''
              }`}
            >
              About Us
            </Link>
            <button className="text-gray-700 hover:text-emerald-600 transition-colors">
              Virtual Try-On
            </button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for frames, brands..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-emerald-600 hover:bg-emerald-700 min-w-5 h-5 flex items-center justify-center p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600"
              >
                Shop All
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600"
              >
                About Us
              </Link>
              <button className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600">
                Virtual Try-On
              </button>
              <div className="pt-4 border-t space-y-2">
                <button className="flex items-center gap-2 w-full py-2 text-gray-700 hover:text-emerald-600">
                  <User className="w-5 h-5" /> Account
                </button>
                <button className="flex items-center gap-2 w-full py-2 text-gray-700 hover:text-emerald-600">
                  <Heart className="w-5 h-5" /> Wishlist
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
