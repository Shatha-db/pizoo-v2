import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Users, Globe, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Connections',
      description: 'We believe in fostering genuine relationships built on mutual respect and understanding.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our diverse global community is at the heart of everything we do.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Connecting people across borders and cultures to create a more united world.',
    },
    {
      icon: Shield,
      title: 'Safety & Trust',
      description: 'Your safety and privacy are our top priorities in every feature we build.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-pizoo-lightPink/30 via-white to-purple-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold mb-6">
            About <span className="text-gradient">Pizoo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are on a mission to create meaningful connections and help people find love in the digital age.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Pizoo was founded in 2020 with a simple yet powerful vision: to revolutionize the way people connect and find meaningful relationships in the digital age. What started as an idea has grown into a global community of millions of users who have found love, friendship, and companionship through our platform.
            </p>
            <p>
              Our team of passionate individuals works tirelessly to create an inclusive, safe, and engaging environment where everyone can be themselves and find their perfect match. We leverage cutting-edge technology and human insight to create matches that truly matter.
            </p>
            <p>
              Today, Pizoo is available in over 150 countries and has facilitated millions of meaningful connections. But we are just getting started. Every day, we work to improve our platform, add new features, and make the experience even better for our users.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-pizoo rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">10M+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">150+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">50M+</div>
              <div className="text-gray-600">Matches Made</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">4.8</div>
              <div className="text-gray-600">App Rating</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
