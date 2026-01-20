import Header from "@/app/components/header";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Atma } from "next/font/google";
import Image from "next/image";

const atma = Atma({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-atma",
});

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return (
    <div className="h-full w-full">
      <Header />
      <article className="min-h-screen bg-[#100051] flex justify-center px-4 py-10">
        {/* Outer frame */}
        <div className="w-full max-w-4xl">
          {/* Card */}
          <article className="bg-[#ca9cf4] border-[10px] border-[#8a2be2]">
            {/* Header */}
            <header
              className="border-b-[10px] border-[#8a2be2] px-8 py-6"
              style={atma.style}
            >
              <h1 className="text-4xl text-[#100051]">
                {post.frontmatter.title}
              </h1>

              {post.frontmatter.date && (
                <p className="mt-2 text-[#100051]/70 text-sm">
                  {post.frontmatter.date}
                  {post.frontmatter.author && <> · {post.frontmatter.author}</>}
                </p>
              )}
            </header>

            {/* Content */}
            <div className="px-8 py-10 bg-[#ca9cf4]">
              <div className="prose prose-purple max-w-none">
                <MDXRemote source={post.content} />
              </div>
            </div>
          </article>
        </div>
      </article>
    </div>
  );
}
