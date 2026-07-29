import { motion } from "framer-motion";

const TIMELINE = [
  { year: "1998", label: "Founded in Grasse" },
  { year: "2011", label: "First atelier boutique" },
  { year: "2026", label: "L'Écarlate collection" },
];

export default function BrandStory() {
  return (
    <section className="relative py-32 px-6 md:px-10 bg-charcoal">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-105 md:h-130 rounded-3xl overflow-hidden"
        >
          <img
            src="/images/img1.jpg"
            alt="L'Écarlate atelier — the perfumer's workshop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(46,15,28,0.15) 0%, rgba(26,6,16,0.55) 100%)",
            }}
          />
          <div className="absolute inset-0 border border-gold/15 rounded-3xl" />
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            The Maison
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display font-light text-4xl md:text-5xl text-ivory mt-4 leading-tight"
          >
            Three decades of patience, poured into every drop.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="text-mist font-light leading-relaxed mt-8 max-w-md"
          >
            L'Écarlate began in a single perfumer's workshop in Grasse,
            where raw absolutes are still weighed by hand. We have never
            scaled that discipline away — only the world around us changed.
          </motion.p>

          <div className="mt-12 space-y-6">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex items-center gap-6 border-l border-gold/25 pl-6"
              >
                <span className="font-display text-2xl text-gold">{t.year}</span>
                <span className="text-mist font-light">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}