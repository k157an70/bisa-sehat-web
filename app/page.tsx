import HeroSection from '@/components/sections/hero-section';
import Navbar from '@/components/layout/navbar';
import ServicesSection from "@/components/sections/services-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import ArticlesSection from "@/components/sections/articles-section";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}