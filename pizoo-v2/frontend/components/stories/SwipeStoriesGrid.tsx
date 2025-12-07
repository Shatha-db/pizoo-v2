'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, ArrowRight, MapPin, Calendar } from 'lucide-react';

export default function SwipeStoriesGrid() {
  const stories = [
    {
      id: 1,
      title: 'Love Found in Unexpected Places',
      excerpt: 'Sarah and Mike never thought they would meet someone special on a dating app. But one swipe changed everything...',
      category: 'Success Story',
      location: 'New York, USA',
      date: 'December 2024',
      featured: true,
    },
    {
      id: 2,
      title: 'From First Swipe to Forever',
      excerpt: 'Emma and Jake share their journey from matching on Pizoo to their wedding day. A story of patience and true love...',
      category: 'Romance',
      location: 'London, UK',
      date: 'November 2024',
      featured: true,
    },
    {
      id: 3,
      title: 'A Connection Across Continents',
      excerpt: 'How Pizoo helped Maria and Carlos bridge the distance between Spain and Brazil to find true love...',
      category: 'Long Distance',
      location: 'Madrid, Spain',
      date: 'October 2024',
      featured: false,
    },
    {
      id: 4,
      title: 'Second Chances and New Beginnings',
      excerpt: 'After a difficult divorce, Lisa thought she would never find love again. Then she met David on Pizoo...',
      category: 'Inspiration',
      location: 'Sydney, Australia',
      date: 'September 2024',
      featured: false,
    },
    {
      id: 5,
      title: 'Love at First Chat',
      excerpt: 'Their first conversation lasted 6 hours. Now they are planning their future together...',
      category: 'Quick Match',
      location: 'Toronto, Canada',
      date: 'August 2024',
      featured: false,
    },
    {
      id: 6,
      title: 'Finding Love After 50',
      excerpt: 'Age is just a number. Margaret and Robert prove that it is never too late to find your soulmate...',
      category: 'Mature Love',
      location: 'Paris, France',
      date: 'July 2024',
      featured: false,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Featured Stories */}
      <div className="grid md:grid-cols-2 gap-8">
        {stories.filter(s => s.featured).map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
          >
            <Link href={`/swipe-stories/${story.id}`}>
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-pizoo-pink to-pizoo-purple flex items-center justify-center">
                  <Heart className="w-24 h-24 text-white opacity-30" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-8 w-full">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {story.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pizoo-lightPink transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-white/80 mb-4 line-clamp-2">{story.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-white/70">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{story.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{story.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Regular Stories */}
      <div className="grid md:grid-cols-3 gap-8">
        {stories.filter(s => !s.featured).map((story, index) => (
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
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{story.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{story.date}</span>
                </div>
              </div>

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
    </div>
  );
}
