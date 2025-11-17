import { motion } from 'framer-motion';
import { projects } from '../data';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div className="py-12">
      <header className="max-w-3xl mt-10">
        <motion.h1 initial={{opacity:0, y: 12}} animate={{opacity:1, y:0}} className="text-3xl md:text-5xl font-bold tracking-tight">Portfolio</motion.h1>
        <p className="mt-3 text-slate-700">Selected work highlighting craft, performance, and motion.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {projects.map((p, i)=> (
          <motion.article key={p.id} initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay: i*0.05}} className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition">
            <Link to={`/portfolio/${p.id}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <div className="text-xs text-slate-500">{p.year} · {p.role}</div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{p.subtitle}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
