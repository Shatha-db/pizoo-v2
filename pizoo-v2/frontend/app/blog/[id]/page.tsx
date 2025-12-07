import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BlogPost({ params }: { params: { id: string } }) {
  // In a real app, this would fetch the blog post from an API
  const post = {
    id: params.id,
    title: '10 Tips for Creating the Perfect Dating Profile',
    content: `
      <p>Creating an attractive dating profile is both an art and a science. Your profile is your first impression, and you want to make it count. Here are our top 10 tips to help you stand out from the crowd.</p>
      
      <h2>1. Choose the Right Photos</h2>
      <p>Your photos are the most important part of your profile. Use high-quality images that clearly show your face. Include a mix of photos: a great headshot, full-body photo, and pictures of you doing activities you love.</p>
      
      <h2>2. Write an Engaging Bio</h2>
      <p>Your bio should be authentic, positive, and specific. Instead of generic statements like "I love to travel," try "Just got back from hiking Machu Picchu and already planning my next adventure."</p>
      
      <h2>3. Be Honest</h2>
      <p>Honesty is crucial. Misrepresenting yourself will only lead to disappointment later. Be genuine about who you are and what you're looking for.</p>
      
      <h2>4. Show Your Personality</h2>
      <p>Let your unique personality shine through. Use humor if that's your style, or be thoughtful and introspective if that fits you better. The goal is to give people a real sense of who you are.</p>
      
      <h2>5. Be Specific About Your Interests</h2>
      <p>Instead of listing generic hobbies, be specific. "I love making homemade pasta on Sunday afternoons" is much more interesting than "I enjoy cooking."</p>
    `,
    category: 'Profile Tips',
    author: 'Sarah Johnson',
    date: 'December 15, 2024',
    readTime: '5 min read',
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center space-x-2 text-pizoo-pink hover:text-pizoo-purple transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Category & Meta */}
          <div className="mb-6">
            <span className="inline-block bg-pizoo-lightPink/30 text-pizoo-purple text-sm font-semibold px-4 py-2 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="h-96 bg-gradient-to-br from-pizoo-pink to-pizoo-purple rounded-3xl mb-8 flex items-center justify-center">
            <div className="text-white text-8xl font-bold opacity-20">P</div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <button className="bg-pizoo-lightPink/30 hover:bg-pizoo-lightPink/50 text-pizoo-purple px-6 py-2 rounded-full transition-colors">
                Twitter
              </button>
              <button className="bg-pizoo-lightPink/30 hover:bg-pizoo-lightPink/50 text-pizoo-purple px-6 py-2 rounded-full transition-colors">
                Facebook
              </button>
              <button className="bg-pizoo-lightPink/30 hover:bg-pizoo-lightPink/50 text-pizoo-purple px-6 py-2 rounded-full transition-colors">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
