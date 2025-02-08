import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogThumbnail from "@/components/Content/BlogThumbnail";

const articles = [
  {
    title: "Running in Parallel",
    slug: "running-in-parallel",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail-FA334FGq38I43AGGr9joI9p6vD2WAt.png",
  },
];

export default function EngineeringPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="mt-12 container">
        <h1 className="text-4xl font-open-sans md:text-5xl tracking-[2px] mb-4">
          Engineering
        </h1>
        <p className="text-lg text-muted-foreground mb-16">
          Something about the engineering page.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {articles.map((article) => (
            <BlogThumbnail key={article.slug} article={article} />
          ))}
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.slug} className="group cursor-pointer">
              <Link href={`/engineering/${article.slug}`} className="block">
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
                <Link href={`/engineering/${article.slug}`}>Read more</Link>
              </Button>
            </div>
          ))}
        </div>*/}
      </div>
    </main>
  );
}
