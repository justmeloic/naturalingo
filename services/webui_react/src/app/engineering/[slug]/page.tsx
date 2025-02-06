"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "@/providers/theme-provider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft } from "lucide-react"
import Script from "next/script"

interface EngineeringPostPageProps {
  params: {
    slug: string
  }
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
}

export default function EngineeringPostPage({ params }: EngineeringPostPageProps) {
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
    <>
      <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" strategy="lazyOnload" />
      <main className={`min-h-screen pt-24 ${theme === "dark" ? "bg-black" : "bg-zinc-50"}`}>
        <div className="container max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Back button */}
            <div className="absolute left-0 -top-2 z-10">
              <Link href="/engineering">
                <Button variant="secondary" size="sm" className="gap-2 rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
              </Link>
            </div>

            {/* Article card */}
            <article
              className={`
              relative rounded-[2rem] p-12 md:p-16
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
                        __html: post.content.detailed
                          .replace(/\n\n/g, "<br><br>")
                          .replace(
                            /\[([^\]]+)\]$$([^)]+)$$/g,
                            '<a href="$2" class="text-[#C6A760] hover:text-[#C6A760]/80">$1</a>',
                          ),
                      }}
                    />
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
