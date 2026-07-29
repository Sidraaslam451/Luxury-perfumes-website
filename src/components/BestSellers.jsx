import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const BEST_SELLERS = [
  { id: 1, name: "Mushk", price: "$285", image: "/images/img2.jpg" },
  { id: 2, name: "Nuit Ambree", price: "$310", image: "/images/img5.jpg" },
  { id: 3, name: "Aube Blanche", price: "$265", image: "/images/img3.jpg" },
  { id: 4, name: "Nuit Ambree", price: "$295", image: "/images/img4.jpg" },
  { id: 5, name: "Soleil Gris", price: "$275", image: "/images/img6.jpg" },
];

export default function BestSellers() {
  return (
    <section className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex items-end justify-between mb-16">
          <div>
            <span className="eyebrow">Most Loved</span>
            <h2 className="font-display font-light text-5xl mt-4 text-ivory">Best sellers</h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="best-sellers-prev w-11 h-11 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-noir transition-colors duration-500">←</button>
            <button className="best-sellers-next w-11 h-11 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-noir transition-colors duration-500">→</button>
          </div>
        </motion.div>

        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".best-sellers-prev", nextEl: ".best-sellers-next" }}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.4 } }}
        >
          {BEST_SELLERS.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="glass-panel rounded-3xl p-6 h-72 flex flex-col justify-between">
                <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 blur-2xl bg-gold/15 rounded-full scale-75 -z-10" />
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-auto object-contain rounded-xl shadow-[0_15px_30px_-8px_rgba(0,0,0,0.6)]"
                    style={{
                      maskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
                    }}
                  />
                </div>
                <div className="flex items-center justify-between border-t border-gold/15 pt-4">
                  <span className="font-display text-lg text-ivory">{p.name}</span>
                  <span className="font-button text-gold text-sm">{p.price}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}