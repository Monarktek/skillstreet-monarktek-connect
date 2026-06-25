import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroTech from "@/assets/hero-tech.jpg";

export default function CompanyHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      <img
        src={heroTech}
        alt="Abstract technology network of lines and nodes"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18] pointer-events-none [mask-image:linear-gradient(to_right,black,transparent)]"
      />
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
            We build technology that{" "}
            <span className="text-gradient">works for people</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            MonarkTek designs and builds products that help people live, connect,
            and get things done. Practical technology, made to last.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-opacity"
            >
              Our products <ArrowRight className="h-4 w-4" />
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