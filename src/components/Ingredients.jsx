// import { motion } from "framer-motion";

// const INGREDIENTS = [
//   { name: "Bulgarian Rose", desc: "Hand-picked at dawn" },
//   { name: "Madagascar Vanilla", desc: "Cured for 9 months" },
//   { name: "Omani Frankincense", desc: "Sun-dried resin" },
//   { name: "Mysore Sandalwood", desc: "Aged 15 years" },
// ];

// function IngredientCard({ item, index }) {
//   return (
//     <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: index * 0.12 }} whileHover={{ y: -6 }} className="flex flex-col items-center text-center">
//       <div className="w-28 h-28 rounded-full glass-panel flex items-center justify-center mb-6 relative">
//         <div className="w-10 h-10 rounded-full border border-gold/60" />
//         <div className="absolute inset-0 rounded-full border border-gold/10" />
//       </div>
//       <h3 className="font-display text-xl text-ivory mb-1">{item.name}</h3>
//       <p className="text-mist text-sm font-light">{item.desc}</p>
//     </motion.div>
//   );
// }

// export default function Ingredients() {
//   return (
//     <section className="relative py-32 px-6 md:px-10">
//       <div className="max-w-6xl mx-auto text-center">
//         <span className="eyebrow">Provenance</span>
//         <h2 className="font-display font-light text-5xl mt-4 text-ivory mb-20">
//           Rare <span className="italic text-gold-gradient">ingredients</span>
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
//           {INGREDIENTS.map((item, i) => (
//             <IngredientCard key={item.name} item={item} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

const INGREDIENTS = [
  { name: "Bulgarian Rose", desc: "Hand-picked at dawn", image: "/images/ingredient-rose.jpg" },
  { name: "Madagascar Vanilla", desc: "Cured for 9 months", image: "/images/ingredient-vanilla.jpg" },
  { name: "Omani Frankincense", desc: "Sun-dried resin", image: "/images/ingredient-frankincense.jpg" },
  { name: "Mysore Sandalwood", desc: "Aged 15 years", image: "/images/ingredient-sandalwood.jpg" },
];

function IngredientCard({ item, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: index * 0.12 }} whileHover={{ y: -6 }} className="flex flex-col items-center text-center">
      <div className="w-28 h-28 rounded-full relative mb-6">
        <div className="absolute inset-0 blur-2xl bg-gold/20 rounded-full scale-90 -z-10" />

        <div className="w-full h-full rounded-full overflow-hidden border border-gold/30 shadow-[0_10px_25px_-8px_rgba(0,0,0,0.6)]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(160deg, rgba(26,6,16,0.05) 0%, rgba(26,6,16,0.4) 100%)",
              mixBlendMode: "multiply",
            }}
          />
        </div>

        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-gold/25 pointer-events-none" />
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