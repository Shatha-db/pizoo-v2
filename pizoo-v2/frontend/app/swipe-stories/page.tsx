import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SwipeStoriesGrid from '@/components/stories/SwipeStoriesGrid';

export default function SwipeStories() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display font-bold mb-4">
              <span className="text-gradient">Swipe Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real love stories from real Pizoo users. Discover how a simple swipe changed their lives forever.
            </p>
          </div>
          <SwipeStoriesGrid />
        </div>
      </div>
      <Footer />
    </main>
  );
}
