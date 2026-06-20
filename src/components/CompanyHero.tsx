import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CompanyHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-texture opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="mt-6 font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
            Building technology for{" "}
            <span className="text-gradient">what's next</span> for humanity.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            MonarkTek is a technology company advancing how people live, connect, and grow.
            We design and build products that put human progress at the center.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-opacity"
            >
              See what we build <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:border-primary/60 transition-colors font-medium"
            >
              About MonarkTek
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}