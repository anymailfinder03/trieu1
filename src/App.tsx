import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Teaser from '@/components/Teaser';

function App() {
  return (
    <div className="min-h-screen bg-[#131313] text-[#e2e2e2]">
      <Nav />
      <main>
        <Hero />
        <Teaser />
      </main>
    </div>
  );
}

export default App;
