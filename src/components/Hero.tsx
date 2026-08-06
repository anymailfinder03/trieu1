import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

const HERO_IMG = 'https://ik.imagekit.io/zznoau6lx/Hair%20demo%201/2026-08-05_23-53-09_Lumina_1.jpg';

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      });

      const smallClip = 'inset(42% 42% 42% 42%)';
      const fullClip = 'inset(0% 0% 0% 0%)';

      gsap.set(overlayRef.current, { opacity: 1, backgroundColor: '#e8dcc8' });
      gsap.set(titleRef.current, { opacity: 0, y: 30, scale: 0.96 });
      gsap.set(imageContainerRef.current, { opacity: 0, clipPath: smallClip, scale: 1 });
      gsap.set(imageInnerRef.current, { scale: 1.15 });
      gsap.set(contentRef.current?.children ?? [], { opacity: 0, y: 24 });
      gsap.set(scrollRef.current, { opacity: 0 });

      tl
        // Phase 1 — Title reveal
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power4.out',
        }, 'titleReveal')
        // Phase 2 — Small image window appears
        .to(imageContainerRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        }, 'imageReveal')
        .to(imageContainerRef.current, {
          clipPath: smallClip,
          duration: 0.3,
        }, 'imageReveal')
        // Phase 3 — Expand to fullscreen (container clip-path + independent image scale)
        .to(imageContainerRef.current, {
          clipPath: fullClip,
          scale: 1,
          duration: 1.4,
          ease: 'power3.inOut',
        }, 'expand')
        .to(imageInnerRef.current, {
          scale: 1,
          duration: 1.4,
          ease: 'power3.inOut',
        }, 'expand')
        // Phase 4 — Title fades but stays partially visible
        .to(titleRef.current, {
          opacity: 0.35,
          duration: 1.0,
          ease: 'power2.out',
        }, 'expand')
        // Overlay fades away as image fills screen
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, 'expand+=0.3')
        // Phase 5 — Hero content fades in with stagger
        .to(contentRef.current?.children ?? [], {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power4.out',
        }, 'contentIn')
        .to(scrollRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        }, 'contentIn+=0.3');

      tl.addLabel('titleReveal', 0);
      tl.addLabel('imageReveal', 0.9);
      tl.addLabel('expand', 1.5);
      tl.addLabel('contentIn', 2.7);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#1c1612]">
      {/* Phase 1 — Warm overlay with salon name */}
      <div
        ref={overlayRef}
        className="hero-intro-overlay absolute inset-0 z-30 flex items-center justify-center bg-[#e8dcc8]"
      >
        <div
          ref={titleRef}
          className="hero-intro-title text-center px-6"
        >
          <p
            className="text-[#7a6b5d] text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-6"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Salon Tóc Cao Cấp
          </p>
          <h1
            className="text-[#2a221c] tracking-tight"
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(48px, 9vw, 128px)',
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: '-0.01em',
            }}
          >
            Triệu Tóc Đẹp
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 h-px bg-[#c9a96e]" />
            <span
              className="text-[#c9a96e] text-[10px] uppercase tracking-[0.35em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Sài Gòn
            </span>
            <div className="w-12 h-px bg-[#c9a96e]" />
          </div>
        </div>
      </div>

      {/* Phase 2+3 — Image container (clip-path layer) */}
      <div
        ref={imageContainerRef}
        className="hero-image-container absolute inset-0 z-10 overflow-hidden"
        style={{ clipPath: 'inset(42% 42% 42% 42%)' }}
      >
        <img
          ref={imageInnerRef}
          src={HERO_IMG}
          alt="Mẫu tóc Triệu Tóc Đẹp"
          className="hero-image-inner w-full h-full object-cover object-center"
          style={{ transform: 'scale(1.15)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1612]/30 via-transparent to-[#1c1612]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1612]/50 via-transparent to-transparent" />
      </div>

      {/* Phase 5 — Hero content */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20 h-full flex flex-col justify-end pb-20 px-5 md:px-16 max-w-[1200px] mx-auto pointer-events-none"
      >
        <p
          className="hero-content-item text-white/80 text-[11px] md:text-[12px] uppercase tracking-[0.3em] mb-6"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          SS / 26 — Bộ Sưu Tập 001
        </p>

        <h2
          className="hero-content-item text-white tracking-tight leading-[0.95] mb-6"
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(52px, 10vw, 140px)',
            lineHeight: 'clamp(52px, 10vw, 140px)',
            fontWeight: 300,
          }}
        >
          Tôn Vinh
          <br />
          Vẻ Đẹp Riêng
        </h2>

        <p
          className="hero-content-item text-white/70 max-w-xl text-[15px] md:text-[16px] leading-[1.7] mb-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Tiêu chuẩn mới trong nghệ thuật tạo mẫu tóc. Cắt tỉa chính xác, màu tóc đa chiều, và các liệu trình chăm sóc được thiết kế riêng cho từng khách hàng — bởi những nhà tạo mẫu coi mỗi mái tóc như một tác phẩm.
        </p>

        <div className="hero-content-item flex flex-col sm:flex-row gap-4 items-start pointer-events-auto">
          <button
            className="text-[#1c1612] bg-white px-8 py-4 hover:bg-white/90 transition-colors duration-300 uppercase tracking-[0.15em] text-[12px] font-medium active:scale-95"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Đặt Lịch Hẹn
          </button>
          <button
            className="text-white border border-white/30 px-8 py-4 hover:bg-white/10 transition-colors duration-300 uppercase tracking-[0.15em] text-[12px] font-medium active:scale-95"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Xem Lookbook
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
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

      <ChevronDown className="sr-only" />
    </section>
  );
}
