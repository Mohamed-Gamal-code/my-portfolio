import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../ThemeToggle"; 
import Logo from "./Logo"; // استدعاء ملف اللوجو بتاعك

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo Section - استدعاء المكون الخاص باللوجو */}
        <a href="#hero" className="hover:opacity-80 transition-opacity active:scale-95">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="relative text-sm font-bold text-foreground/70 hover:text-primary transition-all duration-300 group"
              >
                {item.name}
                {/* تأثير الـ Hover: خط سفلي */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>
          
          {/* خط فاصل بسيط بين اللينكات والزرار */}
          <div className="w-[1px] h-5 bg-foreground/10 mx-2" />
          <ThemeToggle />
        </div>

        {/* Mobile Actions (Theme + Menu) */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 hover:bg-foreground/5 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 ease-in-out md:hidden",
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-3xl font-black text-foreground hover:text-primary transition-transform active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};