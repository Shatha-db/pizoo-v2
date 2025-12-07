'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pizoo-lightPink/30 via-white to-purple-100/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-pizoo-pink/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pizoo-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-pizoo-pink" />
              <span className="text-pizoo-purple font-semibold">Welcome to Pizoo</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              Start Something
              <span className="block text-gradient">Epic</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with people who match your vibe. Swipe, chat, and meet amazing people near you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gradient flex items-center justify-center space-x-2" data-testid="hero-get-started-button">
                <Heart className="w-5 h-5" />
                <span>Get Started</span>
              </button>
              <button className="bg-white text-pizoo-purple font-semibold py-3 px-8 rounded-full border-2 border-pizoo-purple hover:bg-pizoo-purple hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-gradient">10M+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">50M+</div>
                <div className="text-sm text-gray-600">Matches Made</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">150+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* AI Generated Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-pizoo-pink to-pizoo-purple flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Heart className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-75">AI-Generated Hero Image</p>
                  <p className="text-sm opacity-50 mt-2">Realistic person using dating app</p>
                </div>
              </div>
              
              {/* Floating Card Elements */}
              <motion.div
                className="absolute top-10 right-10 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-gradient-pizoo rounded-full"></div>
                  <div>
                    <div className="w-20 h-3 bg-gray-200 rounded mb-1"></div>
                    <div className="w-16 h-2 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-pizoo-pink fill-current" />
                  <span className="text-sm font-semibold">It's a Match!</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
