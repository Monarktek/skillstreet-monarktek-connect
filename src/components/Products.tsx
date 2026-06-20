import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import milymeLogo from "@/assets/milyme-logo.png";

export default function Products() {
  return (
    <section id="products" className="py-28 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              What we build
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Our products
            </h2>
          </div>
        </div>

        <motion.a
          href="https://www.milyme.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <img src={milymeLogo} alt="MilyMe logo" className="h-9 w-auto" />
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-primary/40 text-primary">
                  Live · Early launch
                </span>
              </div>
              <h3 className="mt-6 font-display font-bold text-2xl sm:text-3xl tracking-tight">
                Neighbors helping neighbors, matched by AI.
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                MilyMe is a hyper-local platform that quietly routes your ask to the right
                neighbor — trusted people nearby who can actually help. No feeds, no bidding
                wars, just real community connection.
              </p>
              <span className="mt-7 inline-flex items-center gap-1.5 text-primary font-medium">
                Visit milyme.com
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
            <div className="relative min-h-[260px] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent grid place-items-center p-10">
              <div className="absolute inset-0 grid-texture opacity-30" />
              <img
                src={milymeLogo}
                alt="MilyMe"
                className="relative max-w-[220px] w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.a>

        <div className="mt-6 rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground">
          More products in development. <span className="text-foreground font-medium">Stay tuned.</span>
        </div>
      </div>
    </section>
  );
}