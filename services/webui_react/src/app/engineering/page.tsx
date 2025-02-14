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
    page: "engineering",
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
      </div>
    </main>
  );
}
