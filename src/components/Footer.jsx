const LINK_GROUPS = [
  { title: "Collection", links: ["Signature", "Best Sellers", "Gift Sets"] },
  { title: "Maison", links: ["Our Story", "Ingredients", "Journal"] },
  { title: "Support", links: ["Contact", "Shipping", "Returns"] },
];

const SOCIALS = ["IG", "TW", "PI"];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 pt-20 pb-10 px-6 md:px-10 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <a
              href="#top"
              className="font-display text-2xl tracking-[0.15em] text-ivory"
            >
              L'<span className="text-gold-gradient italic">Écarlate</span>
            </a>{" "}
            <p className="text-mist font-light text-sm mt-4 max-w-xs">
              Hand-blended fragrance from the ateliers of Grasse, since 1998.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-[10px] font-button text-gold hover:bg-gold hover:text-noir transition-colors duration-500 cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="font-button text-[11px] tracking-widest2 uppercase text-gold/80 mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-mist font-light text-sm hover:text-ivory transition-colors duration-300"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px bg-linear-to-r from-transparent via-gold/40 to-transparent mb-8" />
        <p className="text-center text-mist/70 text-xs font-light tracking-wide">
          © {new Date().getFullYear()} L'Écarlate. All rights reserved.
        </p>{" "}
      </div>
    </footer>
  );
}
