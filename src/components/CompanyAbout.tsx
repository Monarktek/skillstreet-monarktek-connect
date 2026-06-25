import { motion } from "framer-motion";

export default function CompanyAbout() {
  return (
    <section id="about" className="py-28 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl sm:text-4xl tracking-tight leading-tight"
        >
          Technology that earns its place.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            MonarkTek is a product company focused on technology that improves
            everyday life. We don't chase trends. We build tools meant to last and
            to serve the people who use them.
          </p>
          <p>
            Our work spans the products we own and operate, each created with the same
            belief: technology should expand what people can do, not get in the way. Today
            that work lives in <span className="text-foreground font-medium">MilyMe</span>, with
            more on the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}