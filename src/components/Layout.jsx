import { Link, NavLink, Outlet } from 'react-router-dom';
import { Mail, Linkedin, MessageCircle, Moon, Sun, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Layout() {
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  const [theme, setTheme] = useState('system');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system';
    setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = theme === 'dark' || (theme === 'system' && prefersDark);
    root.classList.toggle('dark', enableDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu"><Menu size={18}/></button>
            <Link to="/" className="font-semibold tracking-tight text-xl">Awais Khan</Link>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({isActive}) => `hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Toggle theme">
              <span className="sr-only">Toggle theme</span>
              <Sun size={18} className="hidden dark:block" />
              <Moon size={18} className="block dark:hidden" />
            </button>
            <a href="mailto:hello@awais.dev" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Email"><Mail size={18}/></a>
            <a href="https://www.linkedin.com" target="_blank" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="https://wa.me/1234567890" target="_blank" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18}/></a>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur px-4 py-3">
            <div className="flex flex-col gap-2 text-sm">
              {nav.map(n => (
                <NavLink key={n.to} to={n.to} onClick={()=>setOpen(false)} className={({isActive}) => `px-2 py-2 rounded-lg ${isActive? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>{n.label}</NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-4">
        <Outlet />
      </main>

      <footer className="mt-20 border-t border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold mb-3">Awais Khan</div>
            <p className="text-slate-600 dark:text-slate-300">Designer & Frontend Developer crafting fast, animated experiences.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Navigation</div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              {nav.map(n => (<li key={n.to}><Link className="hover:text-blue-600 dark:hover:text-blue-400" to={n.to}>{n.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Expertise</div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>Elementor</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>Custom Development</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>Email: hello@awais.dev</li>
              <li>LinkedIn: /in/awais</li>
              <li>WhatsApp: +1 234 567 890</li>
            </ul>
          </div>
        </div>
        <div className="py-4 text-center text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Awais Khan. All rights reserved.</div>
      </footer>
    </div>
  )
}
