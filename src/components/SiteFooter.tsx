import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-6 w-6 rounded bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground font-display font-bold text-xs">
            M
          </span>
          <span className="font-display font-bold tracking-tight">MonarkTek</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="mailto:info@monarktek.io" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MonarkTek</p>
      </div>
    </footer>
  );
}