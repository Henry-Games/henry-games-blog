// app/rss/route.ts
import { getPostSlugs, getPostBySlug } from "@/lib/mdx";
import RSS from "rss";

export async function GET() {
  const site_url = "https://blog.henry.games";
  const feedOptions = {
    title: "Henry Games Blog",
    description: "Welcome to the Henry Games Blog!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: new Date(),
  };
  const feed = new RSS(feedOptions);

  getPostSlugs().forEach((slug) => {
    const post = getPostBySlug(slug);

    feed.item({
      title: post.frontmatter.title,

      description: post.frontmatter.description,
      url: `${site_url}/posts/${post.slug}`,
      date: new Date(post.frontmatter.date),
      author: post.frontmatter.author,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
