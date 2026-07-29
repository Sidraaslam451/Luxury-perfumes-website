import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: 1,
    name: "Ombre Noire",
    note: "Oud · Amber · Smoke",
    price: "$285",
    image: "public/images/img7.jpg",
  },
  {
    id: 2,
    name: "Velours d'Or",
    note: "Vanilla · Sandalwood · Musk",
    price: "$310",
    image: "public/images/img10.jpg",
  },
  {
    id: 3,
    name: "Aube Blanche",
    note: "Iris · Jasmine · Cedar",
    price: "$265",
    image: "public/images/img3.jpg",
  },
];

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8 }}
      className="glass-panel rounded-3xl p-8 flex flex-col items-center text-center group"
    >
      <span className="eyebrow mb-6 self-start">Signature</span>
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden mb-8">
        {/* Soft ambient glow behind the photo */}
        <div className="absolute inset-0 blur-3xl bg-gold/15 rounded-full scale-75 -z-10" />
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-contain rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
        />
      </div>
      <h3 className="font-display text-3xl text-ivory mb-2">{product.name}</h3>
      <p className="text-mist text-sm font-light mb-6">{product.note}</p>
      <div className="w-full flex items-center justify-between border-t border-gold/15 pt-6 mt-auto">
        <span className="font-button text-gold text-sm tracking-wide">
          {product.price}
        </span>
        <button className="font-button text-[11px] tracking-widest2 uppercase text-ivory/70 group-hover:text-gold transition-colors duration-500">
          Discover →
        </button>
      </div>
    </motion.div>
  );
}

export default function FeaturedCollection() {
  return (
    <section className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="eyebrow">Featured Collection</span>
          <h2 className="font-display font-light text-5xl md:text-6xl mt-4 text-ivory">
            Three scents,{" "}
            <span className="italic text-gold-gradient">one atelier</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
