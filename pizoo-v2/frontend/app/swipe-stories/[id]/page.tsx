import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function StoryDetail({ params }: { params: { id: string } }) {
  // In a real app, this would fetch from API
  const story = {
    id: params.id,
    title: 'Love Found in Unexpected Places',
    content: `
      Sarah and Mike never thought they would meet someone special on a dating app. But one swipe changed everything.
      
      It was a typical Tuesday evening when Sarah, a graphic designer from Brooklyn, decided to give Pizoo one more try. She had been on and off dating apps for years, always hopeful but often disappointed. Mike, a software engineer from Manhattan, had just created his profile that same day after his friends convinced him to give online dating a chance.
      
      Their first conversation was electric. They talked about everything - from their favorite coffee shops to their dreams of traveling the world. What was supposed to be a quick chat before bed turned into a six-hour conversation that lasted until sunrise.
      
      "I knew there was something different about her," Mike recalls. "She wasn't just beautiful; she was genuine, funny, and we connected on a level I had never experienced before."
      
      Their first date was at a small Italian restaurant in the West Village. What they planned as a dinner date turned into a magical evening that included a spontaneous walk through Central Park, getting caught in the rain, and sharing their first kiss under a street lamp.
      
      Two years later, they got married in the same park where they had their first kiss. "Pizoo didn't just help us find love," Sarah says with tears in her eyes, "it helped us find our soulmate."
      
      Today, Sarah and Mike are expecting their first child and couldn't be happier. They credit Pizoo for bringing them together and often tell their friends that sometimes, the best things in life come when you least expect them.
    `,
    category: 'Success Story',
    location: 'New York, USA',
    date: 'December 2024',
    couple: 'Sarah & Mike',
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <article className="pt-24 pb-16">
        {/* Hero Image */}
        <div className="relative h-96 bg-gradient-to-br from-pizoo-pink to-pizoo-purple flex items-center justify-center">
          <Heart className="w-32 h-32 text-white opacity-30" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          {/* Category Badge */}
          <span className="inline-block bg-white text-pizoo-purple text-sm font-semibold px-4 py-2 rounded-full shadow-lg mb-6">
            {story.category}
          </span>

          {/* Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <Link href="/swipe-stories" className="inline-flex items-center space-x-2 text-pizoo-pink hover:text-pizoo-purple transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Stories</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{story.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-pizoo-pink" />
                <span className="font-semibold">{story.couple}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{story.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{story.date}</span>
              </div>
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none">
              {story.content.split('\n\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-br from-pizoo-lightPink/30 to-purple-100/30 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Write Your Own Love Story?</h3>
                <p className="text-gray-600 mb-6">Join millions of people finding love on Pizoo.</p>
                <Link href="/download" className="inline-block btn-gradient">
                  Download Pizoo Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
