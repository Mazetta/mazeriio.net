import type { NextApiRequest, NextApiResponse } from "next"
import { getPosts } from "src/apis/notion-client/getPosts"
import RSS from "rss"
import { CONFIG } from "site.config"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Récupération directe des posts depuis Notion
    const posts = await getPosts()

    const siteUrl = CONFIG.link || "https://www.mazeriio.net"

    const feed = new RSS({
      title: CONFIG.blog.title || "Mazeriio.net",
      description: CONFIG.blog.description || "Flux RSS du blog Mazeriio.net",
      site_url: siteUrl,
      feed_url: `${siteUrl}/api/rss-feed`,
      language: "fr",
    })

    for (const post of posts) {
      feed.item({
        title: post.title,
        description: post.summary ?? "",
        url: `${siteUrl}/${post.slug}`,
        date: post.date.start_date,
      })
    }

    res.setHeader("Content-Type", "application/rss+xml")
    res.status(200).send(feed.xml({ indent: true }))
  } catch (err) {
    console.error("Erreur génération RSS :", err)
    res.status(500).send("Erreur lors de la génération du flux RSS")
  }
}
