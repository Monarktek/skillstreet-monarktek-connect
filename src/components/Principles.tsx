import { motion } from "framer-motion";
import { Compass, Layers, Users } from "lucide-react";

const principles = [
  {
    icon: Compass,
    title: "Built for the future",
    body: "We invest in technology that stays relevant, solving real problems rather than reacting to hype.",
  },
  {
    icon: Users,
    title: "Human at the center",
    body: "Every product starts with the people who use it. Technology should expand what they can do.",
  },
  {
    icon: Layers,
    title: "Built to last",
    body: "We own and operate what we make, holding it to a standard of quality and care over time.",
  },
];

export default function Principles() {
  return (
    <section id="principles" className="py-28 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <span className="text-xs font-medium tracking-widest uppercase text-primary">
          How we work
        </span>
        <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl tracking-tight max-w-xl">
          Principles behind everything we build.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-7 hover:border-primary/40 transition-colors"
            >
              <div className="h-11 w-11 rounded-lg bg-primary/10 grid place-items-center text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg">{p.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}