"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import BlogPostArticle from "@/components/Content/BlogPostArticle";
import MarkdownRenderer from "@/components/Content/MarkdownRenderer";

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
    authorUrl: "https://www.linkedin.com/in/loïc-muhirwa-b3a940242/",

    content: {
      simple: "/content-test/engineering/post1/body_simple.md",
      detailed: "/content-test/engineering/post1/body.md",
    },
  },
};

export default function EngineeringPostPage({
  params,
}: EngineeringPostPageProps) {
  const [isSimplified, setIsSimplified] = useState(false);
  const { theme } = useTheme();
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchMarkdown = async () => {
      const post = posts[params.slug as keyof typeof posts];
      const contentUrl = isSimplified
        ? post.content.simple
        : post.content.detailed;
      const response = await fetch(contentUrl);
      const text = await response.text();
      setMarkdownContent(text);
    };

    fetchMarkdown();
  }, [isSimplified, params.slug]);

  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main
      className={`min-h-screen pt-24  ${
        theme === "dark" ? "bg-black" : "bg-light-mode-white"
      }`}
    >
      <div className="container max-w-4xl mx-auto px-6">
        <div className="relative mt-12 pt-1 duration-800">
          {/* Back button */}
          <div className="absolute left-0 -top-2 z-10">
            <Link href="/engineering">
              <Button
                variant="secondary"
                size="sm"
                className="gap-0 w-[65px]  rounded-full bg-gray-200 text-zinc-500 dark:text-zinc-400 dark:bg-zinc-900 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white"
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
            markdownContent={markdownContent} // Pass markdownContent as a prop
          />
        </div>
      </div>
    </main>
  );
}
