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
      {/* og */}
      <meta property="og:type" content={props.type} />
      <meta property="og:title" content="test" />
      <meta property="og:description" content="test" />
      <meta property="og:url" content="mazeriio.net" />
      {CONFIG.lang && <meta property="og:locale" content={CONFIG.lang} />}
      {props.image && <meta property="og:image" content="https://www.mazeriio.net/icon-128.png" />}
      {/* twitter */}
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content="test" />
      <meta name="twitter:card" content="summary_large_image" />
      {props.image && <meta name="twitter:image" content="https://www.mazeriio.net/icon-128.png" />}
      {/* post */}
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