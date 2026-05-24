// src/components/projects/ProjectList.tsx
import React, { useEffect, useState } from "react";
import { Project } from "../../types";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [selected, setSelected] = useState<Project | null>(null);
  
  // 💡 State to handle showing 3 initial items
  const [visibleCount, setVisibleCount] = useState<number>(3);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleLoadMore = () => {
    // Reveal all remaining items once clicked
    setVisibleCount(projects.length);
  };

  return (
    <section id="projects" className="bg-slate-950 py-24 border-t border-slate-900 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-50">
          Featured Engineering Projects
        </h2>
        <p className="mb-10 text-sm text-slate-400">
          A collection of systems architecture, discrete-event simulations, and full-stack integrations.
        </p>

        {/* Dynamic Slice to render only the visible count */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, visibleCount).map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-sm ring-1 ring-slate-800 transition hover:-translate-y-1 hover:shadow-lg hover:ring-slate-700"
            >
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-44 w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
                  {project.projectType} {project.role ? `• ${project.role}` : ''}
                </span>
                <h3 className="text-lg font-bold text-slate-50 leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="mt-4 inline-flex w-max rounded-full bg-sky-500 px-4 py-1.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition"
                >
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 💡 Load More Button Row */}
        {visibleCount < projects.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="rounded-full border border-slate-700 bg-slate-900 px-6 py-2.5 text-sm font-semibold text-slate-200 hover:border-sky-500 hover:text-sky-400 transition-all active:scale-95"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* Modal Overlay */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm px-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-slate-900 p-6 shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                    {selected.projectType}
                  </span>
                  <h3 className="text-xl font-bold text-slate-50 mt-0.5">
                    {selected.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="text-slate-400 hover:text-slate-200 text-lg p-1"
                >
                  ✕
                </button>
              </div>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {selected.description}
              </p>

              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-sky-400">Tech Stack</h4>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {selected.technologies.map((tech) => (
                    <span key={tech} className="rounded bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-200 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-sky-400 mb-1.5">Key Highlights</h4>
                <ul className="space-y-1.5 text-sm text-slate-300 list-disc list-inside">
                  {selected.highlights.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-sm">
                {selected.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center font-semibold text-sky-400 hover:text-sky-300 transition uppercase tracking-wider text-xs"
                  >
                    {link.type} ➜
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;