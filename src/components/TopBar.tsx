import { Phone, Mail, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@monarktek.com</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Austin, TX</span>
            </div>
          </div>
          <div className="text-muted-foreground">
            Building Community Connections
          </div>
        </div>
      </div>
    </div>
  );
}