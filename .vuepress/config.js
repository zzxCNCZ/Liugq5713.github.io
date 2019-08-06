module.exports = {
  title: "重学前端",
  description: "做了比不做好",
  themeConfig: {
    nav: [
      { text: "JAVASCRIPT", link: "/javascript/" },
      { text: "WEBAPI", link: "/guide/" }
    ],
    sidebar: {
      "/javascript/": ["", "variable"],
      "/": ["/javascript/"]
    }
  }
};
