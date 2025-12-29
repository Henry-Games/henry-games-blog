// app/posts/[slug]/page.tsx
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

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
  console.log(slug);
  const post = getPostBySlug(slug);
  console.log(post);
  return (
    <article className="prose">
      <h1>{post.frontmatter.title}</h1>
      <MDXRemote source={post.content} />
    </article>
  );
}
