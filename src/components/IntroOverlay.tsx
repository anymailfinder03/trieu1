import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const HERO_IMG = 'https://ik.imagekit.io/zznoau6lx/Hair%20demo%201/2026-08-06_07-24-22_Lumina_1.jpg';

interface IntroOverlayProps {
  onComplete: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (removed) return;

    const ctx = gsap.context(() => {
      // Initial states — set before paint to avoid flash
      gsap.set(overlayRef.current, { opacity: 1 });
      gsap.set(titleRef.current, { opacity: 0, scale: 0.97 });
      gsap.set(frameRef.current, {
        opacity: 0,
        scale: 0.92,
        width: '20vw',
        height: '25vw',
        maxWidth: 380,
        borderRadius: 0,
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
        // ── Phase 1: Title Reveal — opacity + subtle scale only, no movement ──
        .to(titleRef.current, {
          opacity: 1,
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

        // ── Phase 3: Frame Expansion — width/height only, no border-radius change ──
        .to(frameRef.current, {
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
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
      className="intro-overlay fixed inset-0 z-[100] bg-[#e8dcc8]"
    >
      {/* Salon name — same position/size/padding as Hero heading so it never moves */}
      <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
        <div className="pb-20 pl-12 md:pl-20 lg:pl-28" style={{ maxWidth: '42%', minWidth: 320 }}>
          <h1
            ref={titleRef}
            className="intro-title text-[#2a221c] tracking-tight"
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
        </div>
      </div>

      {/* The Frame — sharp rectangle, no border-radius, expands to fullscreen */}
      <div
        ref={frameRef}
        className="intro-frame absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-20"
        style={{
          width: '20vw',
          maxWidth: 380,
          aspectRatio: '4 / 5',
          borderRadius: 0,
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
