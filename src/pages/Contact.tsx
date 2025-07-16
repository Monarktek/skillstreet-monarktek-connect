import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions about OldSkool or want to learn more about our platform? 
              We'd love to hear from you. Send us an email and we'll get back to you soon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Us */}
            <Card className="group hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Email Us</h3>
                <p className="text-muted-foreground mb-6">
                  Send us an email and we'll respond as soon as possible.
                </p>
                <Button 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  asChild
                >
                  <a href="mailto:info@monarktek.io">
                    info@monarktek.io
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* General Info */}
            <Card className="group hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-accent rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Let's Talk</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have questions, feedback, or want to collaborate, we're here to help.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>(919) 616-6125</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Raleigh, NC</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What to Include */}
          <Card className="border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                What to Include in Your Email
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    General Inquiries
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Questions about OldSkool features
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Partnership opportunities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Media and press inquiries
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Feedback and suggestions
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Career Applications
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Position you're interested in
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Brief introduction about yourself
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Relevant experience and skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Portfolio or work samples (if applicable)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Connect?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out. We're excited to hear from you and discuss how 
            OldSkool can help build stronger communities through better connections.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a href="mailto:info@monarktek.io">
              Send Us an Email
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}