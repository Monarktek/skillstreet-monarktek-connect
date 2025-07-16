import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Features from "@/components/Features";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <Mission />
      <Features />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
