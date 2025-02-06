"use client";

import { Github, Linkedin } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import type React from "react";

export function Footer() {
  const { theme } = useTheme();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await fetch("https://formspree.io/f/xbjwkzqv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      event.currentTarget.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <footer className="py-24 bg-black text-white">
      <div className="container max-w-2xl mx-auto px-6">
        {/* Top Divider */}
        <div className="w-full h-px bg-zinc-800 mb-24" />

        {/* Main Content */}
        <div className="space-y-24">
          {/* About Section */}
          <div className="text-center space-y-4">
            <h2 className={`text-3xl font-serif text-white`}>
              From First Principles
            </h2>
            <p className={`text-lg max-w-xl mx-auto text-zinc-400`}>
              Information is a privilege, and we believe in sharing it widely.
              Join us in building "From First Principles" into a valuable
              resource for everyone.
            </p>
          </div>

          {/* Newsletter Section */}
          <div id="newsletter" className="text-center space-y-8">
            <h3 className={`text-2xl font-serif text-white`}>Newsletter</h3>
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-8"
            >
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                  className={`
                    w-full bg-transparent border-b-2 pb-2 text-center outline-none text-lg
                    placeholder:text-zinc-500 transition-colors
                    border-zinc-800 text-white focus:border-zinc-600
                  `}
                />
              </div>
              <button
                type="submit"
                className={`
                  w-full max-w-md h-14 rounded-full text-lg font-medium transition-all duration-300
                  bg-white text-black hover:bg-zinc-200
                `}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 space-y-8">
          {/* Bottom Divider */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Copyright and Social Links */}
          <div className="text-center space-y-6">
            <p className={`text-sm text-zinc-500`}>
              Copyright © 2024 Naturalingo Inc
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/loïc-muhirwa-b3a940242/"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-2 rounded-full transition-colors
                  bg-white text-black hover:bg-zinc-200
                `}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/justmeloic/from-first-principles"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-2 rounded-full transition-colors
                  bg-white text-black hover:bg-zinc-200
                `}
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
