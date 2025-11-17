import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const heading = 'Crafting fast, accessible websites with motion that converts';

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: 0.1 }
    }
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative pt-16 md:pt-24 pb-14 md:pb-20">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-8rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-500/25 to-cyan-400/25 blur-3xl dark:from-blue-500/20 dark:to-cyan-400/20" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-400/25 to-fuchsia-400/25 blur-3xl dark:from-indigo-500/20 dark:to-fuchsia-400/20" />
      </div>

      <div className="mx-auto max-w-7xl grid items-center md:grid-cols-2 gap-8 lg:gap-12 px-4">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur px-2.5 py-1.5 text-xs text-slate-600 dark:text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open for new projects Q1–Q2
          </div>

          <motion.h1
            className="mt-4 text-[clamp(28px,6vw,54px)] font-bold leading-tight tracking-tight"
            variants={container}
            initial="hidden"
            animate="visible"
            aria-label={heading}
          >
            {heading.split(' ').map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-top">
                <motion.span variants={child} className="inline-block mr-2">
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <p className="mt-3 text-[15px] md:text-base text-slate-700 dark:text-slate-300 max-w-xl">
            I blend design and frontend engineering to ship sleek, responsive experiences for startups and agencies worldwide.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 active:scale-[0.98] transition"
            >
              Start a project
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/70 dark:border-slate-700 px-5 py-2.5 backdrop-blur bg-white/70 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 hover:bg-white/90 dark:hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition"
            >
              View work
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5 rounded-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 px-3 py-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.718 1.58 8.289L12 18.896l-7.516 4.417 1.58-8.289L0 9.306l8.332-1.151z"/></svg>
              50+ happy clients
            </div>
            <span aria-hidden>•</span>
            <div className="rounded-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 px-3 py-1">Webflow · WordPress · React</div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative order-first md:order-none"
        >
          <div className="relative aspect-[4/3] md:aspect-[5/4] w-full rounded-3xl overflow-hidden border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur shadow-sm">
            {/* Fallback gradient art on small screens */}
            <div className="md:hidden absolute inset-0">
              <div className="h-full w-full bg-gradient-to-tr from-blue-500/20 via-transparent to-fuchsia-500/20" />
            </div>
            {/* Spline scene for md+ screens, reduced contrast for legibility */}
            <div className="hidden md:block absolute inset-0">
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              {/* Soft overlays for contrast */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/70 via-white/10 to-transparent dark:from-slate-950/70 dark:via-slate-950/10" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/80 via-white/20 to-transparent dark:from-slate-950/80 dark:via-slate-950/20" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
