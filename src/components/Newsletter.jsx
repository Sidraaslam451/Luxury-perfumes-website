import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

export default function Newsletter() {
  return (
    <section className="relative py-32 px-6 md:px-10 overflow-hidden">
      <ParticleField count={14} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto glass-panel rounded-3xl px-8 md:px-16 py-16 text-center relative"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(217,180,143,0.10), rgba(255,255,255,0.04))",
        }}
      >
        <span className="eyebrow">Stay in the circle</span>
        <h2 className="font-display font-light text-4xl md:text-5xl text-ivory mt-4 mb-4">
          The first to know,{" "}
          <span className="italic text-gold-gradient">always</span>
        </h2>
        <p className="text-mist font-light max-w-md mx-auto mb-10">
          New releases, limited drops, and invitations to the atelier —
          delivered rarely, and only when it matters.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-ivory/20 focus:border-gold outline-none px-5 py-4 text-ivory placeholder:text-mist/70 text-sm rounded-none transition-colors duration-500"
          />
          <button
            type="submit"
            className="font-button text-[11px] tracking-widest2 uppercase px-8 py-4 bg-gold text-noir hover:bg-champagne transition-colors duration-500"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}
