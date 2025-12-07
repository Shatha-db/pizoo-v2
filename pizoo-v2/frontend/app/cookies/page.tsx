import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Cookies() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-display font-bold mb-6 text-center">
            <span className="text-gradient">Cookie Policy</span>
          </h1>
          <p className="text-center text-gray-600 mb-12">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website or use our app. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-2xl font-semibold mb-3 mt-6">Essential Cookies</h3>
              <p className="text-gray-600 leading-relaxed">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">Analytics Cookies</h3>
              <p className="text-gray-600 leading-relaxed">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">Functionality Cookies</h3>
              <p className="text-gray-600 leading-relaxed">
                These cookies enable personalized features and remember your preferences, such as language settings and login information.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">Advertising Cookies</h3>
              <p className="text-gray-600 leading-relaxed">
                These cookies are used to deliver relevant advertisements and track the effectiveness of our advertising campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Keep you signed in to your account</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our service</li>
                <li>Improve our website and app performance</li>
                <li>Show you relevant content and advertisements</li>
                <li>Protect against fraudulent activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                We work with third-party partners who may also set cookies on your device. These partners include analytics providers, advertising networks, and social media platforms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, this may affect the functionality of our service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about our Cookie Policy, please contact us at cookies@pizoo.com
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
