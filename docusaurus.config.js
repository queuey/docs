module.exports = {
  title: "Queuey Documentation",
  tagline:
    "Documentation for https://queuey.dev, a clever waitlist API platform.",
  favicon: "img/favicon.ico",
  organizationName: "queuey", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  url: "https://queuey.github.io",
  baseUrl: "/docs/", // Base URL for your project. For projects hosted on GitHub pages, it follows the format "/projectName/". For https://github.com/facebook/docusaurus, baseUrl is /docusaurus/.
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
          editUrl: "https://github.com/queuey/docs/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
