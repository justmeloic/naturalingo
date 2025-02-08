"use client";

import { useState } from "react";
import { useTheme } from "@/providers/theme-provider";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  //const [isSubmitting, setIsSubmitting] = useState(false); // No longer needed
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //setIsSubmitting(true); // No longer needed - useFormStatus handles this

    const formData = new FormData(event.currentTarget);
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      console.error("Formspree endpoint is not defined!");
      toast.error("Form submission is not configured correctly."); // You might want to import and use `toast` here too.
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        event.currentTarget.reset();
        toast.success("Message Sent!");
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        toast.error(
          errorData.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again."); // Consistent error handling
    } // Removed finally block, useFormStatus handles state
  }

  function SubmitButton() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
                w-full max-w-xs h-14 rounded-full text-lg font-medium transition-all duration-300
                bg-[#C6A760] text-white  disabled:opacity-70 relative overflow-hidden
                ${
                  pending
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:bg-[#b39555]"
                }
                ${isHovered ? "scale-105" : ""}

              `}
      >
        <div className="relative h-full w-full flex items-center justify-center">
          {/* Default Text */}
          <span
            className={`absolute left-1/2 -translate-x-1/2 transition-transform duration-300 ${
              pending
                ? "translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            Send Message
          </span>
          {/* Loading Spinner */}
          <span
            className={`absolute left-1/2 -translate-x-1/2 transition-transform duration-300 ${
              pending
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            <Loader2 className="h-5 w-5 animate-spin" />
          </span>
        </div>
      </button>
    );
  }

  return (
    <section
      id="contact"
      className={`py-24 ${
        theme === "dark" ? "bg-black" : "bg-light-mode-white"
      }`}
    >
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2
            //className={`text-2xl font-open-sans font-[20] tracking-[2px] text-white`}
            className={`text-5xl font-open-sans font-[10] tracking-[2px] mb-4 ${
              theme === "dark" ? "text-white" : "text-zinc-500"
            }`}
          >
            Get in touch
          </h2>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-400"
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
                    ? "bg-zinc-900 text-white placeholder:text-zinc-500 focus:shadow-custom"
                    : "bg-white text-zinc-800 placeholder:text-zinc-400 shadow-custom focus:shadow-custom"
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
                    ? "bg-zinc-900 text-white placeholder:text-zinc-500 focus:shadow-custom"
                    : "bg-white text-zinc-800 placeholder:text-zinc-400 shadow-custom focus:shadow-custom"
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
                  ? "bg-zinc-900 text-white placeholder:text-zinc-500 focus:shadow-custom"
                  : "bg-white text-zinc-800 placeholder:text-zinc-400 shadow-custom focus:shadow-custom"
              }
            `}
          />
          <div className="flex justify-center mt-8">
            {/* Replaced the original button with SubmitButton */}
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}
