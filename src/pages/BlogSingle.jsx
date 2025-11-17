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
        <div className="mt-2 text-sm text-slate-500">{post.date} • {post.author}</div>
      </header>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <img src={post.cover} alt={post.title} className="rounded-xl border" />
          <article className="prose max-w-none mt-6 prose-slate">
            {post.content.split('\n').map((p, i) => (<p key={i}>{p}</p>))}
          </article>
        </div>
        <aside className="md:col-span-1">
          <div className="bg-white rounded-xl p-6 border">
            <div className="font-medium">Tags</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags.map(t => (<span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100">{t}</span>))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
