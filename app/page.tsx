import { getPostSlugs } from "@/lib/mdx";

export default function Page() {
  const title = getPostSlugs();
  return (
    <div>
      <h1>Hello, Next.js Page!</h1>
      <a href="/posts/firstpost">first post</a>
    </div>
  );
}
