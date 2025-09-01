import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Monarktek</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Revolutionizing local connections through AI-powered technology. 
              Building stronger communities, one connection at a time.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Raleigh, NC</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@monarktek.io</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">(919) 616-6125</span>
              </div>
            </div>
          </div>

          {/* MilyMe */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">MilyMe</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Find Local Gigs</li>
              <li>Connect with People</li>
              <li>Join Events</li>
              <li>Build Community</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="/" className="hover:text-foreground transition-colors">Our Mission</a></li>
              <li><a href="/careers" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Monarktek. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}