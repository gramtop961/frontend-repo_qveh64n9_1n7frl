import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const quote = 'Pengetahuan tanpa etika hanyalah kebijaksanaan yang kehilangan arah.';
  const intro = 'Halo, saya Denny Alfak — seorang mahasiswa yang berpikir kritis, mencintai teknologi, dan percaya bahwa kejujuran adalah inti dari kemajuan.';

  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 via-white to-slate-100/60 rounded-3xl blur-2xl pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-xl" style={{height:'420px'}}>
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop&crop=faces"
              alt="Denny Alfak"
              className="w-24 h-24 rounded-full ring-4 ring-white shadow-lg object-cover"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">Denny Alfak — Portfolio & Refleksi Profesional</h1>
              <p className="text-slate-600 text-sm">Berpijak pada integritas, tumbuh lewat pengetahuan.</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed">{intro}</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sky-700 font-medium"
          >
            “{quote}”
          </motion.p>
        </div>
      </div>
    </section>
  );
}
