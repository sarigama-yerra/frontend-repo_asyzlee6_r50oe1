import { useParams } from 'react-router-dom';
import { projects } from '../data';

export default function PortfolioSingle() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  if (!project) return <div className="py-12">Project not found.</div>;
  return (
    <div className="py-12">
      <header className="max-w-3xl mt-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-3 text-slate-700 dark:text-slate-300">{project.description}</p>
      </header>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <img src={project.image} alt={project.title} className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 backdrop-blur" />
        <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-slate-200/70 dark:border-slate-700 shadow-sm">
          <div className="text-sm text-slate-500 dark:text-slate-400">Role</div>
          <div className="font-medium">{project.role}</div>
          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">Year</div>
          <div className="font-medium">{project.year}</div>
        </div>
      </div>
    </div>
  );
}
