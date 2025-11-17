import { useParams } from 'react-router-dom';
import { blogs } from '../data';

export default function BlogSingle() {
  const { id } = useParams();
  const post = blogs.find(b => b.id === id);
  if (!post) return <div className="py-12">Post not found.</div>;
  return (
    <div className="py-12">
      <header className="max-w-3xl mt-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{post.title}</h1>
        <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{post.date} • {post.author}</div>
      </header>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <img src={post.cover} alt={post.title} className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 backdrop-blur" />
          <article className="prose max-w-none mt-6 prose-slate dark:prose-invert">
            {post.content.split('\n').map((p, i) => (<p key={i}>{p}</p>))}
          </article>
        </div>
        <aside className="md:col-span-1">
          <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-slate-200/70 dark:border-slate-700 shadow-sm">
            <div className="font-medium">Tags</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags.map(t => (<span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 text-slate-700 dark:text-slate-300">{t}</span>))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
