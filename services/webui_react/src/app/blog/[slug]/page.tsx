"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "@/providers/theme-provider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
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
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [isSimplified, setIsSimplified] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main className={`min-h-screen pt-24 ${theme === "dark" ? "bg-black" : "bg-zinc-50"}`}>
      <div className="container max-w-4xl mx-auto px-6">
        <div className="relative">
          {/* Back button */}
          <div className="absolute left-0 -top-2 z-10">
            <Link href="/blog">
              <Button variant="secondary" size="sm" className="gap-2 rounded-full">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>

          {/* Article card */}
          <article
            className={`
            relative rounded-[2rem] p-12 md:p-16 mt-8
            ${
              theme === "dark"
                ? "bg-zinc-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                : "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            }
          `}
          >
            {/* Simplify toggle */}
            <div className="absolute right-8 top-8 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Simplify</span>
              <Switch
                checked={isSimplified}
                onCheckedChange={setIsSimplified}
                className={`${theme === "dark" ? "bg-[#C6A760]/20" : "bg-zinc-200"}`}
              />
            </div>

            {/* Article header */}
            <header className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight font-normal">{post.title}</h1>
              <p className="text-muted-foreground italic font-normal">{post.author}</p>
            </header>

            {/* Article content */}
            <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
              <div className={`${isSimplified ? "text-xl" : ""} font-light`}>
                {isSimplified ? (
                  post.content.simple
                ) : (
                  <div
                    className="markdown"
                    dangerouslySetInnerHTML={{
                      __html: post.content.detailed.replace(/\n\n/g, "<br><br>"),
                    }}
                  />
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
