'use client';

import { motion } from 'framer-motion';
import { Apple, Play, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function DownloadSection() {
  return (
    <section className="py-20 bg-gradient-pizoo relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-white">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Download Pizoo Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start your journey to finding meaningful connections. Available on iOS and Android.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="flex items-center space-x-3 bg-white text-gray-900 px-6 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                data-testid="app-store-button"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center space-x-3 bg-white text-gray-900 px-6 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                data-testid="play-store-button"
              >
                <Play className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-sm text-white/80">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100M+</div>
                <div className="text-sm text-white/80">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm text-white/80">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone Mockup */}
              <div className="relative h-[600px] bg-white rounded-[3rem] shadow-2xl p-4">
                <div className="w-full h-full bg-gradient-to-br from-pizoo-lightPink to-purple-100 rounded-[2.5rem] flex items-center justify-center">
                  <Smartphone className="w-32 h-32 text-pizoo-purple opacity-50" />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="text-4xl">💬</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="text-4xl">❤️</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
