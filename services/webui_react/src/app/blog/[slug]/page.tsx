"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import BlogPostArticle from "@/components/Content/BlogPostArticle";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// This would normally come from a database or CMS
const posts = {
  "financial-literacy": {
    title: "In a Capitalist World, Financial Literacy Is Not Optional",
    author: "Loïc Muhirwa",
    content: {
      simple: `To "matter" means to have impact and influence, affecting outcomes and shaping events. In a capitalist society, where money and markets permeate nearly every aspect of life, financial literacy—the knowledge and skills to manage financial resources effectively—inherently matters. In a capitalist system, financial literacy directly impacts individuals' ability to secure necessities, achieve long-term goals, and navigate the complexities of the economy, making it not just advantageous but essential for financial security and overall well-being.`,
      detailed: `What does it mean for something "to matter"? This seemingly simple question has profound implications; in everyday language, "to matter" implies importance, significance, or consequence. But let's be more precise. For the purpose of this discussion, we'll define "to matter" as having impact and influence. Something matters if it can demonstrably affect outcomes, shape events, or alter the course of things.`,
    },
  },
  abstraction: {
    title: "Abstraction is the Bedrock of Human Cognition",
    author: "Loïc Muhirwa",
    content: {
      simple: `Abstraction, the ability to simplify complex information by focusing on key features, is crucial for navigating an increasingly complex world. We use it constantly in language, maps, scientific models, and computer programming. This skill is closely tied to general intelligence and can be improved by looking for patterns, simplifying information, using analogies, engaging in creative activities, and studying diverse subjects.`,
      detailed: `Abstraction, the process of simplifying complex information by focusing on essential features while ignoring irrelevant details, is not just a cognitive tool; it's arguably the most important one we have...`,
    },
  },
  "order-of-operations": {
    title: "The Importance of the Order of Operations in Achieving Goals",
    author: "Loïc Muhirwa",
    content: {
      simple: `Doing things in the right order is really important for reaching your goals.

Doing things in the wrong order can make it take much longer or even stop you from succeeding.

To figure out the best order, start with the most basic tasks that everything else depends on.`,
      detailed: `When striving to achieve a goal, many of us instinctively create a list of steps or tasks to guide us toward success...`,
    },
  },
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [isSimplified, setIsSimplified] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main
      className={`min-h-screen pt-24 ${
        theme === "dark" ? "bg-black" : "bg-light-mode-white"
      }`}
    >
      <div className="container max-w-4xl mx-auto px-6">
        <div className="relative mt-12 pt-1">
          {/* Back button */}
          <div className="absolute left-0 -top-2 z-10">
            <Link href="/blog">
              <Button
                variant="secondary"
                size="sm"
                className="gap-0 w-[65px]  rounded-full bg-gray-200 text-zinc-500 dark:text-zinc-400 dark:bg-zinc-900 hover:bg-[#C6A760] hover:text-white dark:hover:bg-[#C6A760] dark:hover:text-white"
              >
                Back
              </Button>
            </Link>
          </div>

          {/* Blog Post Article Component */}
          <BlogPostArticle
            post={post}
            isSimplified={isSimplified}
            setIsSimplified={setIsSimplified}
          />
        </div>
      </div>
    </main>
  );
}
