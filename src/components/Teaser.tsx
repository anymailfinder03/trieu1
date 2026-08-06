import { ArrowUpRight } from 'lucide-react';

const HERO_IMG = 'https://ik.imagekit.io/zznoau6lx/Hair%20demo%201/2026-08-06_07-24-22_Lumina_1.jpg';

export default function Teaser() {
  return (
    <section className="bg-[#131313] py-24 md:py-40 px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-white/30" />
          <p
            className="text-white/60 text-[11px] uppercase tracking-[0.3em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            01 — The Craft
          </p>
        </div>

        {/* Big statement */}
        <h2
          className="text-white/90 tracking-tight mb-20 max-w-4xl"
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(36px, 6vw, 88px)',
            lineHeight: 1.02,
            fontWeight: 300,
          }}
        >
          Hair is the most personal
          <br />
          <span className="text-white/40 italic">expression</span> of self.
        </h2>

        {/* Two-column body */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
          <div>
            <p
              className="text-white/70 text-[16px] leading-[1.7] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our studio blends technical mastery with an editorial eye. Every appointment begins with a consultation — we study your hair's natural movement, density, and tone before a single cut is made.
            </p>
            <p
              className="text-white/50 text-[15px] leading-[1.7]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The result is a style that doesn't just look right the day you leave — it grows out gracefully, holds its shape, and becomes more yours with every wash.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { k: '01', t: 'Consultation', d: 'A conversation about your hair history, lifestyle, and the shape you want to live in.' },
              { k: '02', t: 'Craft', d: "Precision cutting and color mixing tailored to your hair's structure and skin tone." },
              { k: '03', t: 'Care', d: 'A home-care ritual and follow-up schedule so the style keeps working between visits.' },
            ].map((s) => (
              <div
                key={s.k}
                className="border-t border-white/10 pt-5 group cursor-default"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span
                    className="text-white/30 text-[11px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s.k}
                  </span>
                  <h3
                    className="text-white text-[18px] md:text-[20px] group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
                  >
                    {s.t}
                  </h3>
                </div>
                <p
                  className="text-white/50 text-[14px] leading-[1.6] pl-8"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image block */}
        <div className="relative group cursor-pointer overflow-hidden">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={HERO_IMG}
              alt="Studio work"
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex items-end justify-between">
            <div>
              <p
                className="text-white/50 text-[11px] uppercase tracking-[0.3em] mb-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Lookbook — Vol. 1
              </p>
              <h3
                className="text-white text-[28px] md:text-[40px] tracking-tight"
                style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
              >
                The Soft Mullet
              </h3>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#131313] transition-all duration-300">
              <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-24">
          {[
            { n: '7+', l: 'Years in practice' },
            { n: '12K', l: 'Cuts delivered' },
            { n: '4', l: 'Master stylists' },
            { n: '98%', l: 'Return rate' },
          ].map((s) => (
            <div key={s.l} className="border-t border-white/10 pt-5">
              <p
                className="text-white text-[40px] md:text-[56px] tracking-tight mb-2"
                style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
              >
                {s.n}
              </p>
              <p
                className="text-white/40 text-[11px] uppercase tracking-[0.2em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
