import { motion } from "framer-motion";
import * as ReactCountUp from "react-countup";

// Vite's dependency pre-bundler sometimes fails to unwrap this package's
// CJS default export correctly, handing us the whole module object
// instead of the component. Normalize it here so it works either way.
const CountUp = ReactCountUp.default?.default || ReactCountUp.default || ReactCountUp;

const STATS = [
  { value: 27, suffix: "+", label: "Years of craft" },
  { value: 48, suffix: "", label: "Rare ingredients sourced" },
  { value: 120, suffix: "K", label: "Bottles hand-poured" },
  { value: 98, suffix: "%", label: "Would gift again" },
];

export default function Statistics() {
  return (
    <section className="relative py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {STATS.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7, delay: i * 0.1 }}>
            <div className="font-display text-5xl md:text-6xl text-gold-gradient font-light">
              <CountUp end={s.value} duration={2.2} enableScrollSpy scrollSpyOnce />
              {s.suffix}
            </div>
            <p className="text-mist font-light mt-3 text-sm tracking-wide uppercase font-button">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}