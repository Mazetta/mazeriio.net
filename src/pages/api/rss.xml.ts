import type { NextApiRequest, NextApiResponse } from "next";
import RSS from "rss";
import { getPosts } from "src/apis/notion-client/getPosts"
import { filterPosts } from "src/libs/utils/notion/filterPosts"
import { CONFIG } from "site.config"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get all the posts
  const posts = filterPosts(await getPosts(), {
      acceptStatus: ["Public", "PublicOnDetail"],
    })

  // create an RSS feed w/ some information
  const siteUrl = CONFIG.link || "https://www.mazeriio.net"
  var feed = new RSS({
    title: CONFIG.blog.title || "mazeriio.net",
    feed_url: `${siteUrl}/api/rss.xml`,
    site_url: siteUrl,
    image_url: `${siteUrl}/favicon.ico`,
  });

  // Simply add each post to the feed
  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.summary ?? "",
      url: `${siteUrl}/${post.slug}`,
      date: post.createdTime,
      //date: post.date.start_date,
      // TODO: description/content?
    });
  });

  res.setHeader("Content-Type", "application/rss+xml");
  res.setHeader("x-clacks-overhead", "GNU Bram Moolenaar");
  res.write(feed.xml());
  res.end();
}