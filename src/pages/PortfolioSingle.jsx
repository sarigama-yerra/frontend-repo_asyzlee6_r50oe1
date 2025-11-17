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
        <p className="mt-3 text-slate-700">{project.description}</p>
      </header>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <img src={project.image} alt={project.title} className="rounded-xl border" />
        <div className="bg-white rounded-xl p-6 border">
          <div className="text-sm text-slate-500">Role</div>
          <div className="font-medium">{project.role}</div>
          <div className="mt-4 text-sm text-slate-500">Year</div>
          <div className="font-medium">{project.year}</div>
        </div>
      </div>
    </div>
  );
}
