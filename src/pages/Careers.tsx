import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Mail } from "lucide-react";
import Footer from "@/components/Footer";

export default function Careers() {
  const positions = [
    {
      title: "iOS Developer",
      type: "Contract",
      location: "Remote",
      description: "We're looking for an experienced iOS developer to help build and enhance our mobile application. You'll work with our team to create intuitive user experiences and implement AI-powered features.",
      requirements: [
        "3+ years of iOS development experience",
        "Proficiency in Swift and SwiftUI",
        "Experience with REST APIs and backend integration",
        "Knowledge of App Store submission process"
      ],
      nice_to_have: [
        "Experience with AI/ML frameworks",
        "Background in social or community apps",
        "Familiarity with location-based services"
      ]
    },
    {
      title: "Mobile Designer",
      type: "Contract",
      location: "Remote",
      description: "Join our design team to create beautiful, user-friendly interfaces for our mobile applications. You'll help shape the visual identity and user experience of SkillStreet.",
      requirements: [
        "3+ years of mobile app design experience",
        "Proficiency in Figma or similar design tools",
        "Strong understanding of iOS and Android design guidelines",
        "Experience with prototyping and user testing"
      ],
      nice_to_have: [
        "Experience with design systems",
        "Background in community or social app design",
        "Knowledge of accessibility best practices"
      ]
    },
    {
      title: "Marketing Position",
      type: "Contract",
      location: "Remote",
      description: "Help us grow SkillStreet's user base and build brand awareness. You'll develop and execute marketing strategies to reach our target audience and drive user acquisition.",
      requirements: [
        "3+ years of digital marketing experience",
        "Experience with social media marketing",
        "Knowledge of SEO and content marketing",
        "Analytics and data-driven approach"
      ],
      nice_to_have: [
        "Experience marketing mobile apps",
        "Background in community building",
        "Knowledge of local business marketing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're building the future of local connections. Join our remote team and help us 
              create meaningful technology that brings communities together.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All positions are contract-based and fully remote. We're looking for talented 
              individuals who share our passion for connecting communities.
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-border">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {position.type}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a href="/contact">
                        Apply Now
                      </a>
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {position.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Requirements
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Nice to Have
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {position.nice_to_have.map((nice, niceIndex) => (
                          <li key={niceIndex} className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            {nice}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join Monarktek?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Remote First</h3>
                <p className="text-muted-foreground">
                  Work from anywhere. We've been remote since day one, with a culture built around 
                  flexibility and work-life balance.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-accent rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Meaningful Impact</h3>
                <p className="text-muted-foreground">
                  Your work will directly impact how people connect and find opportunities in their 
                  local communities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Great Team</h3>
                <p className="text-muted-foreground">
                  Join a passionate team of developers, designers, and entrepreneurs who are 
                  committed to building something special.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}