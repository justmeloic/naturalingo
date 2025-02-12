"use client";

import { NavBar } from "@/components/Layout/nav-bar";
import { Footer } from "@/components/Layout/footer";
import { useTheme } from "@/providers/theme-provider";
import React from "react";

interface ThemeWrapperProps {
    children: React.ReactNode;
  }
  
  export default function ThemeWrapper({ children }: ThemeWrapperProps) {
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