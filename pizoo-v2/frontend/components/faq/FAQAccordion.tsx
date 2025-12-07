'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I create an account on Pizoo?',
      answer: 'Creating an account is easy! Download the Pizoo app from the App Store or Google Play, then sign up using your phone number, email, or social media account. Complete your profile with photos and information about yourself, and you\'re ready to start swiping!',
    },
    {
      question: 'Is Pizoo free to use?',
      answer: 'Yes, Pizoo is free to download and use. We offer basic features at no cost, including swiping, matching, and messaging. For users who want enhanced features like unlimited swipes, Super Swipes, and profile boosts, we offer Pizoo Premium subscriptions.',
    },
    {
      question: 'How does the matching algorithm work?',
      answer: 'Our smart matching algorithm considers multiple factors including your location, age preferences, interests, and activity patterns. The more you use Pizoo, the better our algorithm becomes at suggesting compatible matches for you.',
    },
    {
      question: 'How can I stay safe while using Pizoo?',
      answer: 'Safety is our top priority. Always meet in public places for first dates, never share personal or financial information, trust your instincts, and use our in-app safety features like profile verification and reporting. Read our Safety Center for more detailed tips.',
    },
    {
      question: 'Can I change my location?',
      answer: 'With Pizoo Premium, you can change your location to swipe and match with people in different cities. This is perfect for travelers or those planning to relocate. Free users can only see matches in their current location.',
    },
    {
      question: 'How do I verify my profile?',
      answer: 'Profile verification helps build trust in our community. To verify your profile, go to your settings and select "Verify Profile." You\'ll be prompted to take a selfie that matches specific poses. Our system will compare it to your profile photos to confirm your identity.',
    },
    {
      question: 'What should I do if I encounter inappropriate behavior?',
      answer: 'If someone violates our community guidelines, please report them immediately using the report button on their profile or in your conversation. Our team reviews all reports and takes appropriate action, which may include warnings or permanent bans.',
    },
    {
      question: 'How do I delete my account?',
      answer: 'We\'re sorry to see you go! To delete your account, go to Settings > Account > Delete Account. Keep in mind that this action is permanent and cannot be undone. All your matches, messages, and profile information will be permanently deleted.',
    },
    {
      question: 'Can I use Pizoo on multiple devices?',
      answer: 'Yes! You can access your Pizoo account from multiple devices. Simply log in with your credentials on any device, and your profile, matches, and conversations will sync automatically.',
    },
    {
      question: 'What is a Super Swipe?',
      answer: 'A Super Swipe is a special way to show someone you\'re really interested. When you Super Swipe someone, they\'ll be notified that you like them before they even swipe on your profile, helping you stand out from other users.',
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden" data-testid={`faq-item-${index}`}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            data-testid={`faq-button-${index}`}
          >
            <span className="font-semibold text-lg pr-8">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-pizoo-purple transition-transform flex-shrink-0 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
