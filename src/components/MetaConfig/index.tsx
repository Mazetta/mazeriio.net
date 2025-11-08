import { CONFIG } from "site.config"
import Head from "next/head"

export type MetaConfigProps = {
  title: string
  description: string
  type: "Website" | "Post" | "Page" | string
  date?: string
  image?: string
  url: string
}

const MetaConfig: React.FC<MetaConfigProps> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="robots" content="follow, index" />
      <meta charSet="UTF-8" />
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image || "https://www.mazeriio.net/mazeriio.png"} />
      <meta property="og:locale" content={CONFIG.lang} />
      <meta property="og:url" content={props.url} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="mazeriio.net" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image || "https://www.mazeriio.net/mazeriio.png"} />
      {props.type === "Post" && (
        <>
          <meta property="article:published_time" content={props.date} />
          <meta property="article:author" content={CONFIG.profile.name} />
        </>
      )}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Flux RSS de Mazeriio.net"
        href="https://www.mazeriio.net/api/rss-feed"
      />
    </Head>
  )
}

export default MetaConfig
