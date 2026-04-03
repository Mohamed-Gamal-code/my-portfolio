/** @format */

import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Mohamed-Gamal-code", label: "Github" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mohamed-gamal-code/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:mohamed.gamalcode@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary/[0.02] dark:bg-zinc-950 border-t border-primary/10 dark:border-zinc-800/50 pt-16 pb-8 transition-all duration-500 mt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
            <a href="#hero" className="hover:scale-105 transition-transform duration-300">
              <Logo locale="en" />
            </a>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-xs font-medium">
              Creating modern websites with the latest technologies. 
              Specialized in <span className="text-primary font-bold">Full Stack</span>.
            </p>
          </div>

          {/* 2. Navigation Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary/80 dark:text-primary/60">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(
                      "text-sm flex items-center group transition-all duration-300",
                      link.isHighlight 
                        ? "text-primary font-bold" 
                        : "text-zinc-500 hover:text-primary dark:hover:text-primary"
                    )}
                  >
                    <span className={cn(
                      "h-[2px] bg-primary transition-all duration-300",
                      link.isHighlight ? "w-3 mr-2" : "w-0 group-hover:w-3 group-hover:mr-2"
                    )}></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Connect & Back to Top */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6 col-span-1 sm:col-span-2 md:col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary/80 dark:text-primary/60">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-primary/5 dark:bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-500 transform hover:-translate-y-2 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#hero"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
              >
                Back to top
                <ArrowUp size={16} className="group-hover:animate-bounce" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: التعديل النهائي للبساطة واسمك */}
        <div className="border-t border-primary/5 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-sm text-zinc-500 font-medium tracking-tight">
           2025 <span className="text-primary/80 font-bold">Mohamed Gamal</span>. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 bg-primary/5 dark:bg-zinc-900/50 px-4 py-2 rounded-full border border-primary/10">
            <span>Built with</span>
            <Heart size={14} className="text-primary fill-primary animate-pulse" />
            <span className="font-bold text-zinc-700 dark:text-zinc-300">React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};