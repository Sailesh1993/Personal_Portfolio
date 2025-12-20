import React, { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../models/portfolio";

const ProjectList: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="projects" className="bg-slate-900 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight text-slate-100">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-slate-800/70 shadow-sm ring-1 ring-slate-700 transition hover:-translate-y-1 hover:shadow-lg hover:ring-slate-500"
            >
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 line-clamp-3">
                  {project.summary}
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="mt-4 inline-flex w-max rounded-full bg-sky-500 px-4 py-1.5 text-sm font-semibold text-slate-900 hover:bg-sky-400"
                >
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>

        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-slate-900 p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between gap-4">
                <h3 className="text-xl font-semibold text-slate-50">
                  {selected.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="text-slate-400 hover:text-slate-200"
                >
                  ✕
                </button>
              </div>

              <p className="mt-3 text-sm text-slate-200">
                {selected.description ?? selected.summary}
              </p>

              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-sky-300">
                <span className="mr-2">Tech stack:</span>
                {selected.techStack.join(" • ")}
              </p>

              <ul className="mt-4 space-y-1 text-sm text-slate-200 list-disc list-inside">
                {selected.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {selected.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-sky-400 hover:text-sky-300"
                  >
                    {link.type}
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
