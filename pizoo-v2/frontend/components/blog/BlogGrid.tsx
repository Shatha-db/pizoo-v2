'use client';

import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogGrid() {
  const posts = [
    {
      id: 1,
      title: '10 Tips for Creating the Perfect Dating Profile',
      excerpt: 'Stand out from the crowd with these expert tips for crafting an irresistible profile that gets results...',
      category: 'Profile Tips',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'How to Start a Great Conversation on Dating Apps',
      excerpt: 'Break the ice with confidence using these proven conversation starters that work every time...',
      category: 'Communication',
      author: 'Michael Chen',
      date: 'December 10, 2024',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Dating Safety: Essential Tips for Meeting Someone New',
      excerpt: 'Stay safe while dating online with our comprehensive guide to protecting yourself and having fun...',
      category: 'Safety',
      author: 'James Taylor',
      date: 'December 5, 2024',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'The Psychology of Attraction: What Science Says',
      excerpt: 'Discover what makes people attractive and how you can use this knowledge to improve your dating life...',
      category: 'Psychology',
      author: 'Emma Williams',
      date: 'November 28, 2024',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'Long Distance Relationships: Making Them Work',
      excerpt: 'Distance doesn\'t have to mean the end. Learn how to maintain a healthy long-distance relationship...',
      category: 'Relationships',
      author: 'Lisa Anderson',
      date: 'November 20, 2024',
      readTime: '7 min read',
    },
    {
      id: 6,
      title: 'Dating After 40: A Fresh Perspective',
      excerpt: 'Age is just a number. Embrace the exciting opportunities that come with dating later in life...',
      category: 'Life Stages',
      author: 'David Martinez',
      date: 'November 15, 2024',
      readTime: '5 min read',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover" data-testid={`blog-post-${post.id}`}>
          {/* Image Placeholder */}
          <div className="h-48 bg-gradient-to-br from-pizoo-pink to-pizoo-purple flex items-center justify-center">
            <div className="text-white text-6xl font-bold opacity-20">P</div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-block bg-pizoo-lightPink/30 text-pizoo-purple text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-500">{post.readTime}</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>

            <Link
              href={`/blog/${post.id}`}
              className="text-pizoo-pink font-semibold flex items-center space-x-1 hover:space-x-2 transition-all"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
