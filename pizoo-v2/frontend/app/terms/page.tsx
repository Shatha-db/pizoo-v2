import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-display font-bold mb-6 text-center">
            <span className="text-gradient">Terms & Conditions</span>
          </h1>
          <p className="text-center text-gray-600 mb-12">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using Pizoo, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Eligibility</h2>
              <p className="text-gray-600 leading-relaxed">
                You must be at least 18 years old to use Pizoo. By creating an account, you represent and warrant that you meet this age requirement and that all information you provide is accurate and truthful.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. Account Registration</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To use Pizoo, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Be responsible for all activity on your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. User Conduct</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the service for any illegal purpose</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate another person</li>
                <li>Post inappropriate or offensive content</li>
                <li>Spam or solicit other users</li>
                <li>Use automated systems to access the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Content</h2>
              <p className="text-gray-600 leading-relaxed">
                You retain ownership of content you post on Pizoo. However, by posting content, you grant us a license to use, modify, and display that content in connection with our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Premium Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Pizoo offers premium subscription services. All charges are non-refundable except as required by law. Subscriptions automatically renew unless cancelled before the renewal date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                Pizoo is provided "as is" without warranties of any kind. We do not guarantee that the service will be error-free or uninterrupted.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, Pizoo shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">10. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these terms, contact us at legal@pizoo.com
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
