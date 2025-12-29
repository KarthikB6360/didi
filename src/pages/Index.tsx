import FloatingElements from "@/components/FloatingElements";
import HeroSection from "@/components/HeroSection";
import SupportSection from "@/components/SupportSection";
import BondSection from "@/components/BondSection";
import ApologySection from "@/components/ApologySection";
import PartySection from "@/components/PartySection";
import WishesSection from "@/components/WishesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      <FloatingElements />
      <HeroSection />
      <SupportSection />
      <BondSection />
      <ApologySection />
      <PartySection />
      <WishesSection />
      <Footer />
    </main>
  );
};

export default Index;