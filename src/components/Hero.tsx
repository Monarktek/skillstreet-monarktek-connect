import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Users, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Company Name */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Monarktek
              <span className="block text-primary">Corporation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionizing local connections through AI-powered community building
            </p>
          </div>

          {/* SkillStreet App Introduction */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-glow border border-border">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-primary rounded-full p-4 shadow-glow">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Introducing SkillStreet
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your local connection hub for gigs, projects, events, and meaningful relationships. 
                Connect with your community like never before.
              </p>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Local Connections</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">AI-Powered Matching</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Fast Job Finding</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Learn More About SkillStreet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}