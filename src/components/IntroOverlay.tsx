import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';

interface IntroOverlayProps {
  onComplete: () => void;
}

const CHAMPAGNE = '#e8dcc8';

/**
 * A cinematic mask — not an animation layer.
 *
 * The Hero is always mounted underneath. This overlay hides it with four
 * champagne panels arranged around a central rectangular "window".
 * As the window expands, the panels shrink and reveal the real Hero below.
 *
 *   ┌──────────────────────┐
 *   │         TOP           │
 *   ├──────┐        ┌──────┤
 *   │ LEFT │ WINDOW │ RIGHT│
 *   ├──────┘        └──────┤
 *   │        BOTTOM        │
 *   └──────────────────────┘
 *
 * No image lives here. No duplicate of the Hero. The window is just a gap.
 */
export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [removed, setRemoved] = useState(false);

  const handleComplete = useCallback(() => {
    setRemoved(true);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (removed) return;

    const ctx = gsap.context(() => {
      // Frame 1 — panels fully cover the screen, window is a thin slit.
      gsap.set(overlayRef.current, { opacity: 1 });
      gsap.set(topRef.current, { height: '49vh' });
      gsap.set(bottomRef.current, { height: '49vh' });
      gsap.set(leftRef.current, { width: '46vw' });
      gsap.set(rightRef.current, { width: '46vw' });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete: handleComplete,
      });

      // Frame 2 — a small portrait rectangle appears in the center.
      tl.to(
        [topRef.current, bottomRef.current],
        { height: '40vh', duration: 0.7, ease: 'power2.out' },
        0
      ).to(
        [leftRef.current, rightRef.current],
        { width: '35vw', duration: 0.7, ease: 'power2.out' },
        0
      );

      // Frame 3 — the rectangle expands to fullscreen.
      tl.to(topRef.current, { height: '0vh', duration: 1.4 }, 0.7)
        .to(bottomRef.current, { height: '0vh', duration: 1.4 }, 0.7)
        .to(leftRef.current, { width: '0vw', duration: 1.4 }, 0.7)
        .to(rightRef.current, { width: '0vw', duration: 1.4 }, 0.7);

      // Frame 4 — overlay fades away once the Hero is fully revealed.
      tl.to(
        overlayRef.current,
        { opacity: 0, duration: 0.5, ease: 'power2.out' },
        '+=0.05'
      );
    }, overlayRef);

    return () => ctx.revert();
  }, [removed, handleComplete]);

  if (removed) return null;

  return (
    <div
      ref={overlayRef}
      className="intro-overlay fixed inset-0 z-[80] overflow-hidden"
    >
      {/* TOP — covers everything above the window */}
      <div
        ref={topRef}
        className="absolute left-0 top-0 w-full"
        style={{ backgroundColor: CHAMPAGNE }}
      />
      {/* BOTTOM — covers everything below the window */}
      <div
        ref={bottomRef}
        className="absolute left-0 bottom-0 w-full"
        style={{ backgroundColor: CHAMPAGNE }}
      />
      {/* LEFT — covers the left side of the window band */}
      <div
        ref={leftRef}
        className="absolute left-0"
        style={{
          top: '40vh',
          height: '20vh',
          backgroundColor: CHAMPAGNE,
        }}
      />
      {/* RIGHT — covers the right side of the window band */}
      <div
        ref={rightRef}
        className="absolute right-0"
        style={{
          top: '40vh',
          height: '20vh',
          backgroundColor: CHAMPAGNE,
        }}
      />
    </div>
  );
}
