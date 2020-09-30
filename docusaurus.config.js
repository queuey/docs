module.exports = {
  title: "My Site",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Queuey", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Queuey Docs",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
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
