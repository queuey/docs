module.exports = {
  title: "My Site",
  tagline: "The tagline of my site",
  url: "https://queuey.github.io",
  favicon: "img/favicon.ico",
  baseUrl: "/docs/",
  organizationName: "queuey", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Queuey Docs",
      items: [
        {
          href: "https://www.queuey.dev",
          label: "Queuey",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "More",
          items: [
            {
              label: "Queuey.dev",
              to: "https://www.queuey.dev",
            },
            {
              label: "Feedback",
              to: "mailto:hello@queuey.dev",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Queuey</br> Built with <a target="_blank" href="https://v2.docusaurus.io/">Docusaurus</a>.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          homePageId: "intro",
          editUrl: "https://github.com/queuey/docs/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
