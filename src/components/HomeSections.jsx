import { motion } from 'framer-motion';
import { blogs, clients, projects, testimonials } from '../data';
import { ArrowLeft, ArrowRight, Star, Code2, ShoppingCart, Layout as LayoutIcon, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SectionTitle({ title, action }) {
  return (
    <div className="flex items-end justify-between mb-8">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {action}
    </div>
  );
}

export function BlogPreview() {
  return (
    <section className="py-16 md:py-24">
      <SectionTitle title="From the blog" action={<Link className="text-blue-600 hover:underline" to="/blog">View all</Link>} />
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.slice(0,3).map((post, i) => (
          <motion.article key={post.id} initial={{opacity:0, y: 20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="bg-white/70 dark:bg-slate-800/60 backdrop-blur rounded-xl shadow-sm overflow-hidden border border-slate-200/70 dark:border-slate-700 hover:shadow-lg transition">
            <Link to={`/blog/${post.id}`}>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.cover} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <div className="text-xs text-slate-500 dark:text-slate-400">{post.date}</div>
                <h3 className="font-semibold mt-1">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{post.excerpt}</p>
                <div className="mt-3 text-blue-600 dark:text-blue-400 text-sm">Read more →</div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function ClientsMarquee() {
  return (
    <section className="py-16 md:py-24">
      <SectionTitle title="Our clients" />
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 backdrop-blur">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/90 dark:from-slate-900/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/90 dark:from-slate-900/90 to-transparent" />
        <div className="flex gap-16 items-center py-8 animate-[marquee_20s_linear_infinite]" style={{width:'max-content'}}>
          {[...clients, ...clients].map((logo, i) => (
            <img key={i} src={logo} alt="client" className="h-10 opacity-70 hover:opacity-100 transition" />)
          )}
        </div>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}

export function TestimonialsCarousel() {
  return (
    <section className="py-16 md:py-24">
      <SectionTitle
        title="What clients say"
        action={
          <div className="flex gap-2">
            <button onClick={() => document.getElementById('t-scroll').scrollBy({left:-420, behavior:'smooth'})} className="p-2 rounded-full border border-slate-200/70 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur hover:bg-white dark:hover:bg-slate-800"><ArrowLeft size={18}/></button>
            <button onClick={() => document.getElementById('t-scroll').scrollBy({left:420, behavior:'smooth'})} className="p-2 rounded-full border border-slate-200/70 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur hover:bg-white dark:hover:bg-slate-800"><ArrowRight size={18}/></button>
          </div>
        }
      />
      <div id="t-scroll" className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }}
            className="min-w-[360px] md:min-w-[420px] snap-center relative"
          >
            <div className="relative p-6 rounded-2xl border border-slate-200/70 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 backdrop-blur shadow-sm h-full">
              <div className="absolute -top-3 -left-3 text-blue-600/20 dark:text-blue-400/20">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V22h8v-8H6.5A3.5 3.5 0 0 1 10 10.5V2H2.83A.83.83 0 0 0 2 2.83V6h5.17ZM20.17 6A5.17 5.17 0 0 0 15 11.17V22h8v-8h-3.5A3.5 3.5 0 0 1 23 10.5V2h-7.17a.83.83 0 0 0-.83.83V6h5.17Z"/></svg>
              </div>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-600/20" />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-slate-700 dark:text-slate-200 text-[15px] leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-1 text-amber-500">
                {Array.from({length:5}).map((_,i)=>(<Star key={i} size={16} fill="currentColor" className="" />))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Expertise() {
  const items = [
    { icon: <LayoutIcon className="h-6 w-6" />, title: 'Elementor', desc: 'Pixel-perfect pages with performance & responsive polish.' },
    { icon: <Globe className="h-6 w-6" />, title: 'WordPress', desc: 'Flexible CMS setups with clean, secure best practices.' },
    { icon: <ShoppingCart className="h-6 w-6" />, title: 'WooCommerce', desc: 'Conversion-focused storefronts with micro-interactions.' },
    { icon: <Code2 className="h-6 w-6" />, title: 'Custom Development', desc: 'Tailored components, animations, and integrations.' },
  ];
  return (
    <section className="py-16 md:py-24">
      <SectionTitle title="Expertise" />
      <div className="grid md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.div key={i} initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="group bg-white/70 dark:bg-slate-800/60 backdrop-blur rounded-2xl p-6 border border-slate-200/70 dark:border-slate-700 shadow-sm hover:shadow-lg transition">
            <div className="h-10 w-10 rounded-xl grid place-items-center bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-105 transition">{it.icon}</div>
            <div className="text-base font-semibold">{it.title}</div>
            <p className="text-slate-600 dark:text-slate-300 mt-1 text-sm">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function HomePortfolio() {
  return (
    <section className="py-16 md:py-24">
      <SectionTitle title="Selected work" action={<Link className="text-blue-600 hover:underline" to="/portfolio">View all</Link>} />
      <div className="grid md:grid-cols-3 gap-6">
        {projects.slice(0,3).map((p, i)=> (
          <motion.article key={p.id} initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay: i*0.05}} className="bg-white/70 dark:bg-slate-800/60 backdrop-blur rounded-xl border border-slate-200/70 dark:border-slate-700 overflow-hidden hover:shadow-lg transition">
            <Link to={`/portfolio/${p.id}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <div className="text-xs text-slate-500 dark:text-slate-400">{p.year} · {p.role}</div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{p.subtitle}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12 flex items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Have a project in mind?</h3>
          <p className="opacity-90 mt-1">Let’s craft a fast, animated website that converts.</p>
        </div>
        <Link to="/contact" className="px-5 py-2.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 transition">Contact me</Link>
      </div>
    </section>
  );
}
