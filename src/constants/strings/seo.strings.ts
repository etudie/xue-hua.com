export const SEO_DEFAULTS = {
  siteName: "Xue Hua",
  titleTemplate: "%s | Xue Hua",
  defaultDescription: "Engineer, builder, mentor.",

  robots: "index, follow",

  openGraph: {
    type: "website",
    image: "/og/default-og.png",
  },

  twitter: {
    card: "summary_large_image",
    image: "/og/default-og.png",
  },
} as const;

export type SeoDefaults = typeof SEO_DEFAULTS;
