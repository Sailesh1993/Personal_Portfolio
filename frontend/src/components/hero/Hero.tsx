// src/components/hero/Hero.tsx
import React from 'react';
import { Profile } from '../../types';
import resumeFile from '../../assets/KarkiSailesh_Resume.pdf';

interface HeroProps {
  profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center py-12"
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Dynamic Initials Circle */}
        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-purple-500 p-[3px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-3xl font-semibold text-sky-300">
            {profile.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        {/* Dynamic Title and Name */}
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl font-medium text-sky-400">
          {profile.title}
        </p>

        {/* Dynamic CV Summary */}
        <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {profile.summary}
        </p>

        {/* Dynamic Anchor links and Social Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition"
          >
            Contact Me
          </a>
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-sky-400 transition"
          >
            View CV / Resume
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-sky-400 transition"
          >
            GitHub
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-sky-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;