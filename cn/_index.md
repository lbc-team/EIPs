---
title: "所有EIP"
---

# 以太坊改进提案(EIP)

> EIP 是 Ethereum Improvement Proposal的缩写，表示以太坊改进提案。

以太坊改进提案（EIPs）描述了以太坊平台的标准，包括核心协议规范，客户端 API和合同标准。
任何人都可以参与以太坊的改进，参与的方式是向以太坊[EIPs GitHub库](https://github.com/ethereum/EIPs)提交改进提案的pull request，大家可以阅读[EIP-1](eip-1.md) 了解如何提交改进提案。


关于提案分类可以阅读[以太坊改进提案概要](.)或[EIP-1: EIP 用途及指导原则 ](./eip-1.html)

## EIP 状态（status terms）

一个“成功的”EIP会经过以下几个状态：

```
草案（Draft -> 最后召集（Last Call） -> 已接受（Accepte） -> 最终（Final）
```

* **草案 Draft** - 说明此提案还在开放讨论，正在进行快速迭代和更改的EIP。
* **最后召集 Last Call** - 完成了初始迭代，并准备好供更大受众查阅。
* **已接受 Accepted** - 核心EIP（core EIP) 至少在 `最后召集` 状态至少两周。并且作者已解决了所要求的任何技术变更。核心开发团队决定是否将EIP作为硬分叉的一部分编码到客户端（硬分叉的过程不是EIP过程的一部分）。 如果做出这样的决定，EIP将进入最终决定。
* **最终 Final (non-Core)** -  EIP 至少在 `最后召集` 状态至少两周。并且作者已解决了所要求的任何技术变更。
* **最终 Final (Core)** - 核心开发团队决定实现此EIP并作为将来/或已经硬分叉的一部分。

## EIP 分类（Types）

EIP 分为多种类型，每种类型都有自己的EIP列表。

### 标准跟踪 Standard Track (202)

描述影响以太坊实现的任何更改，例如网络协议的更改、块或交易有效性规则的更改、应用程序标准或约定，或影响以太坊应用程序交互的任何更改或添加。标准跟踪EIP 细分为以下几类。

#### [核心 Core](https://learnblockchain.cn/docs/eips/category/core.html) (84)

核心提案包含产生共识分叉的改进(如：[EIP5](eip-5.html), [EIP101](eip-101.html))，以及一些也许不是共识部分但可能与“核心开发”讨论相关的变更（例如，矿工/节点策略更改[EIP86](eip-86.html)的2,3和4））。

#### [网络 Networking](https://learnblockchain.cn/docs/eips/category/networking.html) (7)

包括围绕devp2p ([EIP8](eip-8.html)) 和轻客户端子协议的改进，以及对 whisper 和 swarm 网络协议规范的改进建议。


#### [接口 Interface](https://learnblockchain.cn/docs/eips/category/interface.html) (18)

包括有关客户端API/RPC规范和标准的改进，以及某些语言级别标准，如方法名([EIP6](eip-6.html))和合约ABI。


#### [应用标准提案 ERC](https://learnblockchain.cn/docs/eips/category/erc.html) (93)

ERC 是 Ethereum Request for Comment 的缩写，原本是征求大家意见的意思，主要是应用程序标准或约定，包含如：代币标准合约([ERC20](eip-20.html))，名称注册([ERC137](eip-137.html))，URI schemes ([ERC681](eip-681.html))，库/包格式 ([EIP190](eip-190.html))，
钱包格式 ([EIP85](https://github.com/ethereum/EIPs/issues/85))等。


### [元提案 Meta](meta.html) (14)


描述以太坊的改进过程（或事件），也被视为过程EIP（Process EIP）。 流程EIP类似于标准跟踪EIP，但流程EIP描述以太坊协议外的内容（而不是协议本身）。 他们可能会提出一个实现，但不会加入到以太坊的代码库; 这些提案经常需要社区共识; 与信息EIP不同，它们不仅仅是建议，用户通常也不能忽略它们。 提案包括程序，指南，决策过程的变更以及以太坊开发中使用的工具或环境的变更。



### [信息提案 Informational](informational.html) (1)

描述以太坊设计问题，或向以太坊社区提供一般指导信息，但不提出新功能。 信息提案不一定代表以太坊社区的共识或推荐，因此用户和实施者可以自由地忽略信息EIP或遵循他们的建议。