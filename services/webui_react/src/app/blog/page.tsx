import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const articles = [
  {
    title: "The Order of Operations",
    slug: "order-of-operations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail-N7Iuw8wVIKVgYOtdMha1A8TXa1xkFi.png",
  },
  {
    title: "Abstraction",
    slug: "abstraction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail-dcH7BZKXdfP1oY3MsKTlfQ6X3K52mc.png",
  },
  {
    title: "Financial Literacy Matters",
    slug: "financial-literacy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail-1NC6lantvSmJJPILYBUPh2ibRvebRb.png",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground mb-16">
          These first three articles should be a primer for all content on this website. This is because the{" "}
          <span className="text-[#C6A760]">order of operations</span> matters.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.slug} className="group cursor-pointer">
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative aspect-square mb-6 rounded-3xl overflow-hidden bg-muted shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-none">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </Link>
              <h2 className="text-xl font-medium mb-4">{article.title}</h2>
              <Button
                variant="ghost"
                asChild
                className="rounded-full hover:bg-[#C6A760] hover:text-white transition-colors px-6 py-2 bg-[#ebebeb] text-black border-none"
              >
                <Link href={`/blog/${article.slug}`}>Read more</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
