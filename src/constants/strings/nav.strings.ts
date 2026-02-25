export type NavItemType =
  | {
      key: string;
      label: string;
      href: string;
      children?: never;
    }
  | {
      key: string;
      label: string;
      href?: string; // optional if parent is clickable too
      children: readonly NavItemType[];
    };

export const NAV_SEARCH = "Search";

export const NAV_LINKS: readonly NavItemType[] = [
  { key: "engineering", label: "Engineering", href: "/engineering" },
  { key: "impact", label: "Impact", href: "/impact" },
  { key: "about", label: "About", href: "/about" },
  { key: "partner", label: "Partner", href: "/partner" },
  {
    key: "insights",
    label: "Insights",
    children: [
      { key: "guides", label: "Guides", href: "/guides" },
      { key: "resources", label: "Resources", href: "/resources" },
    ],
  },
] as const;

export const NAV_MAP: Record<string, NavItemType> = Object.fromEntries(
  NAV_LINKS.map((item) => [item.key, item]),
);
