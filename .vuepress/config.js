module.exports = {
  title: "重学前端",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  base: "/fe/",
  themeConfig: {
    logo: "/hero.png",
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    nav: [
      { text: "Home", link: "/" },
      { text: "JavaScript", link: "/javascript/" },
      { text: "Browser", link: "/browser/" }
    ],
    sidebar: {
      "/javascript/": [
        "",
        "variable",
        "type-number",
        "type-string",
        "type-array",
        "type-object",
        "logical-statement",
        "build-in-date",
        "build-in-json",
        "build-in-timer"
      ],
      browser: [""],
      "/": [""]
    }
  }
};
