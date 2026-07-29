import { motion } from "framer-motion";

const INGREDIENTS = [
  { name: "Bulgarian Rose", desc: "Hand-picked at dawn" },
  { name: "Madagascar Vanilla", desc: "Cured for 9 months" },
  { name: "Omani Frankincense", desc: "Sun-dried resin" },
  { name: "Mysore Sandalwood", desc: "Aged 15 years" },
];

function IngredientCard({ item, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: index * 0.12 }} whileHover={{ y: -6 }} className="flex flex-col items-center text-center">
      <div className="w-28 h-28 rounded-full glass-panel flex items-center justify-center mb-6 relative">
        <div className="w-10 h-10 rounded-full border border-gold/60" />
        <div className="absolute inset-0 rounded-full border border-gold/10" />
      </div>
      <h3 className="font-display text-xl text-ivory mb-1">{item.name}</h3>
      <p className="text-mist text-sm font-light">{item.desc}</p>
    </motion.div>
  );
}

export default function Ingredients() {
  return (
    <section className="relative py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <span className="eyebrow">Provenance</span>
        <h2 className="font-display font-light text-5xl mt-4 text-ivory mb-20">
          Rare <span className="italic text-gold-gradient">ingredients</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {INGREDIENTS.map((item, i) => (
            <IngredientCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}