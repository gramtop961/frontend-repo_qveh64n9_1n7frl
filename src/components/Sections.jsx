import { motion } from 'framer-motion';
import { BookOpen, Code2, PenLine, GraduationCap, Mail, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';

export function AboutSection() {
  const skills = ['Python', 'JavaScript', 'React', 'Tailwind', 'UI/UX', 'Analisis Data', 'Menulis Reflektif'];
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-semibold text-slate-900">About</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Nama lengkap: <span className="font-medium">Denny Alfak</span><br />
              Asal daerah: <span className="font-medium">Indonesia</span><br />
              Visi profesional: <span className="font-medium">Menghadirkan teknologi yang etis, inklusif, dan bermakna.</span>
            </p>
            <div className="mt-6 p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
              <div className="flex items-center gap-3 text-slate-800">
                <GraduationCap className="text-sky-600" size={20} />
                <span className="font-medium">Latar Pendidikan</span>
              </div>
              <ul className="mt-3 text-slate-600 text-sm list-disc list-inside space-y-1">
                <li>S1 — Teknologi Informasi</li>
                <li>Fokus pada Etika Teknologi dan Pengembangan Perangkat Lunak</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-5">
            {skills.map((s) => (
              <motion.div
                key={s}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm"
              >
                <p className="text-slate-800 font-medium">{s}</p>
                <p className="text-slate-500 text-sm mt-1">Pengalaman praktik dan studi kasus dunia nyata.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  const items = [
    {
      title: 'Etika Teknologi — Analisis Kasus',
      desc: 'Tulisan reflektif tentang tanggung jawab sosial pengembang.',
      icon: BookOpen,
      tag: 'Esai',
    },
    {
      title: 'Aplikasi To-Do React',
      desc: 'Menerapkan state management dan aksesibilitas.',
      icon: Code2,
      tag: 'Coding',
    },
    {
      title: 'Desain Dashboard Akademik',
      desc: 'Komponen UI dengan visual biru pastel yang tenang.',
      icon: PenLine,
      tag: 'Desain',
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-slate-900">Portfolio</h2>
          <a href="#contact" className="text-sky-700 text-sm hover:underline inline-flex items-center gap-1">
            Minta CV <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon, tag }) => (
            <motion.div
              key={title}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-xs px-2.5 py-1">{tag}</span>
                  <Icon className="text-sky-600" size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{desc}</p>
              </div>
              <div className="h-1 bg-gradient-to-r from-sky-300 via-sky-500 to-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogSection() {
  const posts = [
    {
      title: 'Belajar dengan Etika: Mengapa Kejujuran Itu Produktif',
      date: 'Feb 2025',
      excerpt: 'Refleksi tentang hubungan antara integritas akademik dan pertumbuhan jangka panjang.',
    },
    {
      title: 'Teknologi sebagai Alat, Bukan Tujuan',
      date: 'Jan 2025',
      excerpt: 'Mengamati bias teknologi dan pentingnya nilai kemanusiaan dalam desain.',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">Blog & Refleksi</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <motion.article
              key={p.title}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm"
            >
              <p className="text-xs text-slate-500">{p.date}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>
              <a href="#contact" className="mt-3 inline-flex items-center gap-1 text-sky-700 text-sm hover:underline">
                Diskusikan tulisan ini <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Kontak</h2>
            <p className="mt-3 text-slate-600">Terbuka untuk kolaborasi riset, proyek coding, dan penulisan reflektif.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <a href="mailto:denny.alfak@example.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-sky-700"><Mail size={18}/> denny.alfak@example.com</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-sky-700"><Linkedin size={18}/> LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-sky-700"><Github size={18}/> GitHub</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-sky-700"><Instagram size={18}/> Instagram</a>
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="p-6 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm space-y-4">
            <div>
              <label className="block text-sm text-slate-700">Nama</label>
              <input className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Masukkan nama" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Pesan</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Tulis pesan Anda" />
            </div>
            <button className="inline-flex items-center justify-center rounded-lg bg-sky-600 text-white px-4 py-2 text-sm shadow-sm hover:bg-sky-700 transition-colors">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
}
