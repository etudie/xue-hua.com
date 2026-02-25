const year = new Date().getFullYear();

export const FOOTER = {
  copyright: {
    label: `© ${year} Xue Hua. Don't steal my stuff (✿´•‿•\`) `,
  },
  sections: [
    {
      label: "Explore",
      content: [
        { key: "start-here", label: "Start Here", href: "/engineering" },
        { key: "faq", label: "FAQ", href: "/engineering" },
        { key: "site-map", label: "Site Map", href: "/engineering" },
      ],
    },
    {
      label: "Legal",
      content: [
        { key: "terms", label: "Terms of Use", href: "/engineering" },
        { key: "privacy", label: "Privacy Policy", href: "/engineering" },
        {
          key: "belonging",
          label: "Belonging Statement",
          href: "/engineering",
        },
      ],
    },
    {
      label: "Social",
      content: [
        { key: "linkedin", label: "LinkedIn", href: "/engineering" },
        { key: "github", label: "GitHub", href: "/engineering" },
      ],
    },
  ],
};
