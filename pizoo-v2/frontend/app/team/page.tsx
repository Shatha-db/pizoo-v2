import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Passionate about connecting people and building meaningful relationships.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Tech visionary with 15+ years experience building scalable platforms.',
    },
    {
      name: 'Emma Williams',
      role: 'Head of Product',
      bio: 'Focused on creating delightful user experiences that drive engagement.',
    },
    {
      name: 'David Martinez',
      role: 'Head of Engineering',
      bio: 'Leading our talented engineering team to build world-class technology.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Head of Marketing',
      bio: 'Spreading the word about Pizoo and growing our global community.',
    },
    {
      name: 'James Taylor',
      role: 'Head of Safety',
      bio: 'Ensuring Pizoo remains a safe and trusted platform for everyone.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-br from-pizoo-lightPink/30 via-white to-purple-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate people behind Pizoo, working every day to help you find your perfect match.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300" data-testid={`team-member-${index}`}>
                {/* Photo Placeholder */}
                <div className="h-80 bg-gradient-to-br from-pizoo-pink to-pizoo-purple flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-gradient">{member.name.charAt(0)}</span>
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-pizoo-purple font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-pizoo-pink transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-pizoo-pink transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-pizoo-pink transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
