import React from "react";

const Hero: React.FC = () => (
  <section
    id="home"
    className="bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 min-h-screen flex flex-col items-center justify-center pt-20"
  >
    <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
      {/* Circle with initials */}
      <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-purple-500 p-[3px]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-3xl font-semibold text-sky-300">
          SK
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-slate-50">
        Sailesh Karki
      </h1>
      <p className="mt-3 text-lg font-medium text-slate-300">
        Full Stack Software Engineer
      </p>

      <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
        Versatile developer with expertise in .NET Core, React, TypeScript,
        Python, and Azure. Passionate about building scalable web applications
        and IoT solutions.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400"
        >
          Contact Me
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-sky-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-sky-400"
        >
          LinkedIn
        </a>
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href="#projects"
          className="scroll-arrow inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-slate-300 hover:border-sky-400 hover:text-sky-400"
        >
          <span className="text-xl leading-none">⌄</span>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
