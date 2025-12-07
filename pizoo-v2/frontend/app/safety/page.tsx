import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, CheckCircle, AlertTriangle, Lock, Eye, UserCheck } from 'lucide-react';

export default function Safety() {
  const safetyTips = [
    {
      icon: Shield,
      title: 'Protect Your Personal Information',
      description: 'Never share sensitive information like your address, financial details, or passwords with anyone on the platform.',
    },
    {
      icon: Eye,
      title: 'Meet in Public Places',
      description: 'Always meet for the first time in a public, well-lit place. Tell a friend or family member where you\'re going.',
    },
    {
      icon: UserCheck,
      title: 'Trust Your Instincts',
      description: 'If something feels off, trust your gut. There\'s no pressure to continue a conversation or meeting.',
    },
    {
      icon: Lock,
      title: 'Report Suspicious Behavior',
      description: 'Use our reporting feature to flag inappropriate behavior, harassment, or suspicious profiles.',
    },
  ];

  const features = [
    'Profile verification system',
    'Photo verification',
    'Block and report functions',
    '24/7 safety support team',
    'Safety tips and resources',
    'Privacy controls',
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-br from-pizoo-lightPink/30 via-white to-purple-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-20 h-20 mx-auto mb-6 text-pizoo-purple" />
          <h1 className="text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Safety Center</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safety and security are our top priorities. Learn how we keep you safe on Pizoo.
          </p>
        </div>
      </div>

      {/* Safety Tips */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Essential Safety Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {safetyTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-pizoo rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Safety Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How We Keep You Safe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've built multiple layers of protection into Pizoo to ensure a safe dating experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-md">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">In Case of Emergency</h2>
            <p className="text-lg text-gray-700 mb-6">
              If you feel you're in immediate danger, contact local emergency services right away.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">Emergency: <span className="font-bold">911 (US)</span></p>
              <p className="text-gray-700">Pizoo Safety Team: <span className="font-bold">safety@pizoo.com</span></p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
