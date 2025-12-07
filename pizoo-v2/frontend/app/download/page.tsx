import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Apple, Play, Smartphone, Star, Download as DownloadIcon } from 'lucide-react';
import Link from 'next/link';

export default function Download() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-pizoo relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <DownloadIcon className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-display font-bold mb-6">
            Download Pizoo
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start your journey to finding meaningful connections. Available on iOS and Android.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#"
              className="flex items-center space-x-3 bg-white text-gray-900 px-8 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
              data-testid="download-app-store-button"
            >
              <Apple className="w-10 h-10" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center space-x-3 bg-white text-gray-900 px-8 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
              data-testid="download-play-store-button"
            >
              <Play className="w-10 h-10" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-sm opacity-80">App Store Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-sm opacity-80">Play Store Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100M+</div>
              <div className="text-sm opacity-80">Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-sm opacity-80">Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">What You'll Get</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                'Smart matching algorithm',
                'Unlimited messaging',
                'Video chat support',
                'Profile verification',
                'Advanced filters',
                'Safety features',
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-pizoo rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="relative h-[600px] bg-white rounded-[3rem] shadow-2xl p-4">
                  <div className="w-full h-full bg-gradient-to-br from-pizoo-lightPink to-purple-100 rounded-[2.5rem] flex items-center justify-center">
                    <Smartphone className="w-32 h-32 text-pizoo-purple opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Scan to Download</h2>
          <p className="text-xl text-gray-600 mb-8">
            Scan the QR code with your phone camera to download the app instantly.
          </p>
          <div className="w-64 h-64 mx-auto bg-white border-4 border-pizoo-purple rounded-2xl flex items-center justify-center shadow-xl">
            <div className="text-center p-6">
              <div className="text-6xl mb-2">📱</div>
              <p className="text-sm text-gray-500">QR Code Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
