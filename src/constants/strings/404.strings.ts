export const NOT_FOUND_STRINGS = {
  meta: {
    title: "404 — Page not found",
    description: "This page doesn’t exist or may have moved.",
    robots: "noindex, nofollow",
    // Optional overrides if you want a special preview image for 404:
    // openGraph: { image: "/og/404.png" },
    // twitter: { image: "/og/404.png" },
  },

  content: {
    eyebrow: "404",
    heading: "Page not found",
    subheading: "The link may be broken, the page may have moved, or the route never existed.",
  },

  actions: {
    primary: { label: "Go home", href: "/" },
    secondary: { label: "Go back" },
  },
} as const;
