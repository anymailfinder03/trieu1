import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Bộ Sưu Tập', 'Dịch Vụ', 'Lookbook', 'Về Chúng Tôi', 'Liên Hệ'];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-5 md:px-16 py-6 bg-[#1c1612]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300"
      >
        {/* Logo */}
        <div>
          <a
            href="#"
            className="text-white tracking-tighter hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Newsreader', serif", fontSize: '20px', lineHeight: '28px', fontWeight: 400 }}
          >
            TRIỆU TÓC ĐẸP
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#e2e2e2]/70 hover:text-[#e2e2e2] hover:bg-white/5 transition-all duration-300 py-2 px-3 rounded text-[12px] tracking-[0.05em] font-medium uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="text-[#1c1612] bg-white px-6 py-3 hover:bg-white/90 transition-colors duration-300 uppercase tracking-[0.15em] text-[12px] font-medium active:scale-95">
            ĐẶT LỊCH
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Mở menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#1c1612]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-24">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white transition-colors text-[12px] uppercase tracking-[0.2em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {link}
            </a>
          ))}
          <button
            className="mt-4 text-[#1c1612] bg-white px-8 py-4 uppercase tracking-[0.15em] text-[12px] font-medium"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ĐẶT LỊCH
          </button>
        </div>
      )}
    </>
  );
}
