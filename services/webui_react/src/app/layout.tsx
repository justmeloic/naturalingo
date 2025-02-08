"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import { NavBar } from "@/components/Layout/nav-bar";
import { Footer } from "@/components/Layout/footer";
import "../styles/globals.css";
import type React from "react";
import { useTheme } from "@/providers/theme-provider";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light-mode-white">
        <ThemeProvider defaultTheme="light" enableSystem>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-light-mode-white"
      } transition-colors duration-500`}
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
