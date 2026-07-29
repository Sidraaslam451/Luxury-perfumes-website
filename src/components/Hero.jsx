import { motion } from "framer-motion";
import PerfumeBottle from "./PerfumeBottle";
import ParticleField from "./ParticleField";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(217,180,143,0.16) 0%, rgba(46,15,28,0.6) 45%, #1A0610 75%)",
        }}
      />
      <ParticleField />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center w-full pt-32 md:pt-0">
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="eyebrow mb-6"
          >
            The 2026 Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-4xl md:text-6xl leading-[1.15] text-ivory"
          >
            A scent
            <br />
            <span className="italic text-gold-gradient">worn by</span>
            <br />
            silence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-8 max-w-md text-mist font-light leading-relaxed"
          >
            Hand-blended in small batches from rare absolutes, each bottle of
            L'Écarlate is less a fragrance than a memory waiting to be worn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <button className="font-button text-[11px] tracking-widest2 uppercase px-8 py-4 bg-gold text-noir hover:bg-champagne transition-colors duration-500">
              Explore Collection
            </button>
            <button className="font-button text-[11px] tracking-widest2 uppercase px-2 py-4 text-ivory border-b border-ivory/30 hover:border-gold hover:text-gold transition-colors duration-500">
              Watch Brand Story
            </button>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <PerfumeBottle />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="eyebrow text-mist">Scroll</span>
        <motion.span
          animate={{ height: [8, 28, 8] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-px bg-gold/60"
        />
      </motion.div>
    </section>
  );
}
