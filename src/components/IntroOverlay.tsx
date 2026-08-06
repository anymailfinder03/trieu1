import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const HERO_IMG = 'https://ik.imagekit.io/zznoau6lx/Hair%20demo%201/2026-08-05_23-53-09_Lumina_1.jpg';

interface IntroOverlayProps {
  onComplete: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (removed) return;

    const ctx = gsap.context(() => {
      // Initial states — set before paint to avoid flash
      gsap.set(overlayRef.current, { opacity: 1 });
      gsap.set(titleRef.current, { opacity: 0, y: 30, scale: 0.96 });
      gsap.set(frameRef.current, {
        opacity: 0,
        scale: 0.92,
        width: '20vw',
        height: '25vw',
        maxWidth: 380,
        borderRadius: 20,
      });
      gsap.set(imageRef.current, { scale: 1.15 });

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        onComplete: () => {
          setRemoved(true);
          onComplete();
        },
      });

      tl
        // ── Phase 1: Title Reveal ──
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
        }, 'titleReveal')

        // ── Phase 2: Frame Reveal ──
        .to(frameRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
        }, 'frameReveal')

        // ── Phase 3: Frame Expansion ──
        // Container grows to fullscreen, border-radius → 0
        .to(frameRef.current, {
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          borderRadius: 0,
          duration: 1.6,
          ease: 'power3.inOut',
        }, 'frameExpand')
        // Image scales independently for depth
        .to(imageRef.current, {
          scale: 1,
          duration: 1.6,
          ease: 'power3.inOut',
        }, 'frameExpand')

        // ── Phase 4: Brief pause + title softens ──
        .to(titleRef.current, {
          opacity: 0.3,
          duration: 0.9,
          ease: 'power2.out',
        }, 'titleFade')

        // ── Phase 5: Overlay fades out ──
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, 'overlayOut');

      // Labels
      tl.addLabel('titleReveal', 0);
      tl.addLabel('frameReveal', 1.0);
      tl.addLabel('frameExpand', 1.9);
      tl.addLabel('titleFade', 2.6);
      tl.addLabel('overlayOut', 3.4);
    }, overlayRef);

    return () => ctx.revert();
  }, [removed, onComplete]);

  if (removed) return null;

  return (
    <div
      ref={overlayRef}
      className="intro-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[#e8dcc8]"
    >
      {/* Salon name — sits above the frame */}
      <div
        ref={titleRef}
        className="intro-title absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none"
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
          Triệu Tóc Đép
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

      {/* The Frame — real DOM rectangle that expands to fullscreen */}
      <div
        ref={frameRef}
        className="intro-frame absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-20"
        style={{
          width: '20vw',
          maxWidth: 380,
          aspectRatio: '4 / 5',
          borderRadius: 20,
        }}
      >
        <img
          ref={imageRef}
          src={HERO_IMG}
          alt="Mẫu tóc Triệu Tóc Đẹp"
          className="w-full h-full object-cover object-center"
          style={{ transform: 'scale(1.15)' }}
        />
      </div>
    </div>
  );
}
