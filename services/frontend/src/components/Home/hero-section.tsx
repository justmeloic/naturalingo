"use client";

import { ChevronDown } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const { theme } = useTheme();
  const backgroundRef = useRef(null); // Create a ref for the background div

  useEffect(() => {
    const backgroundDiv = backgroundRef.current;

    const handleScroll = (): void => {
      if (backgroundDiv) {
        const scrollY = window.scrollY;
        // Adjust the divisor to control the scroll speed of the background
        const slowScrollY = scrollY / 2; // Background scrolls 3 times slower
        backgroundDiv.style.transform = `translateY(${slowScrollY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially to position background correctly

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []); // Empty dependency array to run effect only on mount and unmount

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`
        relative min-h-[85vh] flex items-center justify-center
        mx-[0%] md:mx-[5%] md:mt-[30px] md:rounded-[50px] overflow-hidden
        ${theme === "dark" ? "bg-black" : "bg-gray-100"}
        transition-colors duration-0
      `}
    >
      <div
        ref={backgroundRef} // Attach the ref to the background div
        className="absolute top-0 left-0 w-full h-full pointer-events-none mt-[80px] md:rounded-[50px]" // Make it cover the section and non-interactive
        style={{
          backgroundImage:
            theme === "dark"
              ? "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-bg-dark-mode.jpg-ubRtEXT7BxMxTDobvcb8sAvAYkfzlq.png')"
              : "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-bg-light-mode.jpg-FAyOlrHkkgJCO00LACbxTbJio9PlZ3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className={`
        w-full md:max-w-[900px] max-h-[900px] md:mx-auto text-center
        p-4 md:p-16 md:rounded-[50px] relative mt-[85px]
        ${theme === "dark" ? "bg-black/70" : "bg-light-mode-white/80"}
        transition-colors duration-0
      `}
      >
        <h2
          className={`text-3xl font-extrabold font-open-sans mb-8 tracking-[1px]`}
        >
          <span
            className={`text-accent transition-all duration-3500 delay-500 ${
              theme === "dark" ? "opacity-100" : "opacity-50"
            }`}
          >
            natur
          </span>
          <span
            className={`${
              theme === "dark" ? "text-white/90" : "text-black/50"
            } transition-colors duration-300`}
          >
            a
          </span>
          <span
            className={`text-accent transition-all duration-3500 delay-700 ${
              theme === "dark" ? "opacity-100" : "opacity-50"
            }`}
          >
            l
          </span>
          <span
            className={`${
              theme === "dark" ? "text-white/90" : "text-black/50"
            } transition-colors duration-300`}
          >
            i
          </span>
          <span
            className={`text-accent transition-all duration-3500 delay-900 ${
              theme === "dark" ? "opacity-100" : "opacity-100"
            }`}
          >
            ngo ai
          </span>
        </h2>

        <h2
          className={`
          font-open-sans text-[29px] md:text-[35px] leading-[1.3]
          ${theme === "dark" ? "text-gray-200" : "text-zinc-700"}
          font-extralight wow fadeInUp px-0
          transition-colors duration-0
        `}
        >
          We empower businesses to leverage the full potential of Natural
          Language Processing for enhanced decision-making, streamlined
          operations, and intelligent automation.
        </h2>
        <button
          onClick={() => scrollToSection("blog-previews")}
          className={`
            absolute mt-10 md:mt-20 left-1/2 -translate-x-1/2
            w-[40px] h-[40px] md:w-[50px] md:h-[50px]
            rounded-full
            flex items-center justify-center transition-colors duration-100 cursor-pointer
            ${
              theme === "dark"
                ? "bg-accent text-black hover:bg-light-mode-white"
                : "bg-black text-white hover:bg-accent"
            }
          `}
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
}
