"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean; // Add this!
}

interface ThemeContextProps {
  // Better name for clarity
  theme: Theme;
  setTheme: (theme: Theme) => void; // Use setTheme, not toggleTheme
}

const ThemeProviderContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "light",
  enableSystem = true, // Default to enabling system preference
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Check localStorage
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as Theme;
    }
    // 2. Check system preference (if enabled)
    if (enableSystem && typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    // 3. Fallback to defaultTheme
    return defaultTheme;
  });

  // --- APPLY DARK CLASS AND SAVE TO LOCALSTORAGE (useEffect hook) ---
  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent errors during SSR

    // *** THIS IS THE KEY PART: Add/remove the 'dark' class ***
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);

    // Listen for system preference changes (if enabled)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (enableSystem) {
        setTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    if (enableSystem) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    }

    return () => {
      if (enableSystem) {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      }
    };
  }, [theme, enableSystem]); // Run whenever theme or enableSystem changes

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
