import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative mt-6 h-[82vh] md:h-[88vh]">
      {/* 3D scene background */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradients for contrast + legibility */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl">
          {/* Top soft wash to calm bright highlights */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/70 via-white/20 to-transparent dark:from-slate-950/70 dark:via-slate-950/20" />
          {/* Bottom emphasis for text legibility */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white/85 via-white/40 to-transparent dark:from-slate-950/85 dark:via-slate-950/40" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full px-4 pb-10 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl/tight font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              I build sleek, animated websites that convert
            </h1>
            <p className="mt-3 md:mt-4 text-slate-700 dark:text-slate-300 max-w-2xl drop-shadow-sm">
              Designer & Frontend Developer focused on fast performance, accessibility, and motion. Based in Pakistan, working worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 active:scale-[0.98] transition"
              >
                Start a project
              </a>
              <a
                href="/portfolio"
                className="px-5 py-2.5 rounded-full backdrop-blur bg-white/70 text-slate-900 border border-white/60 hover:bg-white/90 dark:bg-slate-900/60 dark:text-slate-100 dark:border-slate-700 hover:dark:bg-slate-900/80 transition"
              >
                View work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
