import SiteNav from "@/components/SiteNav";
import CompanyHero from "@/components/CompanyHero";
import CompanyAbout from "@/components/CompanyAbout";
import Products from "@/components/Products";
import Principles from "@/components/Principles";
import ContactForm from "@/components/ContactForm";
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
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
