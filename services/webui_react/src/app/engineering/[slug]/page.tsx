"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import BlogPostArticle from "@/components/Content/BlogPostArticle";

interface EngineeringPostPageProps {
  params: {
    slug: string;
  };
}

// This would normally come from a database or CMS
const posts = {
  "running-in-parallel": {
    title: "Running in Parallel",
    author: "Loïc Muhirwa",
    content: {
      simple: `Parallel and sequential computation can be likened to two race scenarios: a relay race, where runners wait for a baton, and a simultaneous race, where all runners move at once. In computation, parallelism excels when tasks can be divided into independent subtasks, like calculating elements of a matrix-vector product, while sequential computation is necessary when steps depend on each other, such as in calculating Fibonacci numbers. This distinction has profound implications, particularly in fields like AI, where transformer architectures thrive on parallelization to achieve unprecedented performance.`,
      detailed: `Imagine two race scenarios involving 100 equally fast runners, each covering the same distance...`,
    },
  },
};

export default function EngineeringPostPage({
  params,
}: EngineeringPostPageProps) {
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
            <Link href="/engineering">
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
