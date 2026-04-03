import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        // شلنا fixed و top-5 و max-sm:hidden نهائياً
        "p-2 rounded-xl transition-all duration-300",
        "hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-90",
        "focus:outline-none flex items-center justify-center"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 transition-all" />
      ) : (
        <Moon className="h-5 w-5 md:h-6 md:w-6 text-slate-700 dark:text-blue-400 transition-all" />
      )}
    </button>
  );
};