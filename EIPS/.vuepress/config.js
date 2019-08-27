module.exports = {
  title: "以太坊改进提案 EIPs",
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
    docsDir: "EIPS",
    docsBranch: "lbc",
    editLinkText: '帮助完善文档',
    lastUpdated: true,
    algolia: {
      apiKey: '',
      indexName: '',
      debug: false
    },
    nav: [
      { text: "首页", link: "https://learnblockchain.cn" },
      { text: "区块链文档中心", link: "https://learnblockchain.cn/docs/" },
      { text: "En", link: "https://eips.ethereum.org" },
    ],
    sidebar: [
      {
        title: "EIPs",
        collapsable: true,
        children: [
          "/all",
        ]
      },
      {
        title: "Core",
        collapsable: true,
        children: [
        ]
      },
      {
        title: "ERC",
        collapsable: true,
        children: [
      	]
      }
    ]
  }
}
