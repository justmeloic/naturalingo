"use client";

import { ChevronDown } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";

export function HeroSection() {
  const { theme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`
        relative min-h-[75vh] flex items-center justify-center mx-[60px] mt-[82px] rounded-[20px] overflow-hidden
        ${theme === "dark" ? "bg-black" : "bg-gray-100"}
        transition-colors duration-500
      `}
      style={{
        backgroundImage:
          theme === "dark"
            ? "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-bg-dark-mode.jpg-ubRtEXT7BxMxTDobvcb8sAvAYkfzlq.png')"
            : "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-bg-light-mode.jpg-FAyOlrHkkgJCO00LACbxTbJio9PlZ3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`
        w-full max-w-[1300px] mx-auto text-center p-8 rounded-[20px]
        ${theme === "dark" ? "bg-black/70" : "bg-white/80"}
        transition-colors duration-500
      `}
      >
        <h3 className="text-[#C6A760] font-medium tracking-[6px] uppercase mb-8 wow fadeInUp">
          From First Principles
        </h3>
        <h1
          className={`
          font-serif text-4xl md:text-[40px] leading-[1.4] max-w-4xl mx-auto
          ${theme === "dark" ? "text-gray-200" : "text-gray-800"}
          transition-colors duration-500
        `}
        >
          In philosophy and science, a first principle is a basic proposition or
          assumption that cannot be deduced from any other proposition or
          assumption
        </h1>
        <button
          onClick={() => scrollToSection("blog-previews")}
          className={`
            absolute bottom-12 left-1/2 -translate-x-1/2 w-[50px] h-[50px] rounded-full
            flex items-center justify-center transition-colors duration-500 cursor-pointer
            ${
              theme === "dark"
                ? "bg-[#C6A760] text-black hover:bg-white"
                : "bg-black text-white hover:bg-[#C6A760]"
            }
          `}
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
