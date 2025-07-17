import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, Clock } from "lucide-react";
import qrCodePlaceholder from "@/assets/qr-code-placeholder.png";

export default function AppDownload() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join the NeighborMe Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Be among the first to experience the future of local connections. 
            Get early access and help shape the platform.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border shadow-glow bg-gradient-to-br from-card to-card/80">
            <CardContent className="p-8 md:p-10 text-center">
              <div className="space-y-6">
                <div className="bg-gradient-primary rounded-full p-6 w-20 h-20 mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    NeighborMe Mobile App
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Join thousands of early adopters waiting for the revolutionary app that will 
                    transform how you connect with your local community.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-2">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">Early Access</h4>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent/10 rounded-full p-3 w-12 h-12 mx-auto mb-2">
                      <Smartphone className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">Beta Testing</h4>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-2">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">First to Know</h4>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="/contact">
                      Email for Details
                    </a>
                  </Button>
                  
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    <Clock className="w-4 h-4 mr-1" />
                    Launching Q3 2024
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}