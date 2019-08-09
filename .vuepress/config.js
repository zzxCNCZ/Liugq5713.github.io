module.exports = {
  title: "重学前端",
  base: "/fe/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  themeConfig: {
    logo: "/hero.png",
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    nav: [
      { text: "JAVASCRIPT", link: "/javascript/" },
      { text: "WEBAPI", link: "/guide/" }
    ],
    sidebar: {
      "/javascript/": [
        "",
        "variable",
        "type-number",
        "type-string",
        "type-array",
        "type-object"
      ],
      "/": [""]
    }
  }
};
