import { ArrowUpRight } from 'lucide-react';

const HERO_IMG = 'https://ik.imagekit.io/zznoau6lx/Hair%20demo%201/2026-08-05_23-53-09_Lumina_1.jpg';

export default function Teaser() {
  return (
    <section className="bg-[#131313] py-24 md:py-40 px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-white/30" />
          <p
            className="text-white/60 text-[11px] uppercase tracking-[0.3em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            01 — Nghệ Thuật Tạo Mẫu
          </p>
        </div>

        {/* Big statement */}
        <h2
          className="text-white/90 tracking-tight mb-20 max-w-4xl"
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(36px, 6vw, 88px)',
            lineHeight: 1.02,
            fontWeight: 300,
          }}
        >
          Tóc là biểu hiện
          <br />
          <span className="text-white/40 italic">cá nhân</span> tinh tế nhất.
        </h2>

        {/* Two-column body */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
          <div>
            <p
              className="text-white/70 text-[16px] leading-[1.7] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Studio của chúng tôi kết hợp kỹ thuật điêu luyện cùng góc nhìn tạp chí. Mỗi cuộc hẹn đều bắt đầu bằng một buổi tư vấn — chúng tôi nghiên cứu chuyển động tự nhiên, độ dày và tông màu tóc của bạn trước khi cắt một đường kéo.
            </p>
            <p
              className="text-white/50 text-[15px] leading-[1.7]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Kết quả là một kiểu tóc không chỉ đẹp ngay ngày bạn rời salon — mà còn mọc ra hài hòa, giữ được form, và ngày càng trở thành phiên bản của riêng bạn sau mỗi lần gội.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { k: '01', t: 'Tư Vấn', d: 'Một cuộc trò chuyện về lịch sử tóc, phong cách sống, và hình dáng bạn muốn sống cùng.' },
              { k: '02', t: 'Thực Hiện', d: 'Cắt tỉa chính xác và phối màu được điều chỉnh theo cấu trúc tóc và tông da của bạn.' },
              { k: '03', t: 'Chăm Sóc', d: 'Phác đồ chăm sóc tại nhà và lịch hẹn theo dõi để kiểu tóc luôn đẹp giữa các lần đến.' },
            ].map((s) => (
              <div
                key={s.k}
                className="border-t border-white/10 pt-5 group cursor-default"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span
                    className="text-white/30 text-[11px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s.k}
                  </span>
                  <h3
                    className="text-white text-[18px] md:text-[20px] group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
                  >
                    {s.t}
                  </h3>
                </div>
                <p
                  className="text-white/50 text-[14px] leading-[1.6] pl-8"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image block */}
        <div className="relative group cursor-pointer overflow-hidden">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={HERO_IMG}
              alt="Tác phẩm studio"
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex items-end justify-between">
            <div>
              <p
                className="text-white/50 text-[11px] uppercase tracking-[0.3em] mb-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Lookbook — Tập 1
              </p>
              <h3
                className="text-white text-[28px] md:text-[40px] tracking-tight"
                style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
              >
                Mái Layered Mềm Mại
              </h3>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#131313] transition-all duration-300">
              <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-24">
          {[
            { n: '7+', l: 'Năm kinh nghiệm' },
            { n: '12K', l: 'Kiểu tóc đã tạo' },
            { n: '4', l: 'Nhà tạo mẫu chính' },
            { n: '98%', l: 'Khách quay lại' },
          ].map((s) => (
            <div key={s.l} className="border-t border-white/10 pt-5">
              <p
                className="text-white text-[40px] md:text-[56px] tracking-tight mb-2"
                style={{ fontFamily: "'Newsreader', serif", fontWeight: 300 }}
              >
                {s.n}
              </p>
              <p
                className="text-white/40 text-[11px] uppercase tracking-[0.2em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
