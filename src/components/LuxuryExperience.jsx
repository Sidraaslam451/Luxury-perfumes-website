import { motion } from "framer-motion";
import PerfumeBottle from "./PerfumeBottle";

const FEATURES = [
  { label: "Hand-poured", desc: "Every bottle filled by a single perfumer" },
  { label: "60-day trial", desc: "Wear it before you commit" },
  { label: "Refillable", desc: "Return the bottle, keep the ritual" },
];

export default function LuxuryExperience() {
  return (
    <section className="relative py-32 px-6 md:px-10 bg-charcoal overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(217,180,143,0.12) 0%, transparent 55%)",
        }}
      />{" "}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <PerfumeBottle />
        </div>
        <div className="order-1 md:order-2">
          <span className="eyebrow">The Ritual</span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-ivory mt-4 mb-10 leading-tight">
            Not a purchase. <br />
            <span className="italic text-gold-gradient">An experience.</span>
          </h2>
          <div className="space-y-8">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex items-start gap-5"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-gold shrink-0" />
                <div>
                  <h4 className="font-button text-sm tracking-wide uppercase text-ivory">
                    {f.label}
                  </h4>
                  <p className="text-mist font-light mt-1">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
