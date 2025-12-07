'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';

export default function StoriesPreview() {
  const stories = [
    {
      id: 1,
      title: 'Love Found in Unexpected Places',
      excerpt: 'Sarah and Mike never thought they would meet someone special on a dating app...',
      category: 'Success Story',
    },
    {
      id: 2,
      title: 'From First Swipe to Forever',
      excerpt: 'Emma and Jake share their journey from matching on Pizoo to their wedding day...',
      category: 'Romance',
    },
    {
      id: 3,
      title: 'A Connection Across Continents',
      excerpt: 'How Pizoo helped Maria and Carlos bridge the distance and find true love...',
      category: 'Long Distance',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-display font-bold mb-4"
          >
            <span className="text-gradient">Real Stories</span> from Real People
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover how Pizoo has helped millions find their perfect match.
          </motion.p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
              data-testid={`story-card-${story.id}`}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-pizoo-pink to-pizoo-purple flex items-center justify-center">
                <Heart className="w-16 h-16 text-white opacity-50" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-pizoo-lightPink/30 text-pizoo-purple text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {story.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{story.excerpt}</p>
                <Link
                  href={`/swipe-stories/${story.id}`}
                  className="text-pizoo-pink font-semibold flex items-center space-x-1 hover:space-x-2 transition-all"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/swipe-stories"
            className="inline-flex items-center space-x-2 btn-gradient"
            data-testid="view-all-stories-button"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
