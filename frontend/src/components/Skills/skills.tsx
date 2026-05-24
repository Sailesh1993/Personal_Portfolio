// src/components/Skills/skills.tsx
import React from 'react';

interface SkillRow {
  label: string;
  items: string[];
}

const Skills: React.FC = () => {
  // Exact technical groupings directly from your engineering CV
  const cvSkills: SkillRow[] = [
    {
      label: "Software Engineering & Web Development",
      items: ["React.js", "Node.js", "Redux.js", "JavaScript", "TypeScript", "SASS", "Material-UI", "RESTful APIs", "HTML5", "CSS3"]
    },
    {
      label: "Backend Frameworks & Core Languages",
      items: ["C#", "ASP.NET Core", "Entity Framework Core", "Java", "Spring Boot", "JavaFX", "Python", "Flask", "PHP"]
    },
    {
      label: "DevOps, Cloud & Data Persistence",
      items: ["Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines", "Azure Cloud", "PostgreSQL", "MySQL", "MariaDB", "SQL"]
    },
    {
      label: "Systems Administration & Core ICT",
      items: ["Bash Scripting", "Linux/Windows Server Administration", "Network Topologies", "Storage Area Networks (SAN)", "Hardware Configuration", "Line Provisioning"]
    }
  ];

  return (
    <section id="skills" className="bg-slate-950 min-h-[85vh] flex flex-col justify-center py-24 border-t border-slate-900 scroll-mt-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 uppercase border-b border-slate-800 pb-3">
            Technical Skills Matrix
          </h2>
        </div>

        {/* CV Styled Rows */}
        <div className="space-y-8">
          {cvSkills.map((row, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 items-start border-b border-slate-900/60 pb-6 last:border-0"
            >
              {/* Left Column: CV Core Label */}
              <div className="md:col-span-1">
                <h3 className="text-sm font-bold tracking-wide text-sky-400 uppercase md:pt-1">
                  {row.label}
                </h3>
              </div>

              {/* Right Column: Clean Technical Pill Badges */}
              <div className="md:col-span-2 flex flex-wrap gap-2">
                {row.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="rounded-md bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 border border-slate-800 tracking-wide hover:border-sky-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;