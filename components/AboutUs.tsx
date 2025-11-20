'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Award, Eye, Heart, Users, Shield, Sparkles, TrendingUp, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './ImageWithFallback';

export function AboutUs() {
  const timeline = [
    { year: '2010', title: 'Founded', description: 'Started with a vision to provide quality eyewear' },
    { year: '2015', title: 'Expansion', description: 'Opened 10 retail locations nationwide' },
    { year: '2018', title: 'Digital Transformation', description: 'Launched our online platform' },
    { year: '2020', title: 'Innovation', description: 'Introduced virtual try-on technology' },
    { year: '2024', title: 'Global Reach', description: 'Serving customers in 50+ countries' }
  ];

  const values = [
    {
      icon: Eye,
      title: 'Vision First',
      description: 'We prioritize your eye health and visual clarity above all else.'
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Exceptional service and support at every step of your journey.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All products meet rigorous quality and safety standards.'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Constantly evolving with the latest eyewear technology.'
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Certified Opticians',
      description: 'All prescriptions verified by licensed professionals',
      stats: '50+ Experts'
    },
    {
      icon: Shield,
      title: 'Premium Materials',
      description: 'Durable frames and high-quality lenses',
      stats: '100% Authentic'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Industry-leading satisfaction ratings',
      stats: '4.9/5 Rating'
    },
    {
      icon: TrendingUp,
      title: 'Warranty Program',
      description: 'Comprehensive 2-year coverage',
      stats: '100% Protected'
    },
    {
      icon: Globe,
      title: 'Global Shipping',
      description: 'Deliver to customers worldwide',
      stats: '50+ Countries'
    },
    {
      icon: Sparkles,
      title: 'Latest Technology',
      description: 'Advanced lens coatings and treatments',
      stats: 'Cutting-edge'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              Our Vision is Your Vision
            </h1>
            <p className="text-xl text-emerald-50">
              Since 2010, we've been committed to providing premium eyewear that combines style, comfort, and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Optical Hub was founded with a simple yet powerful mission: to make premium eyewear accessible to everyone. What started as a small boutique has grown into a trusted destination for quality glasses and exceptional service.
                </p>
                <p>
                  We believe that eyewear is more than just a vision correction tool—it's a statement of personal style, a boost to confidence, and a window to experiencing the world in clarity. That's why we've partnered with top manufacturers and certified opticians to curate a collection that meets the highest standards.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers worldwide, combining traditional craftsmanship with modern technology to deliver an unparalleled eyewear experience.
                </p>
              </div>
              <Link href="/products">
                <Button
                  className="mt-6 bg-emerald-600 hover:bg-emerald-700 rounded-full px-8"
                >
                  Explore Our Collection
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1728470164693-95f5e7bade80?w=800"
                  alt="Optical Hub store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-emerald-600 text-4xl mb-1">15,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped who we are</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 hidden md:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative mb-12 md:mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:px-8">
                      <div className={`bg-gray-50 rounded-2xl p-6 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <div className="text-emerald-600 text-2xl mb-2">{item.year}</div>
                        <h3 className="text-xl text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-12 h-12 bg-emerald-600 rounded-full items-center justify-center relative z-10">
                      <div className="w-6 h-6 bg-white rounded-full" />
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-gray-900 mb-4">Why Choose Optical Hub</h2>
            <p className="text-xl text-gray-600">Experience the difference</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                    <div className="text-sm text-emerald-600">{feature.stats}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Ready to Find Your Perfect Frame?</h2>
            <p className="text-xl text-emerald-50 mb-8">
              Join thousands of satisfied customers who trust Optical Hub for their eyewear needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100 rounded-full px-8"
                >
                  Browse Collection
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
