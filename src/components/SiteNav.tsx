import { Link } from "react-router-dom";

export default function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display font-bold tracking-tight text-lg">MonarkTek</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="#principles" className="hover:text-foreground transition-colors">Principles</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-md border border-border hover:border-primary/60 hover:text-primary transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}