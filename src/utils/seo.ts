type OpenGraphMeta = {
  title?: string;
  description?: string;
  type?: string;
  image?: string; // path like "/og/foo.png" or absolute
};

type TwitterMeta = {
  card?: "summary" | "summary_large_image" | "app" | "player";
  title?: string;
  description?: string;
  image?: string;
};

export type SeoMeta = {
  title?: string;
  description?: string;
  robots?: string;
  canonical?: string;

  openGraph?: OpenGraphMeta;
  twitter?: TwitterMeta;
};

export function mergeSeo(defaults: any, page: SeoMeta): Required<SeoMeta> {
  const title = page.title ?? defaults.siteName;
  const description = page.description ?? defaults.defaultDescription;

  const resolvedTitle = defaults.titleTemplate?.includes("%s")
    ? defaults.titleTemplate.replace("%s", title)
    : title;

  const openGraph = {
    type: defaults.openGraph?.type,
    image: defaults.openGraph?.image,
    ...page.openGraph,
    title: page.openGraph?.title ?? title,
    description: page.openGraph?.description ?? description,
  };

  const twitter = {
    card: defaults.twitter?.card,
    image: defaults.twitter?.image,
    ...page.twitter,
    title: page.twitter?.title ?? title,
    description: page.twitter?.description ?? description,
  };

  return {
    title: resolvedTitle,
    description,
    robots: page.robots ?? defaults.robots,
    canonical: page.canonical ?? "",
    openGraph,
    twitter,
  };
}

/**
 * If you want absolute URLs for images/canonical in meta tags.
 * In Astro pass Astro.site to this.
 */
export function toAbsoluteUrl(
  site: URL | undefined,
  maybePath: string,
): string {
  if (!maybePath) return "";
  try {
    // already absolute
    return new URL(maybePath).toString();
  } catch {
    // relative path -> make absolute
    return site
      ? new URL(maybePath.replace(/^\//, ""), site).toString()
      : maybePath;
  }
}
