import { motion } from "framer-motion";

/**
 * Signature element for the hero: the real product photo, staged like
 * a display — framed, tinted to match the brand palette, floating gently
 * above a soft contact shadow, with a subtle interactive tilt on hover.
 */
export default function PerfumeBottle() {
  return (
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      whileHover={{ rotateY: 6, rotateX: -3, scale: 1.02 }}
      style={{ perspective: 1000 }}
      className="relative w-72 md:w-96"
    >
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute inset-0 blur-3xl bg-gold/25 rounded-full scale-90 -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl overflow-hidden border border-gold/25 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
      >
        <img
          src="/images/img11.jpg"
          alt="L'Écarlate signature perfume bottle"
          className="w-full h-auto object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(26,6,16,0.05) 0%, rgba(26,6,16,0.45) 100%)",
            mixBlendMode: "multiply",
          }}
        />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold/20 pointer-events-none" />
      </motion.div>

      <motion.div
        animate={{ scaleX: [1, 0.9, 1], opacity: [0.35, 0.2, 0.35] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/50 blur-xl rounded-full -z-10"
      />
    </motion.div>
  );
}