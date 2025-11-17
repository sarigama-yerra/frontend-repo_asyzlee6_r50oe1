import { motion } from 'framer-motion';

export default function About() {
  const sections = [
    {title:'Who I am', body:'I am Awais Khan, a designer and frontend developer specializing in sleek, animated websites. My focus is on performance, accessibility, and crafting micro-interactions that bring interfaces to life.'},
    {title:'Process', body:'Discovery → Wireframes → Visual design → Motion → Build → QA. Transparent communication and weekly demos keep us aligned.'},
    {title:'Values', body:'Clarity, speed, and craft. I sweat the details—typography, spacing, motion, and semantic HTML—so your brand feels premium.'},
    {title:'Toolbox', body:'React, Tailwind, Framer Motion, WordPress, Elementor, WooCommerce, Figma. I pick the simplest stack that delivers the most value.'},
  ];
  return (
    <div className="py-12">
      <header className="max-w-3xl mt-10">
        <motion.h1 initial={{opacity:0, y: 12}} animate={{opacity:1, y:0}} className="text-3xl md:text-5xl font-bold tracking-tight">About me</motion.h1>
        <p className="mt-3 text-slate-700 dark:text-slate-300">I help brands ship fast, beautiful websites with motion and meaning.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {sections.map((s, i)=> (
          <motion.section key={s.title} initial={{opacity:0, y: 8}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay: i*0.05}} className="bg-white/70 dark:bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-slate-200/70 dark:border-slate-700 shadow-sm">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-slate-700 dark:text-slate-300 mt-2 text-sm leading-6">{s.body}</p>
          </motion.section>
        ))}
      </div>

      <section className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/80 border border-slate-200/70 dark:border-slate-700 rounded-xl p-8">
        <h3 className="font-semibold text-lg">Experience</h3>
        <ul className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-slate-700 dark:text-slate-300">
          <li className="bg-white/80 dark:bg-slate-800/60 backdrop-blur border border-slate-200/70 dark:border-slate-700 rounded-lg p-4">Frontend Developer — 5+ years building high-perf UIs</li>
          <li className="bg-white/80 dark:bg-slate-800/60 backdrop-blur border border-slate-200/70 dark:border-slate-700 rounded-lg p-4">WordPress Expert — Elementor & WooCommerce</li>
          <li className="bg-white/80 dark:bg-slate-800/60 backdrop-blur border border-slate-200/70 dark:border-slate-700 rounded-lg p-4">Product Design — systems, tokens, motion</li>
        </ul>
      </section>
    </div>
  );
}
