"use client";

import { useState } from "react";
import { useTheme } from "@/providers/theme-provider";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xbjwkzqv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        event.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className={`py-24 ${theme === "dark" ? "bg-black" : "bg-[#fafafa]"}`}
    >
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-serif mb-4 ${
              theme === "dark" ? "text-white" : "text-zinc-700"
            }`}
          >
            Get in touch
          </h2>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            We read every email we receive.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className={`
                w-full px-6 h-14 rounded-full text-lg outline-none transition-shadow duration-300
                ${
                  theme === "dark"
                    ? "bg-zinc-900 text-white placeholder:text-zinc-500 focus:shadow-[0_0_30px_rgba(198,167,96,0.2)]"
                    : "bg-white text-zinc-800 placeholder:text-zinc-400 shadow-[0_10px_20px_rgba(0,0,0,0.05)] focus:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
                }
              `}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={`
                w-full px-6 h-14 rounded-full text-lg outline-none transition-shadow duration-300
                ${
                  theme === "dark"
                    ? "bg-zinc-900 text-white placeholder:text-zinc-500 focus:shadow-[0_0_30px_rgba(198,167,96,0.2)]"
                    : "bg-white text-zinc-800 placeholder:text-zinc-400 shadow-[0_10px_20px_rgba(0,0,0,0.05)] focus:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
                }
              `}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
            className={`
              w-full px-6 py-4 rounded-[2rem] text-lg outline-none transition-shadow duration-300 resize-none
              ${
                theme === "dark"
                  ? "bg-zinc-900 text-white placeholder:text-zinc-500 focus:shadow-[0_0_30px_rgba(198,167,96,0.2)]"
                  : "bg-white text-zinc-800 placeholder:text-zinc-400 shadow-[0_10px_20px_rgba(0,0,0,0.05)] focus:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
              }
            `}
          />
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full max-w-md h-14 rounded-full text-lg font-medium transition-all duration-300
                bg-[#C6A760] text-white hover:bg-[#b39555] disabled:opacity-50
                ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}
              `}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
