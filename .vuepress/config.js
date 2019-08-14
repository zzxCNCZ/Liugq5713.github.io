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
            "error"
          ].map(i => `javascript/${i}`)
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
        "cros",
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
            "vue-base",
            "vue-base-computed",
            "vue-component",
            "vue-component-update",
            "vue-component-sfc",
            "vue-src-code-vfor",
            "vue-communication-store",
            "vue-qa"
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
          children: ["", "base", "bubble"].map(i => `sort/${i}`)
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
