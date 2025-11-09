import type { NextApiRequest, NextApiResponse } from "next"
import { getPosts } from "src/apis/notion-client/getPosts"
import { filterPosts } from "src/libs/utils/notion/filterPosts"
import RSS from "rss"
import { CONFIG } from "site.config"

// Cache mémoire
let cachedFeed: string | null = null
let lastGenerated = 0
const CACHE_DURATION = 1000 * 60 * 5 // 5 minutes

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const now = Date.now()
    const forceRefresh = req.query.refresh === "true"

    // Si pas besoin de régénérer, renvoie le cache
    if (!forceRefresh && cachedFeed && now - lastGenerated < CACHE_DURATION) {
      res.setHeader("Content-Type", "application/rss+xml")
      return res.status(200).send(cachedFeed)
    }

    // Récupère les posts publics
    const posts = filterPosts(await getPosts(), {
      acceptStatus: ["Public", "PublicOnDetail"],
      //acceptType: ["Post"], // Je ne sais pas si je conserve ça, à voir
    })

    const siteUrl = CONFIG.link || "https://www.mazeriio.net"
    const feed = new RSS({
      title: CONFIG.blog.title || "Mazeriio.net",
      description: CONFIG.blog.description || "Flux RSS du blog Mazeriio.net",
      site_url: siteUrl,
      feed_url: `${siteUrl}/api/rss-feed`,
      language: "en",
    })

    // Ajoute les articles
    for (const post of posts) {
      feed.item({
        title: post.title,
        description: post.summary ?? "",
        url: `${siteUrl}/${post.slug}`,
        date: post.date.start_date,
      })
    }

    const xml = feed.xml({ indent: true })

    // Met à jour le cache
    cachedFeed = xml
    lastGenerated = now

    // Réponse RSS
    res.setHeader("Content-Type", "application/rss+xml")
    res.status(200).send(xml)
  } catch (err) {
    console.error("Erreur génération RSS :", err)
    res.status(500).send("Erreur lors de la génération du flux RSS")
  }
}
