# 中文版以太坊改进提案

该[中文版](https://learnblockchain.cn/docs/eips/)文档由[深入浅出区块链](https://learnblockchain.cn/docs/eips/)组织翻译。

## 目录结构说明

```html
├── EIPS   //英文EIP内容，同步子官方EIPS
├── assets //英文EIP内容资源，同步子官方EIPS
├── cn     //中文EIP内容，翻译时请在次目录内翻译
├── LICENSE //协议
├── Gruntfile.js //部署脚本配置
├── .travis.yml //travis配置
├── README.md
├── config.toml //hugo 配置
└── site //hugo 网页生成部署细节
```


## 如何在本地编辑

首先，需要安装静态网站生成工具 [hugo](https://gohugo.io/getting-started/installing/)。

再 git clone 项目到本地：

```sh
git clone git@github.com:lbc-team/EIPs.git
```

在本地运行程序，浏览文档：

```sh
cd EIPs
hugo server
```

此时，可以在浏览器中打开 [http://localhost:1313/docs/eips](http://localhost:1313/docs/eips) 浏览文档。

## 如何导入或更新以太坊官方EIPS库

添加 remote 库，只需要关注 master 分支。

```sh
git remote add  -t master OfficeEIPS https://github.com/ethereum/EIPs.git
```

拉取最新 master 分支内容到本地：

```sh
git fetch --depth 1 OfficeEIPS master
```

这里，并不关注commint 信息。
我们仅仅需要关注EIPS信息，因此过滤掉所有不相干内容，只提取 EIPS 目录文件和资产。

```sh
git checkout OfficeEIPS/master
git subtree split -q --squash --prefix=EIPS --annotate="[office eips] " --rejoin -b merging/eipsfiles
git subtree split -q --squash --prefix=assets --annotate="[office eips] " --rejoin -b merging/eipAssets
```

最后在回到自己的分支中，将上面内容作为子树加入到master分支中。

```sh
git checkout master
git subtree add --prefix=EIPS merging/eipsfiles
git subtree add --prefix=assets merging/eipAssets
```