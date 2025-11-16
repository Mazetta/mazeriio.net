const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Mazeriio",
    image: "/mazeriio-logo.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "writer, sometimes.",
    bio: "I love watching series, movies and playing video games.",
    rss: "https://www.mazeriio.net/api/rss.xml",
    email: "contact@mazeriio.net",
    bluesky: "@mazeriio.net",
    twitter: "Mazeriio",
    youtube: "@Mazeriio",
    reddit: "Mazeriio",
    github: "mazetta",
  },
  
  // blog setting (required)
  blog: {
    title: "The Word of Maz",
    emoji:"🍄",
    icon: "/favicon.ico",
    description: "Everything you need to know about myself!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://www.mazeriio.net",
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
