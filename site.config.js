const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Mazeriio",
    image: "/mazeriio.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Writer, sometimes.",
    bio: "I love watching movies, shows and playing video games!",
    email: "contact@mazeriio.net",
    github: "mazetta",
    twitter: "@mazeriio",
    bluesky: "@mazeriio.net",
    linkedin: "",
    instagram: "",
  },
  projects: [
    {
      name: `RSS Feed API`,
      href: "https://www.mazeriio.net/api/rss-feed",
    },
  ],
  // blog setting (required)
  blog: {
    title: "The Word of Maz",
    emoji:"🍄",
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
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
