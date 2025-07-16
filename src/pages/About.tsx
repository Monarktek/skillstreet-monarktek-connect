import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Monarktek</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We've been developing SkillStreet for several years, with the idea starting about 10 years ago. 
              Our mission is to connect people faster using AI, helping them find local gigs, community events, 
              and meaningful relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the team behind SkillStreet. We've been working remotely together using Discord, 
              building this platform from the ground up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Alan Hourmand */}
            <Card className="group hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">AH</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Alan Hourmand</h3>
                <Badge variant="secondary" className="mb-4">CEO & Founder</Badge>
                <p className="text-muted-foreground">
                  Visionary leader who conceived the SkillStreet idea 10 years ago. Alan has been 
                  driving the product development and company strategy since inception.
                </p>
              </CardContent>
            </Card>

            {/* Charles Ross */}
            <Card className="group hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-accent rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">CR</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Charles Ross</h3>
                <Badge variant="secondary" className="mb-4">CTO & Co-founder</Badge>
                <p className="text-muted-foreground">
                  Technical architect behind our AI-powered matching system. Charles leads the 
                  engineering team and oversees all technical aspects of the platform.
                </p>
              </CardContent>
            </Card>

            {/* Joe Stella */}
            <Card className="group hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">JS</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Joe Stella</h3>
                <Badge variant="secondary" className="mb-4">CFO & Co-founder</Badge>
                <p className="text-muted-foreground">
                  Our first investor who joined the team later as CFO. Joe manages financial 
                  operations and business development, bringing valuable industry expertise.
                </p>
              </CardContent>
            </Card>

            {/* Raheem Hammed */}
            <Card className="group hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-accent rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">RH</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Raheem Hammed</h3>
                <Badge variant="secondary" className="mb-4">Developer</Badge>
                <p className="text-muted-foreground">
                  Full-stack developer who helped build SkillStreet from the ground up. 
                  Raheem specializes in backend systems and API development.
                </p>
              </CardContent>
            </Card>

            {/* Yusuf Yildiz */}
            <Card className="group hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">YY</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Yusuf Yildiz</h3>
                <Badge variant="secondary" className="mb-4">Developer</Badge>
                <p className="text-muted-foreground">
                  Frontend developer focused on creating intuitive user experiences. 
                  Yusuf has been instrumental in building the mobile and web interfaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                The idea for SkillStreet began 10 years ago when our founder Alan Hourmand 
                recognized the need for better local connections in an increasingly digital world. 
                What started as a simple concept has evolved into a comprehensive AI-powered platform 
                that helps people find meaningful work, events, and relationships in their communities.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we've assembled a talented team of developers, designers, and business 
                professionals who share our vision of strengthening local communities through technology. 
                Working remotely and collaborating primarily through Discord, we've built SkillStreet 
                from the ground up with a focus on user experience and community impact.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, SkillStreet represents years of dedication, innovation, and a deep commitment 
                to making local connections easier and more meaningful for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}