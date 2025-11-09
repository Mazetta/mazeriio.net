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
      
      {/* OpenGraph */}
      <meta content="website" property="og:type" />
      <meta content={props.title} property="og:title" />
      <meta content={props.description} property="og:description"/>
      <meta content="https://www.mazeriio.net" property="og:url" />
      <meta content="https://www.mazeriio.net/mushroom-128.png" property="og:image"/>
      <meta content="mazeriio.net" property="og:site_name"/>
      <meta content="#f83700" name="theme-color"/>

      {/* Post */}
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