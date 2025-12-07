import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/faq/FAQAccordion';

export default function FAQ() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-br from-pizoo-lightPink/30 via-white to-purple-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold mb-6">
            <span className="text-gradient">FAQ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Pizoo.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </div>

      <Footer />
    </main>
  );
}
