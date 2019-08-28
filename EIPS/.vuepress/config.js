module.exports = {
  title: "以太坊改进提案 EIPs",
  description: "以太坊改进提案（EIPs）描述了以太坊平台的标准，包括核心协议规范，客户端API和合约标准。",
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
        title: "核心提案",
        collapsable: true,
        children: [
          "/core",
          "/eip-7",
          "/eip-2",
          "/eip-100",
          "/eip-140",
          "/eip-141",
          "/eip-145",
          "/eip-150",
          "/eip-155",
          "/eip-160",
          "/eip-161",
          "/eip-170",
          "/eip-196",
          "/eip-197",
          "/eip-198",
          "/eip-211",
          "/eip-214",
          "/eip-225",
          "/eip-649",
          "/eip-658",
          "/eip-1014",
          "/eip-1052",
          "/eip-1234",
          "/eip-1283",
          "/eip-1344"
        ]
      },
      {
        title: "接口提案",
        collapsable: true,
        children: [
          "/interface"
      	]
      },
      {
        title: "网络提案",
        collapsable: true,
        children: [
          "/networking"
      	]
      },
      {
        title: "ERC 应用标准提案",
        collapsable: true,
        children: [
          "/erc"
      	]
      },
      {
        title: "过程提案(Meta)",
        collapsable: true,
        children: [
          "/meta"
      	]
      },
      {
        title: "信息提案(Informational)",
        collapsable: true,
        children: [
          "/informational"
      	]
      }
    ]
  }
}
