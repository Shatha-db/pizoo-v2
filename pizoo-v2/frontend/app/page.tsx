import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StoriesPreview from '@/components/home/StoriesPreview';
import DownloadSection from '@/components/home/DownloadSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StoriesPreview />
      <DownloadSection />
      <Footer />
    </main>
  );
}
