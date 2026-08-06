import { useRef, useLayoutEffect, useEffect, useState, useCallback } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Teaser from '@/components/Teaser';
import IntroOverlay from '@/components/IntroOverlay';
import PersistentTitle from '@/components/PersistentTitle';
import gsap from 'gsap';

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [introDone, setIntroDone] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroDone(true);
  }, []);

  // Frame 1 — hide the hero supporting content BEFORE first paint so the
  // user only sees the title and the champagne mask. useLayoutEffect runs
  // before the browser paints, so there is no flash of the description.
  useLayoutEffect(() => {
    if (introDone) return;

    const content = heroRef.current?.querySelectorAll('#hero-content .hero-content-item');
    const scroll = heroRef.current?.querySelector('#hero-scroll');

    if (content && content.length > 0) {
      gsap.set(content, { opacity: 0, y: 24 });
    }
    if (scroll) {
      gsap.set(scroll, { opacity: 0 });
    }
  }, [introDone]);

  // Frame 5 — only after the overlay has fully disappeared, animate in the
  // description, CTA, and scroll indicator. The title does nothing.
  useEffect(() => {
    if (!introDone) return;

    const content = heroRef.current?.querySelectorAll('#hero-content .hero-content-item');
    const scroll = heroRef.current?.querySelector('#hero-scroll');

    if (!content || content.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power4.out',
        }
      );

      if (scroll) {
        gsap.fromTo(
          scroll,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, delay: 0.4, ease: 'power2.out' }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [introDone]);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e2e2e2]">
      {/* Nav — top layer */}
      <Nav />

      {/* Hero — always mounted from frame one. Lives below the overlay so
          the mask reveals it. */}
      <main>
        <Hero ref={heroRef} />
        <Teaser />
      </main>

      {/* PersistentTitle — independent fixed layer above the overlay.
          Never animates, never changes z-index. Visible from frame one. */}
      <PersistentTitle />

      {/* IntroOverlay — the mask. Sits above the Hero (z-80), below the
          title (z-90) and nav (z-50). Reveals the Hero through a window. */}
      {!introDone && <IntroOverlay onComplete={handleIntroComplete} />}
    </div>
  );
}

export default App;
