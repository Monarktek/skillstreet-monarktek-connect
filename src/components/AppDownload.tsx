import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, Clock } from "lucide-react";
import qrCodePlaceholder from "@/assets/qr-code-placeholder.png";

export default function AppDownload() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Ready for SkillStreet
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The future of local connections is almost here. Be the first to know when 
            SkillStreet launches in your area.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-glow">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* QR Code Section */}
                <div className="text-center">
                  <div className="bg-gradient-hero rounded-3xl p-8 mb-6 inline-block">
                    <img 
                      src={qrCodePlaceholder} 
                      alt="QR Code for SkillStreet App" 
                      className="w-48 h-48 mx-auto rounded-2xl"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Scan to Download
                      </h3>
                    </div>
                    
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      <Clock className="w-4 h-4 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                </div>

                {/* App Info Section */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      SkillStreet Mobile App
                    </h3>
                    <p className="text-muted-foreground">
                      Our mobile app is currently in development and will be available soon on both 
                      iOS and Android platforms. Join our waitlist to be notified when it launches.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2">
                        <Download className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Easy Installation</h4>
                        <p className="text-sm text-muted-foreground">
                          Simple download from App Store or Google Play
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-accent/10 rounded-full p-2">
                        <Smartphone className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Mobile First</h4>
                        <p className="text-sm text-muted-foreground">
                          Designed for seamless mobile experience
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Real-time Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Instant notifications for new opportunities
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      Join the Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}