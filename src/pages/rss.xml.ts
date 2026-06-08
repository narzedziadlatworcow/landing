import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog"))
    .filter((p) => !(import.meta.env.PROD && p.data.draft))
    .sort(
      (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
    );

  return rss({
    title: "Blog · Narzędzia dla Twórców",
    description:
      "Strategia, kierunek i konkretne wskazówki dla twórców YouTube, TikToka i Instagrama. Bez korpo-bełkotu, po ludzku.",
    site: context.site ?? "https://narzedziadlatworcow.pl",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
      author: post.data.author,
    })),
    customData: "<language>pl-pl</language>",
  });
}
