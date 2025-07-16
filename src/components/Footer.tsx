import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Monarktek Corporation</h3>
            <p className="text-background/80 mb-4 max-w-md">
              Revolutionizing local connections through AI-powered technology. 
              Building stronger communities, one connection at a time.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm text-background/80">Connecting communities worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm text-background/80">hello@monarktek.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm text-background/80">Coming soon</span>
              </div>
            </div>
          </div>

          {/* SkillStreet */}
          <div>
            <h4 className="text-lg font-semibold mb-4">SkillStreet</h4>
            <ul className="space-y-2 text-background/80">
              <li>Find Local Gigs</li>
              <li>Connect with People</li>
              <li>Join Events</li>
              <li>Build Community</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Monarktek Corporation. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="text-background/60 hover:text-background">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm" className="text-background/60 hover:text-background">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}