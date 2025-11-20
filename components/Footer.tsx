import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl mb-2">Stay Updated</h3>
            <p className="text-emerald-50 mb-6">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-xl text-gray-900">Optical Hub</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-sm">
              Your trusted destination for premium eyewear. Certified opticians, quality lenses, and exceptional service since 2010.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-emerald-50 hover:border-emerald-600">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-emerald-50 hover:border-emerald-600">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-emerald-50 hover:border-emerald-600">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-emerald-50 hover:border-emerald-600">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Eyeglasses
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Sunglasses
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Prescription Lenses
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Kids Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  FAQs
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Shipping & Returns
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Warranty
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Prescription Guide
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>1-800-OPTICAL</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>support@opticalhub.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>123 Vision Street<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 Optical Hub. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                Terms of Service
              </button>
              <button className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
