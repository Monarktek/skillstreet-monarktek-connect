import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Target, Zap } from "lucide-react";
import communityImage from "@/assets/neighborhood-handshake.jpg";

export default function Mission() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our mission is to connect people faster using AI, help people find local gigs, 
            community events, matching people for activities or finding friends.
          </p>
          
          {/* Mission Image */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={communityImage} 
                alt="People shaking hands in a neighborhood setting"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connect People */}
          <Card className="group hover:shadow-glow transition-all duration-300 border-border">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Connect People</h3>
              <p className="text-muted-foreground">
                Building authentic relationships within your local community through shared interests and needs.
              </p>
            </CardContent>
          </Card>

          {/* AI-Powered Matching */}
          <Card className="group hover:shadow-glow transition-all duration-300 border-border">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-accent rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI Intelligence</h3>
              <p className="text-muted-foreground">
                Smart algorithms that understand your skills, preferences, and goals to make perfect matches.
              </p>
            </CardContent>
          </Card>

          {/* Fast Job Finding */}
          <Card className="group hover:shadow-glow transition-all duration-300 border-border">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Fast Opportunities</h3>
              <p className="text-muted-foreground">
                Instantly discover gigs, projects, and job opportunities that match your skills and schedule.
              </p>
            </CardContent>
          </Card>

          {/* Strengthen Communities */}
          <Card className="group hover:shadow-glow transition-all duration-300 border-border">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-accent rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Strong Communities</h3>
              <p className="text-muted-foreground">
                Fostering local economic growth and social connections that benefit everyone.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}