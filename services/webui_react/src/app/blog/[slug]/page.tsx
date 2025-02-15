"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import BlogPostArticle from "@/components/Content/BlogPostArticle";
import MarkdownRenderer from "@/components/Content/MarkdownRenderer";

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
    authorUrl: "https://www.linkedin.com/in/loïc-muhirwa-b3a940242/",
    content: {
      simple: "/content-test/blog/post3/body_simple.md",
      detailed: "/content-test/blog/post3/body.md",
    },
  },
  abstraction: {
    title: "Abstraction is the Bedrock of Human Cognition",
    author: "Loïc Muhirwa",
    authorUrl: "https://www.linkedin.com/in/loïc-muhirwa-b3a940242/",
    content: {
      simple: "/content-test/blog/post2/body_simple.md",
      detailed: "/content-test/blog/post2/body.md",
    },
  },
  "order-of-operations": {
    title: "The Importance of the Order of Operations in Achieving Goals",
    author: "Loïc Muhirwa",
    authorUrl: "https://www.linkedin.com/in/loïc-muhirwa-b3a940242/",
    content: {
      simple: "/content-test/blog/post1/body_simple.md",
      detailed: "/content-test/blog/post1/body.md",
    },
  },
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
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
            markdownContent={markdownContent} // Pass markdownContent as a prop
          />
        </div>
      </div>
    </main>
  );
}
