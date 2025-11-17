import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[76vh] mt-6">
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative h-full grid place-items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-md bg-white/50 rounded-2xl p-6 md:p-10 shadow-xl text-center max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">I build sleek, animated websites that convert</h1>
          <p className="mt-3 md:mt-4 text-slate-700">Designer & Frontend Developer focused on fast performance, accessibility, and motion. Based in Pakistan, working worldwide.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">Start a project</a>
            <a href="/portfolio" className="px-5 py-2.5 rounded-full bg-white text-slate-900 border hover:bg-slate-50 transition">View work</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
