"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useCookies } from "react-cookie";

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
  const [cookies, setCookie, removeCookie] = useCookies(["theme"]); // use Cookies
  const [theme, setTheme] = useState<Theme>(() => {

    let initialTheme: Theme;

    // 1. Check for cookie
    if (cookies.theme) {
      initialTheme = cookies.theme as Theme;
    }

    // 2. Check system preference (if enabled)
    else if (enableSystem && typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      initialTheme = defaultTheme;
    }

    // 3. Fallback to defaultTheme
    console.log("ThemeProvider (client) - initial theme:", initialTheme);
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

    // Set the cookie. Make it HTTP-only for security, and set a long expiration.
    setCookie('theme', theme, {
      path: '/', 
      maxAge: 31536000, 
      httpOnly: true, 
      sameSite: 'lax', 
      domain: undefined,
    });


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
  }, [theme, enableSystem, setCookie]); // Run whenever theme or enableSystem changes

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
