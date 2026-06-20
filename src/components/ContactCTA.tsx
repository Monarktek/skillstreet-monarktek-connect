import { Mail, MapPin } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-28 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
          <div className="relative">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Let's build something that matters.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Partnerships, press, or just curious about what we're working on — reach out.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@monarktek.io"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-opacity"
              >
                <Mail className="h-4 w-4" /> info@monarktek.io
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Raleigh, NC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}