"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/Layout/theme-toggle";
import { useTheme } from "@/providers/theme-provider"; // Import useTheme

export function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { theme } = useTheme(); // Get the current theme

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        theme === "dark" ? "bg-black" : "bg-white"
      } transition-colors duration-200`} // Added transition for smooth color change
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="w-36"></div>
        <div className="flex items-center justify-center gap-8">
          {/* Apply dark mode text colors and font size to links */}
          <Link
            href="/"
            className={`text-[14px] hover:text-[#C6A760] transition-colors ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`text-[14px] hover:text-[#C6A760] transition-colors ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/engineering"
            className={`text-[14px] hover:text-[#C6A760] transition-colors ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Engineering
          </Link>
          {/* Conditional rendering for buttons vs. links, with font size */}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-[14px] hover:text-[#C6A760] transition-colors ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Contact us
            </button>
          ) : (
            <Link
              href="/#contact"
              className={`text-[14px] hover:text-[#C6A760] transition-colors ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Contact us
            </Link>
          )}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection("newsletter")}
              className={`text-[14px] hover:text-[#C6A760] transition-colors ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Newsletter
            </button>
          ) : (
            <Link
              href="/#newsletter"
              className={`text-[14px] hover:text-[#C6A760] transition-colors ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Newsletter
            </Link>
          )}
        </div>
        <div className="w-36 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
