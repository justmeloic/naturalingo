"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

interface BlogPost {
  title: string;
  subtitle: string;
  excerpt: string;
  image: string;
  slug: string;
  category: string;
  imagePosition?: "left" | "right";
}

function BlogPostPreview({ post }: { post: BlogPost }) {
  const { theme } = useTheme();

  const addQuotes = (text: string) => {
    return `"${text}"`;
  };

  return (
    <div
      className={`grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 items-stretch ${
        post.imagePosition === "right" ? "md:grid-cols-[2fr_1fr]" : ""
      } transition-colors duration-500`}
    >
      {post.imagePosition === "right" && (
        <div
          className={`p-4 md:p-8 rounded-3xl h-full flex flex-col justify-between ${
            theme === "dark"
              ? "bg-zinc-900"
              : "bg-white shadow-custom dark:shadow-none"
          } transition-colors duration-500`}
        >
          <div className="space-y-3 md:space-y-6">
            <h3 className="text-accent font-medium font-montserrat tracking-[2px] lowercase mb-4 ml-4 md:tracking-[2px] text-sm md:text-base  md:mb-8 wow fadeInUp">
              {post.category}
            </h3>
            <h2
              className={`text-xl md:text-3xl font-open-sans tracking-[1.2px] font-[70] ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              } transition-colors duration-500`}
            >
              {post.subtitle}
            </h2>
            <p
              className={`hidden sm:block text-sm md:text-base text-muted-foreground ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              } transition-colors duration-500`}
            >
              {post.excerpt}
            </p>
            {/*<Button
              variant="ghost"
              className={`text-sm md:text-base rounded-full hover:bg-accent hover:text-white transition-colors px-4 md:px-6 py-1 md:py-2 ${
                theme === "dark"
                  ? "bg-zinc-800 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              } border-none`}
              asChild
            >
              <Link href={`/blog/${post.slug}`}>Read more</Link>
            </Button>*/}
          </div>
        </div>
      )}
      <div
        className={`${
          post.imagePosition === "right" ? "order-last" : ""
        } h-full hidden sm:block`}
      >
        <div className="relative h-full rounded-3xl overflow-hidden group shadow-custom dark:shadow-none">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </div>
      {post.imagePosition !== "right" && (
        <div
          className={`p-4 md:p-8 rounded-3xl h-full flex flex-col justify-between ${
            theme === "dark"
              ? "bg-zinc-900"
              : "bg-white shadow-custom dark:shadow-none"
          } transition-colors duration-500`}
        >
          <div className="space-y-3 md:space-y-6">
            <h3 className="text-accent font-medium font-montserrat tracking-[2px] lowercase mb-4  ml-4 md:tracking-[2px] text-sm md:text-base  md:mb-8 wow fadeInUp">
              {post.category}
            </h3>
            <h2
              className={`text-xl md:text-3xl font-open-sans tracking-[1.2px] font-[70] ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              } transition-colors duration-500`}
            >
              {post.subtitle}
            </h2>
            <p
              className={`hidden sm:block text-sm md:text-base text-muted-foreground ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              } transition-colors duration-500`}
            >
              {post.excerpt}
            </p>
            {/*<Button
              variant="ghost"
              className={`text-sm md:text-base rounded-full hover:bg-accent hover:text-white transition-colors px-4 md:px-6 py-1 md:py-2 ${
                theme === "dark"
                  ? "bg-zinc-800 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              } border-none`}
              asChild
            >
              <Link href={`/blog/${post.slug}`}>Read more</Link>
            </Button>*/}
          </div>
        </div>
      )}
    </div>
  );
}

export function BlogPreviews() {
  const { theme } = useTheme();
  const posts: BlogPost[] = [
    {
      title: "Strategic Consultation",
      category: "Strategic Consultation",
      subtitle:
        "Strategic Guidance for Your Enterprise NLP Journey in the Cloud",
      excerpt:
        "Not sure where to start or how to scale your NLP initiatives? Our experts provide strategic consultation focused on B2B enterprises. We help you identify high-impact NLP use cases, develop a robust data strategy, choose the right cloud infrastructure, and create a roadmap for successful AI adoption and integration.",
      image: "/images/thumbnail_consultation.jpg",
      slug: "order-of-operations",
      imagePosition: "right",
    },
    {
      title: "Intelligent Automation",
      category: "Intelligent Automation",
      subtitle:
        "Automate Complex Workflows with Natural Language Understanding",
      excerpt:
        "Identify and automate manual, language-intensive tasks across your enterprise. Our NLP solutions can understand and process text within your existing workflows, triggering actions, routing information, and significantly reducing manual effort in areas like compliance, data entry, and report generation.",
      image: "/images/thumbnail_automation.jpg",
      slug: "abstraction",
    },
    {
      title: "Custom Models",
      category: "Custom Models",
      subtitle: "NLP Models for Your Unique Enterprise Data",
      excerpt:
        "Generic NLP models often fall short. We build, train, and deploy custom Natural Language Processing models tailored to your specific industry, data, and business challenges. From sentiment analysis of customer feedback to complex information extraction from proprietary documents, our models deliver superior accuracy and relevance.",
      image: "/images/thumbnail_custom_models.jpg",
      slug: "financial-literacy",
      imagePosition: "right",
    },
  ];

  return (
    <section
      id="blog-previews"
      className={`py-12 md:py-24 ${
        theme === "dark" ? "bg-black" : "bg-light-mode-white"
      }`}
    >
      <div className="container">
        <div className="space-y-12 md:space-y-24">
          {posts.map((post, index) => (
            <div key={index} className="max-w-[1150px] mx-auto">
              <BlogPostPreview post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
