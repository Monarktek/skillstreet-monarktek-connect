import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  MessageCircle, 
  Shield, 
  Star, 
  Users, 
  Zap 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Briefcase,
      title: "Gig Economy",
      description: "Find freelance work, part-time jobs, and project-based opportunities in your area.",
      color: "primary"
    },
    {
      icon: Calendar,
      title: "Events & Meetups",
      description: "Discover local events, workshops, and social gatherings that match your interests.",
      color: "accent"
    },
    {
      icon: Users,
      title: "Friend Connections",
      description: "Meet like-minded people for friendships, hobbies, and social activities.",
      color: "primary"
    },
    {
      icon: MapPin,
      title: "Local Focus",
      description: "Everything is location-based, connecting you with opportunities right in your neighborhood.",
      color: "accent"
    },
    {
      icon: MessageCircle,
      title: "Smart Messaging",
      description: "AI-enhanced communication tools that help you connect more effectively.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified profiles and secure payment systems for peace of mind.",
      color: "accent"
    },
    {
      icon: Star,
      title: "Skill Matching",
      description: "Advanced algorithms match your skills with the perfect opportunities.",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get notified immediately when opportunities that match your profile become available.",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose SkillStreet?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SkillStreet isn't just another app—it's your gateway to meaningful local connections, 
            powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className={`
                  rounded-full p-3 w-12 h-12 mb-4
                  ${feature.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'}
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}