import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogThumbnailProps {
  article: {
    title: string;
    slug: string;
    image: string;
  };
}

const BlogThumbnail: React.FC<BlogThumbnailProps> = ({ article }) => {
  return (
    <div key={article.slug} className="group cursor-pointer">
      <Link href={`/blog/${article.slug}`} className="block">
        <div className="relative max-w-45 max-h-45 aspect-square mb-6 rounded-3xl overflow-hidden bg-muted shadow-custom dark:shadow-none">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <h2 className="text-xl  mb-4 font-open-sans tracking-[0.7px]">
        {article.title}
      </h2>
      <Button
        variant="ghost"
        asChild
        className="rounded-full hover:bg-[#C6A760] hover:text-white transition-colors px-6 py-2 bg-[#ebebeb] text-black border-none"
      >
        <Link href={`/blog/${article.slug}`}>Read more</Link>
      </Button>
    </div>
  );
};

export default BlogThumbnail;
