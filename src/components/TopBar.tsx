import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="bg-card/50 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          <Link 
            to="/" 
            className="text-primary font-bold hover:text-primary/80 transition-colors"
          >
            Monarktek
          </Link>
          <nav className="flex items-center space-x-6">
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/mission" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Our Mission
            </Link>
            <Link 
              to="/careers" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="text-muted-foreground font-medium text-xs">
            🚀 OldSkool is launching soon
          </div>
        </div>
      </div>
    </div>
  );
}