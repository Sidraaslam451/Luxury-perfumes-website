import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = ["Collection", "Maison", "Ingredients", "Journal"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-panel py-4" : "bg-transparent py-7"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-2xl tracking-[0.15em] text-ivory"
        >
          L'<span className="text-gold-gradient italic">Écarlate</span>
        </a>
        <ul className="hidden md:flex items-center gap-10 font-button text-[12px] tracking-widest2 uppercase text-mist">
          {LINKS.map((link) => (
            <li key={link} className="relative group cursor-pointer">
              <span className="transition-colors duration-300 group-hover:text-ivory">
                {link}
              </span>
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <button className="hidden md:inline-flex font-button text-[11px] tracking-widest2 uppercase px-6 py-3 border border-gold/50 text-gold hover:bg-gold hover:text-noir transition-colors duration-500">
          Enquire
        </button>

        <button className="md:hidden text-ivory text-2xl">☰</button>
      </nav>
    </motion.header>
  );
}
