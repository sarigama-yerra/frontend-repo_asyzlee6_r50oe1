import { blogs } from '../data';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="py-12">
      <header className="max-w-3xl mt-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Blog</h1>
        <p className="mt-3 text-slate-700">Ideas on motion, performance, and product craft.</p>
      </header>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {blogs.map((post)=> (
          <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden border hover:shadow-lg transition">
            <Link to={`/blog/${post.id}`}>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.cover} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <div className="text-xs text-slate-500">{post.date}</div>
                <h3 className="font-semibold mt-1">{post.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{post.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
