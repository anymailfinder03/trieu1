import { forwardRef } from 'react';

const HERO_IMG = 'https://ik.imagekit.io/zznoau6lx/Hair%20demo%201/2026-08-06_07-24-22_Lumina_1.jpg';

const Hero = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#1c1612]"
    >
      {/* Static background image — never animated */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Mẫu tóc Triệu Tóc Đẹp"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1612]/30 via-transparent to-[#1c1612]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1612]/60 via-[#1c1612]/10 to-transparent" />
      </div>

      {/* Hero content — editorial left block, revealed after intro */}
      <div
        id="hero-content"
        className="absolute inset-0 z-20 h-full flex flex-col justify-end pointer-events-none"
      >
        {/* Inner column: fixed left margin, fixed max-width so text wraps at ~40% screen */}
        <div className="pb-20 pl-12 md:pl-20 lg:pl-28" style={{ maxWidth: '42%', minWidth: 320 }}>
          <h2
            id="hero-heading"
            className="hero-content-item text-white tracking-tight mb-8"
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(48px, 9vw, 128px)',
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: '-0.01em',
            }}
          >
            Triệu Tóc Đẹp
          </h2>

          <p
            className="hero-content-item text-white/65 text-[14px] md:text-[15px] leading-[1.8] mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tiêu chuẩn mới trong nghệ thuật tạo mẫu tóc. Cắt tỉa chính xác, màu tóc đa chiều, và các liệu trình chăm sóc được thiết kế riêng cho từng khách hàng — bởi những nhà tạo mẫu coi mỗi mái tóc như một tác phẩm.
          </p>

          <div className="hero-content-item pointer-events-auto">
            <button
              className="text-[#1c1612] bg-white px-8 py-4 hover:bg-white/90 transition-colors duration-300 uppercase tracking-[0.15em] text-[12px] font-medium active:scale-95"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Đặt Lịch Hẹn
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        id="hero-scroll"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span
          className="text-white/40 text-[10px] uppercase tracking-[0.3em]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Cuộn Xuống
        </span>
        <div className="w-px h-12 bg-white/20 overflow-hidden">
          <div className="w-full h-1/2 bg-white scroll-line" />
        </div>
      </div>

      {/* Side label */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <p
          className="text-white/30 text-[10px] uppercase tracking-[0.3em] rotate-90 origin-center whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Thành Lập 2018 — Sài Gòn
        </p>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
