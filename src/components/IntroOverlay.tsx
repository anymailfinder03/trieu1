import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface IntroOverlayProps {
  onComplete: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (removed) return;

    const ctx = gsap.context(() => {
      // Initial states — set before paint to avoid flash
      gsap.set(overlayRef.current, { opacity: 1 });
      gsap.set(frameRef.current, {
        opacity: 0,
        scale: 0.92,
        width: '20vw',
        height: '25vw',
        maxWidth: 380,
      });

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        onComplete: () => {
          setRemoved(true);
          onComplete();
        },
      });

      tl
        // ── Phase 1: Frame Reveal ──
        .to(frameRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
        }, 'frameReveal')

        // ── Phase 2: Frame Expansion — the window grows to reveal the Hero underneath ──
        .to(frameRef.current, {
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          duration: 1.6,
          ease: 'power3.inOut',
        }, 'frameExpand')

        // ── Phase 3: Overlay fades out — champagne disappears, only Hero remains ──
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, 'overlayOut');

      // Labels
      tl.addLabel('frameReveal', 0);
      tl.addLabel('frameExpand', 0.9);
      tl.addLabel('overlayOut', 2.4);
    }, overlayRef);

    return () => ctx.revert();
  }, [removed, onComplete]);

  if (removed) return null;

  return (
    <div
      ref={overlayRef}
      className="intro-overlay fixed inset-0 z-[80] overflow-hidden"
      style={{ backgroundColor: '#e8dcc8' }}
    >
      {/* The Frame — a transparent window. Its box-shadow casts the champagne
          color outward in every direction, hiding everything outside the window.
          As the frame grows, the window reveals the real Hero underneath. */}
      <div
        ref={frameRef}
        className="intro-frame absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        style={{
          width: '20vw',
          maxWidth: 380,
          aspectRatio: '4 / 5',
          backgroundColor: 'transparent',
          boxShadow: '0 0 0 100vmax #e8dcc8',
        }}
      />
    </div>
  );
}
