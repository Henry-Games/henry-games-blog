import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import Image from "next/image";
import { Atma } from "next/font/google";
import Link from "next/link";
import Header from "./components/header";

const atma = Atma({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-atma",
});

export default function Page() {
  const slugs = getPostSlugs();

  const posts = slugs.map((slug) => getPostBySlug(slug));
  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#100051] bg-[length:100%]">
      <Header />
      <div className="flex-1 w-full mt-6 p-[10px] flex flex-col md:flex-row items-stretch  gap-6  ">
        <div className="flex-1 w-full md:w-[40%] p-[10px] bg-[#ca9cf4] border-[#8a2be2]  border-[10px]">
          <h1 className="text-3xl " style={atma.style}>
            What is Henry Games?
          </h1>
          <p>
            Henry Games is a website i created to host party games me and my
            friends are making
          </p>
          <h1 className="text-3xl " style={atma.style}>
            Who Am I?
          </h1>
          <p>
            I am a beautiful brown indian 21 year old man with a loving family
            and a passion for video games. I study software engineering at the
            University of Auckland, play video games, hang out with my family,
            go bouldering and develop henry.games.
          </p>
        </div>

        <div className="flex-1 w-full md:w-[40%]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block"
            >
              <div className="bg-[#ca9cf4] border-[6px] border-[#8a2be2] p-4 hover:scale-[1.02] transition-transform">
                <h2 className="text-xl text-[#100051]" style={atma.style}>
                  {post.frontmatter.title}
                </h2>

                <p className="text-[#100051]/80 text-sm mt-1">
                  {post.frontmatter.description}
                </p>

                <p className="text-[#100051]/60 text-xs mt-2">
                  {post.frontmatter.date} · {post.frontmatter.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
