// src/components/layout/TimelineSection.tsx
import React from 'react';
import { Education, Experience } from '../../types';

interface TimelineSectionProps {
  education: Education[];
  experience: Experience[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ education, experience }) => {
  return (
    <>
      {/* 1. SEPARATE PROFESSIONAL EXPERIENCE SECTION */}
      <section id="experience" className="bg-slate-950 py-20 border-t border-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 mb-10 border-b border-slate-800 pb-3 text-center md:text-left">
            Professional Experience
          </h2>
          <div className="space-y-10 border-l-2 border-sky-500 pl-6 ml-2">
            {experience.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] top-1.5 bg-slate-950 border-2 border-sky-500 h-4 w-4 rounded-full group-hover:bg-sky-400 transition" />
                <span className="text-xs font-semibold text-sky-400 tracking-wider uppercase bg-slate-900 px-2.5 py-1 rounded border border-slate-800">{exp.period}</span>
                <h3 className="text-xl font-bold text-slate-100 mt-3">{exp.role}</h3>
                <h4 className="text-sm font-medium text-slate-400 mt-0.5">{exp.company} — <span className="italic">{exp.location}</span></h4>
                <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="leading-relaxed pl-1">{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SEPARATE EDUCATION HISTORY SECTION */}
      <section id="education" className="bg-slate-900 py-20 border-t border-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 mb-10 border-b border-slate-800 pb-3 text-center md:text-left">
            Education History
          </h2>
          <div className="space-y-10 border-l-2 border-purple-500 pl-6 ml-2">
            {education.map((edu) => (
              <div key={edu.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] top-1.5 bg-slate-900 border-2 border-purple-500 h-4 w-4 rounded-full group-hover:bg-purple-400 transition" />
                <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase bg-slate-950 px-2.5 py-1 rounded border border-slate-950">{edu.period}</span>
                <h3 className="text-xl font-bold text-slate-100 mt-3">{edu.degree}</h3>
                <h4 className="text-sm font-medium text-slate-400 mt-0.5">{edu.school} — <span className="italic">{edu.location}</span></h4>
                
                <div className="mt-2.5 flex flex-wrap gap-4 text-xs text-slate-400 font-semibold">
                  {edu.gpa && <span className="bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800">GPA: <span className="text-slate-200">{edu.gpa}</span></span>}
                  {edu.ectsCompleted && <span className="bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800">Credits: <span className="text-slate-200">{edu.ectsCompleted} ECTS</span></span>}
                </div>

                {edu.thesis && (
                  <div className="mt-4 text-sm bg-slate-950/40 p-4 rounded-xl border border-slate-800 max-w-3xl">
                    <span className="font-bold text-slate-200 block text-xs uppercase tracking-wide text-purple-400 mb-1">Thesis & Research Work</span>
                    <span className="font-semibold text-slate-300 block">{edu.thesis.title}</span>
                    <p className="text-slate-400 mt-1 text-xs leading-relaxed">{edu.thesis.description}</p>
                  </div>
                )}

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                  {edu.focusAreas.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-slate-950/30 p-2 rounded border border-slate-850">
                      <span className="text-purple-500 font-bold">▪</span> <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TimelineSection;