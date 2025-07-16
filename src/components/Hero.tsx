import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/neighborhood-background.jpg";
import womanPhoneImage from "@/assets/woman-phone-neighborhood.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              {/* Main SkillStreet Branding */}
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="bg-gradient-primary rounded-full p-3 shadow-glow">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  <span className="text-primary">OldSkool</span>
                </h1>
                <p className="text-lg md:text-xl text-primary font-semibold mb-2">
                  Bringing back community
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Your local connection hub for gigs, projects, events, and meaningful relationships.
                </p>
                <p className="text-base md:text-lg text-muted-foreground/80">
                  By <span className="text-primary">Monarktek</span> - Revolutionizing local connections through AI
                </p>
              </div>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <div className="flex items-center gap-2 bg-card border-2 border-primary/20 rounded-full px-4 py-2 shadow-md">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Local Connections</span>
                </div>
                <div className="flex items-center gap-2 bg-card border-2 border-accent/20 rounded-full px-4 py-2 shadow-md">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">AI-Powered Matching</span>
                </div>
                <div className="flex items-center gap-2 bg-card border-2 border-primary/20 rounded-full px-4 py-2 shadow-md">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Fast Job Finding</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/contact">
                  Email for Details
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={womanPhoneImage} 
                alt="Woman using smartphone in neighborhood - OldSkool app concept"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}