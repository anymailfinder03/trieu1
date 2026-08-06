import { ChevronDown } from 'lucide-react';

const HERO_IMG = 'https://ik.imagekit.io/zznoau6lx/Hair%20demo%201/2026-08-06_07-24-22_Lumina_1.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Hair model"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/40 via-transparent to-[#131313]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-5 md:px-16 max-w-[1200px] mx-auto">
        {/* Eyebrow */}
        <p
          className="animate-fade-in-up-1 text-white/80 text-[11px] md:text-[12px] uppercase tracking-[0.3em] mb-6"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          SS / 26 — COLLECTION 001
        </p>

        {/* Headline */}
        <h1
          className="animate-fade-in-up-2 text-white tracking-tight leading-[0.95] mb-6"
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(56px, 11vw, 160px)',
            lineHeight: 'clamp(56px, 11vw, 160px)',
            fontWeight: 300,
          }}
        >
          Triệu
          <br />
          Tóc Đẹp
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-in-up-3 text-white/70 max-w-xl text-[15px] md:text-[16px] leading-[1.6] mb-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A new standard in hair artistry. Precision cuts, dimensional color, and treatments tailored to the individual — crafted by stylists who treat every head of hair as a canvas.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up-4 flex flex-col sm:flex-row gap-4 items-start">
          <button
            className="text-[#2f3132] bg-white px-8 py-4 hover:bg-white/90 transition-colors duration-300 uppercase tracking-[0.15em] text-[12px] font-medium active:scale-95"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Book Appointment
          </button>
          <button
            className="text-white border border-white/30 px-8 py-4 hover:bg-white/10 transition-colors duration-300 uppercase tracking-[0.15em] text-[12px] font-medium active:scale-95"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            View Lookbook
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span
          className="text-white/40 text-[10px] uppercase tracking-[0.3em]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-white/20 overflow-hidden">
          <div className="w-full h-1/2 bg-white scroll-line" />
        </div>
      </div>

      {/* Side label */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <p
          className="text-white/30 text-[10px] uppercase tracking-[0.3em] rotate-90 origin-center whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          EST. 2018 — SAIGON
        </p>
      </div>

      <ChevronDown className="sr-only" />
    </section>
  );
}
