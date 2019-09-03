const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        algorithm: path.join(__dirname, 'algorithm')
      }
    }
  },
  title: '重学前端',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  base: '/fe/',
  themeConfig: {
    logo: '/hero.png',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fe', link: '/fe/' },
      { text: 'Browser', link: '/browser/' },
      { text: 'Lib', link: '/lib/' },
      { text: 'Tool', link: '/tool/' },
      { text: 'Algorithm', link: '/algorithm/' }
    ],
    sidebar: {
      '/fe/': [
        {
          title: 'Javascript',
          collapsable: false,
          children: [
            '',
            'variable',
            'type-common-number',
            'type-common-string',
            'type-common-boolean',
            'type-reference-array',
            'type-reference-object',
            'logical-statement',
            'build-in-date',
            'build-in-json',
            'build-in-timer',
            'build-in-regx',
            'func-base',
            'func-promise',
            'design-patterns-oop',
            'error',
            'module',
            'deep-call-apply'
          ].map(i => `javascript/${i}`)
        },
        {
          title: 'CSS',
          collapsable: false,
          children: ['animation', 'px', 'css', 'cssExpandClickAreas', 'cssFontFamily', 'flex', 'QA'].map(i => `css/${i}`)
        },
        {
          title: 'HTML',
          collapsable: false,
          children: ['crossorigin', 'element', 'image', 'html', 'iframe', 'select'].map(i => `html/${i}`)
        },
        {
          title: 'Node',
          collapsable: false,
          children: ['', 'path', 'module', 'cli'].map(i => `node/${i}`)
        },
        {
          title: '其他',
          collapsable: false,
          children: ['']
        }
      ],
      '/browser/': ['', 'viewport', 'router', 'dns', 'crp', 'event', 'uri', 'storage', 'canvas', 'file', 'formdata', 'websafe', 'cache', 'crossorigin'],
      '/tool/': [
        {
          title: '其他',
          collapsable: false,
          children: ['', 'babel', 'chrome', 'eslint', 'github', 'husky', 'nginx', 'npm', 'vscode', 'webpack', 'webpack-split-chunks', 'webpackQA']
        },
        {
          title: 'GIT',
          collapsable: false,
          children: ['', 'knowledge', 'base', 'branch', 'config', 'log', 'reset', 'stash'].map(i => `git/${i}`)
        }
      ],
      '/lib/': [
        {
          title: 'Vue',
          collapsable: false,
          children: ['', 'base', 'base-computed', 'component', 'component-update', 'component-sfc', 'lifecycle', 'src-code-vfor', 'communication-store', 'qa'].map(i => `vue/${i}`)
        },
        {
          title: '其他',
          collapsable: false,
          children: ['', 'element', 'pwa', 'react', 'reactnative', 'test', 'typescript']
        }
      ],
      '/algorithm/': [
        {
          title: '排序',
          collapsable: false,
          children: ['', 'bubble', 'select', 'insertion', 'shell'].map(i => `sort/${i}`)
        },
        {
          title: '暴力求解',
          collapsable: false,
          children: ['', 'simple', 'all-permutations'].map(i => `violence/${i}`)
        },
        {
          title: '题目',
          collapsable: false,
          children: ['', 'search', 'dp', '13RomanToInteger', '17LetterCombinationsOfAPhoneNumber']
        }
      ],
      '/': ['']
    }
  }
}
