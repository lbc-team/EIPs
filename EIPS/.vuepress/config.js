module.exports = {
  title: "Ethereum Improvement Proposals",
  description: "Ethereum Improvement Proposals (EIPs) describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards.",
  ga: "",
  dest: "./dist/docs",
  base: "/docs/eips/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: "lbc-team/EIPs",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "lbc",
    editLinkText: '帮助完善文档',
    lastUpdated: true,
    algolia: {
      apiKey: 'a6e2f64347bb826b732e118c1366819a',
      indexName: 'cosmos_network',
      debug: false
    },
    nav: [
      { text: "首页", link: "https://learnblockchain.cn" },
      { text: "区块链文档中心", link: "https://learnblockchain.cn/docs/" },
      { text: "En", link: "https://eips.ethereum.org" },
    ],
    sidebar: [
      {
        title: "SDK 概述",
        collapsable: true,
        children: [
          "/intro/",
          "/intro/sdk-app-architecture",
          "/intro/sdk-design",
          "/intro/ocap"
        ]
      },
      {
        title: "开发教程",
        collapsable: true,
        children: [
          "/tutorial/",
          "/tutorial/01-app-design",
          "/tutorial/02-app-init",
          "/tutorial/03-types",
          "/tutorial/04-keeper",
          "/tutorial/05-msgs-handlers",
          "/tutorial/06-set-name",
          "/tutorial/07-buy-name",
          "/tutorial/08-queriers",
          "/tutorial/09-codec",
          "/tutorial/10-cli",
          "/tutorial/11-rest",
          "/tutorial/12-app-complete",
          "/tutorial/13-entrypoint",
          "/tutorial/14-dep",
          "/tutorial/15-build-run",
          "/tutorial/16-run-rest"
        ]
      },
      {
        title: "客户端",
        collapsable: true,
        children: [
      	  "/clients/",
          "/clients/cli",
          "/clients/service-providers",
      	  "/clients/lite/", // this renders the readme
      	  "/clients/lite/getting_started",
      	  "/clients/lite/specification"
      	]
      }
    ]
  }
}
