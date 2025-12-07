import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-display font-bold mb-6 text-center">
            <span className="text-gradient">Privacy Policy</span>
          </h1>
          <p className="text-center text-gray-600 mb-12">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Pizoo. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our app and tell you about your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect and process the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Profile information (photos, bio, interests, preferences)</li>
                <li>Location data</li>
                <li>Usage data (how you interact with our app)</li>
                <li>Device information</li>
                <li>Communication data (messages with other users)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide and improve our services</li>
                <li>Create and maintain your account</li>
                <li>Match you with other users</li>
                <li>Communicate with you about our services</li>
                <li>Ensure platform safety and security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                <li>Other users (profile information visible on the platform)</li>
                <li>Service providers who assist in operating our platform</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this privacy policy, please contact us at privacy@pizoo.com
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
