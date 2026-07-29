import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const TESTIMONIALS = [
  { id: 1, name: "Isabelle R.", quote: "It doesn't smell like perfume. It smells like a memory I haven't had yet.", initial: "I" },
  { id: 2, name: "Marcus T.", quote: "The only bottle on my shelf people ask about before I've said a word.", initial: "M" },
  { id: 3, name: "Priya K.", quote: "Understated, unforgettable. Exactly what I wanted from a signature scent.", initial: "P" },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-6 md:px-10 bg-charcoal">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
          <span className="eyebrow">Words from the maison's circle</span>
          <h2 className="font-display font-light text-5xl mt-4 text-ivory">Testimonials</h2>
        </motion.div>

        <Swiper modules={[Autoplay, Navigation]} autoplay={{ delay: 4500, disableOnInteraction: false }} spaceBetween={24} slidesPerView={1}>
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="glass-panel rounded-3xl p-10 md:p-14 max-w-2xl mx-auto">
                <div className="flex justify-center gap-1 text-gold mb-6">{"★★★★★"}</div>
                <p className="font-display italic text-2xl md:text-3xl text-ivory leading-snug mb-8">"{t.quote}"</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center font-button text-gold text-sm">{t.initial}</div>
                  <span className="text-mist font-light">{t.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}