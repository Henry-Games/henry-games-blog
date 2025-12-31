import { getPostSlugs } from "@/lib/mdx";

export default function Page() {
  const title = getPostSlugs();
  return (
    <div>
      <a href="/posts/firstpost">first post</a>
    </div>
  );
}
