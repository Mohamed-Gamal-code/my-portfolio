/** @format */

import { ArrowDown, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* --- روابط السوشيال ميديا (مكان جديد ومميز على الشمال) --- */}
      <div className="absolute left-6 bottom-10 hidden md:flex flex-col items-center gap-6 z-20 animate-fade-in-delay-4 opacity-0 [animation-fill-mode:forwards]">
        <a
          href="https://github.com/Mohamed-Gamal-code"
          target="_blank"
          className="text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:-translate-y-1 hover:scale-110"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-gamal-code/"
          target="_blank"
          className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-1 hover:scale-110"
        >
          <Linkedin size={24} />
        </a>
        <div className="w-[1px] h-20 bg-gradient-to-t from-violet-600 to-transparent" />
      </div>
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              MOHAMED
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              GAMAL
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            "I build fast, responsive, and visually stunning web interfaces. I
            focus on creating performance-driven user experiences that are
            enjoyable to use."
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button inline-block transition-transform duration-300 ease-out hover:scale-110 active:scale-95"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce cursor-pointer group">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 group-hover:text-violet-600 transition-colors">
          Scroll
        </span>
        <div className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 group-hover:border-violet-500 transition-colors">
          <ArrowDown className="h-4 w-4 text-zinc-400 group-hover:text-violet-600" />
        </div>
      </div>
    </section>
  );
};
