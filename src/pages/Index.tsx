import SiteNav from "@/components/SiteNav";
import CompanyHero from "@/components/CompanyHero";
import CompanyAbout from "@/components/CompanyAbout";
import Products from "@/components/Products";
import Principles from "@/components/Principles";
import ContactCTA from "@/components/ContactCTA";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <CompanyHero />
        <CompanyAbout />
        <Products />
        <Principles />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
