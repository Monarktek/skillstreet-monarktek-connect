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
          <div className="text-muted-foreground font-medium">
            🚀 SkillStreet is launching soon - Building Community Connections
          </div>
          <div className="w-20"> {/* Spacer for balanced layout */}</div>
        </div>
      </div>
    </div>
  );
}