'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Shield, Zap, Users, Star } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Heart,
      title: 'Smart Matching',
      description: 'Our advanced algorithm connects you with people who truly match your interests and values.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: MessageCircle,
      title: 'Instant Chat',
      description: 'Start meaningful conversations instantly with matches through our seamless messaging platform.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your safety is our priority. Verified profiles, photo verification, and secure encryption.',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'Super Swipe',
      description: 'Let someone know you're really interested with a Super Swipe and stand out from the crowd.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Connect with millions of users worldwide. Meet people from different cultures and backgrounds.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Star,
      title: 'Premium Features',
      description: 'Unlock exclusive features like unlimited swipes, rewind, and see who likes you.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Why Choose <span className="text-gradient">Pizoo</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to find meaningful connections and start something special.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                data-testid={`feature-card-${index}`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-pizoo-pink transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pizoo-pink/5 to-pizoo-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
