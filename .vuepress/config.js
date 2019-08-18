const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        algorithm: path.join(__dirname, "algorithm")
      }
    }
  },
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
      { text: "Fe", link: "/fe/" },
      { text: "Browser", link: "/browser/" },
      { text: "Lib", link: "/lib/" },
      { text: "Tool", link: "/tool/" },
      { text: "Algorithm", link: "/algorithm/" }
    ],
    sidebar: {
      "/fe/": [
        {
          title: "Javascript",
          collapsable: false,
          children: [
            "",
            "variable",
            "type-common-number",
            "type-common-string",
            "type-common-boolean",
            "type-reference-array",
            "type-reference-object",
            "logical-statement",
            "build-in-date",
            "build-in-json",
            "build-in-timer",
            "func-base",
            "func-promise",
            "design-patterns-oop",
            "error",
            'module'
          ].map(i => `javascript/${i}`)
        },
        {
          title: "CSS",
          collapsable: false,
          children: [
            "animation",
            "css",
            "cssExpandClickAreas",
            "cssFontFamily",
            "flex",
            "QA"
          ].map(i => `css/${i}`)
        },
        {
          title: "HTML",
          collapsable: false,
          children: ["crossorigin", "element", "html", "iframe", "select"].map(
            i => `html/${i}`
          )
        },
        {
          title: "其他",
          collapsable: false,
          children: [""]
        }
      ],
      "/browser/": [
        "",
        "viewport",
        "crp",
        "event",
        "uri",
        "storage",
        "canvas",
        "file",
        "formdata"
      ],
      "/tool/": [
        {
          title: "其他",
          collapsable: false,
          children: [
            "",
            "babel",
            "chrome",
            "eslint",
            "github",
            "husky",
            "nginx",
            "npm",
            "npmQA",
            "vscode",
            "webpack",
            "webpack-split-chunks",
            "webpackQA"
          ]
        },
        {
          title: "GIT",
          collapsable: false,
          children: [
            "",
            "base",
            "branch",
            "config",
            "knowledge",
            "log",
            "qa",
            "reset",
            "stash",
            "squash"
          ].map(i => `git/${i}`)
        }
      ],
      "/lib/": [
        {
          title: "Vue",
          collapsable: false,
          children: [
            "",
            "base",
            "base-computed",
            "component",
            "component-update",
            "component-sfc",
            "lifecycle",
            "src-code-vfor",
            "communication-store",
            "qa"
          ].map(i => `vue/${i}`)
        },
        {
          title: "其他",
          collapsable: false,
          children: [
            "",
            "element",
            "pwa",
            "react",
            "reactnative",
            "test",
            "typescript"
          ]
        }
      ],
      "/algorithm/": [
        {
          title: "排序",
          collapsable: false,
          children: ["", "bubble", "select"].map(i => `sort/${i}`)
        },
        {
          title: "题目",
          collapsable: false,
          children: [
            "",
            "search",
            "dp",
            "13RomanToInteger",
            "17LetterCombinationsOfAPhoneNumber"
          ]
        }
      ],
      "/": [""]
    }
  }
};
