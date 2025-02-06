"use client";

import { HeroSection } from "@/components/Home/hero-section";
import { BlogPreviews } from "@/components/Home/blog-preview";
import { ContactForm } from "@/components/Home/contact-form";
import { useTheme } from "@/providers/theme-provider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className={`${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <HeroSection />
      <BlogPreviews />
      <ContactForm />
    </main>
  );
}
