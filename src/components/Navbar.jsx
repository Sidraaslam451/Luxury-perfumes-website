import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = ["Collection", "Maison", "Ingredients", "Journal"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
        {/* Logo */}
        <a
          href="#top"
          className="font-display text-2xl tracking-[0.15em] text-ivory"
        >
          L'<span className="text-gold-gradient italic">Écarlate</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 font-button text-[12px] tracking-widest2 uppercase text-mist">
          {LINKS.map((link) => (
            <li key={link} className="relative group cursor-pointer">
              <a
                href="#"
                className="transition-colors duration-300 group-hover:text-ivory"
              >
                {link}
              </a>

              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:inline-flex font-button text-[11px] tracking-widest2 uppercase px-6 py-3 border border-gold/50 text-gold hover:bg-gold hover:text-noir transition-colors duration-500">
          Enquire
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden relative z-60 w-8 h-6 flex flex-col justify-between"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 10.5 } : { rotate: 0, y: 0 }}
            className="block h-px w-full bg-ivory origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-full bg-ivory"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -10.5 } : { rotate: 0, y: 0 }}
            className="block h-px w-full bg-ivory origin-center"
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-noir/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[78%] max-w-sm bg-charcoal border-l border-gold/15 z-50 md:hidden flex flex-col justify-center px-10"
            >
              <ul className="flex flex-col gap-8 font-button text-lg tracking-widest2 uppercase text-mist">
                {LINKS.map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.5,
                    }}
                  >
                    <a
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-ivory transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={() => setMenuOpen(false)}
                className="mt-12 font-button text-[11px] tracking-widest2 uppercase px-6 py-4 border border-gold/50 text-gold hover:bg-gold hover:text-noir transition-colors duration-500 self-start"
              >
                Enquire
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}