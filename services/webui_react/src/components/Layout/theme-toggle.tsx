"use client";

import { useTheme } from "@/providers/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-2 z-50 flex items-center">
      <span className="mr-3 text-[10px] text-gray-400 dark:text-gray-50">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="mr-3 relative inline-block w-[40px] h-[23px]"
      >
        <div
          className={`absolute inset-0 rounded-full cursor-pointer transition-colors duration-300 ${
            theme === "dark" ? "bg-[#C6A760]" : "bg-gray-300"
          }`}
        >
          <div
            className={`absolute rounded-full w-[19px] h-[18px] transition-transform duration-300 left-[2.2px] top-[2.4px] bg-white ${
              theme === "dark" ? "translate-x-[16px]" : "translate-x-[1px]"
            }`}
          />
        </div>
      </button>
    </div>
  );
}
