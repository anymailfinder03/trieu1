import { useRef, useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Teaser from '@/components/Teaser';
import IntroOverlay from '@/components/IntroOverlay';
import gsap from 'gsap';

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [introDone, setIntroDone] = useState(false);

  // Reveal hero content after intro overlay disappears
  useEffect(() => {
    if (!introDone) return;

    const content = heroRef.current?.querySelectorAll('#hero-content > .hero-content-item');
    const scroll = heroRef.current?.querySelector('#hero-scroll');

    if (!content || content.length === 0) return;

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
  }, [introDone]);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e2e2e2]">
      <Nav />
      <main>
        <Hero ref={heroRef} />
        <Teaser />
      </main>

      {!introDone && <IntroOverlay onComplete={() => setIntroDone(true)} />}
    </div>
  );
}

export default App;
