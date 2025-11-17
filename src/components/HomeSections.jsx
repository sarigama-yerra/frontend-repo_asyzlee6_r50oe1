import { motion } from 'framer-motion';
import { blogs, clients, projects, testimonials } from '../data';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlogPreview() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">From the blog</h2>
        <Link className="text-blue-600 hover:underline" to="/blog">View all</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.slice(0,3).map((post, i) => (
          <motion.article key={post.id} initial={{opacity:0, y: 20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="bg-white rounded-xl shadow-sm overflow-hidden border hover:shadow-lg transition">
            <Link to={`/blog/${post.id}`}>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.cover} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <div className="text-xs text-slate-500">{post.date}</div>
                <h3 className="font-semibold mt-1">{post.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{post.excerpt}</p>
                <div className="mt-3 text-blue-600 text-sm">Read more →</div>
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
    <section className="mt-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our clients</h2>
      </div>
      <div className="relative overflow-hidden rounded-xl border bg-white">
        <div className="flex gap-16 items-center py-6 animate-[marquee_20s_linear_infinite]" style={{width:'max-content'}}>
          {[...clients, ...clients].map((logo, i) => (
            <img key={i} src={logo} alt="client" className="h-10 opacity-70 hover:opacity-100 transition" />
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}

export function TestimonialsCarousel() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What clients say</h2>
        <div className="flex gap-2">
          <button onClick={() => document.getElementById('t-scroll').scrollBy({left:-320, behavior:'smooth'})} className="p-2 rounded-full border bg-white hover:bg-slate-50"><ArrowLeft size={18}/></button>
          <button onClick={() => document.getElementById('t-scroll').scrollBy({left:320, behavior:'smooth'})} className="p-2 rounded-full border bg-white hover:bg-slate-50"><ArrowRight size={18}/></button>
        </div>
      </div>
      <div id="t-scroll" className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {testimonials.map((t, i) => (
          <motion.div key={i} initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="min-w-[320px] snap-start bg-white rounded-xl p-5 border shadow-sm">
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
            <p className="mt-3 text-slate-700">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Expertise() {
  const items = [
    { title: 'Elementor', desc: 'Pixel-perfect pages with performance & responsive polish.' },
    { title: 'WordPress', desc: 'Flexible CMS setups with clean, secure best practices.' },
    { title: 'WooCommerce', desc: 'Conversion-focused storefronts with micro-interactions.' },
    { title: 'Custom Development', desc: 'Tailored components, animations, and integrations.' },
  ];
  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Expertise</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.div key={i} initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="bg-white rounded-xl p-5 border shadow-sm hover:shadow-lg transition">
            <div className="text-lg font-semibold">{it.title}</div>
            <p className="text-slate-600 mt-1 text-sm">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact" className="mt-16 mb-20">
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
