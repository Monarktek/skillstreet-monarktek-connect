import { Phone, Mail, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-card/50 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-10 text-sm">
          <div className="text-muted-foreground font-medium">
            🚀 SkillStreet is launching soon - Building Community Connections
          </div>
        </div>
      </div>
    </div>
  );
}