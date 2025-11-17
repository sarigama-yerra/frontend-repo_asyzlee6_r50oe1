import { Link, NavLink, Outlet } from 'react-router-dom';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

export default function Layout() {
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-xl">Awais Khan</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({isActive}) => `hover:text-blue-600 transition-colors ${isActive? 'text-blue-600' : 'text-slate-600'}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@awais.dev" className="p-2 rounded-full hover:bg-slate-100 transition" aria-label="Email"><Mail size={18}/></a>
            <a href="https://www.linkedin.com" target="_blank" className="p-2 rounded-full hover:bg-slate-100 transition" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="https://wa.me/1234567890" target="_blank" className="p-2 rounded-full hover:bg-slate-100 transition" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18}/></a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4">
        <Outlet />
      </main>

      <footer className="mt-20 border-t border-slate-200/70 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold mb-3">Awais Khan</div>
            <p className="text-slate-600">Designer & Frontend Developer crafting fast, animated experiences.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Navigation</div>
            <ul className="space-y-2 text-slate-600">
              {nav.map(n => (<li key={n.to}><Link className="hover:text-blue-600" to={n.to}>{n.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Expertise</div>
            <ul className="space-y-2 text-slate-600">
              <li>Elementor</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>Custom Development</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-slate-600">
              <li>Email: hello@awais.dev</li>
              <li>LinkedIn: /in/awais</li>
              <li>WhatsApp: +1 234 567 890</li>
            </ul>
          </div>
        </div>
        <div className="py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Awais Khan. All rights reserved.</div>
      </footer>
    </div>
  )
}
