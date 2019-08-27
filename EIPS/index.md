# EIPs

Ethereum Improvement Proposals (EIPs) describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards.

## Contributing

First review [EIP-1](https://eips.ethereum.org/EIPS/eip-1). Then clone the repository and add your EIP to it. There is a [template EIP here](https://github.com/ethereum/EIPs/blob/master/eip-template.md). Then submit a Pull Request to Ethereum's [EIPs repository](https://github.com/ethereum/EIPs).

## EIP status terms

* **Draft** - an EIP that is open for consideration and is undergoing rapid iteration and changes.
* **Last Call** - an EIP that is done with its initial iteration and ready for review by a wide audience.
* **Accepted** - a core EIP that has been in Last Call for at least 2 weeks and any technical changes that were requested have been addressed by the author. The process for Core Devs to decide whether to encode an EIP into their clients as part of a hard fork is not part of the EIP process. If such a decision is made, the EIP will move to final.
* **Final (non-Core)** - an EIP that has been in Last Call for at least 2 weeks and any technical changes that were requested have been addressed by the author.
* **Final (Core)** - an EIP that the Core Devs have decided to implement and release in a future hard fork or has already been released in a hard fork.

## EIP Types

EIPs are separated into a number of types, and each has its own list of EIPs.

### Standard Track (202)

Describes any change that affects most or all Ethereum implementations, such as a change to the the network protocol, a change in block or transaction validity rules, proposed application standards/conventions, or any change or addition that affects the interoperability of applications using Ethereum. Furthermore Standard EIPs can be broken down into the following categories.

#### [Core](https://eips.ethereum.org/core) (84)

Improvements requiring a consensus fork (e.g. [EIP5](https://eips.ethereum.org/EIPS/eip-5), [EIP101](https://eips.ethereum.org/EIPS/eip-101)), as well as changes that are not necessarily consensus critical but may be relevant to “core dev” discussions (for example, the miner/node strategy changes 2, 3, and 4 of [EIP86](https://eips.ethereum.org/EIPS/eip-86)).

#### [Networking](https://eips.ethereum.org/networking) (7)

Includes improvements around devp2p ([EIP8](https://eips.ethereum.org/EIPS/eip-8)) and Light Ethereum Subprotocol, as well as proposed improvements to network protocol specifications of whisper and swarm.

#### [Interface](https://eips.ethereum.org/interface) (18)

Includes improvements around client API/RPC specifications and standards, and also certain language-level standards like method names ([EIP6](https://eips.ethereum.org/EIPS/eip-6)) and contract ABIs. The label “interface” aligns with the interfaces repo and discussion should primarily occur in that repository before an EIP is submitted to the EIPs repository.

#### [ERC](https://eips.ethereum.org/erc) (93)

Application-level standards and conventions, including contract standards such as token standards ([ERC20](https://eips.ethereum.org/EIPS/eip-20)), name registries ([ERC137](https://eips.ethereum.org/EIPS/eip-137)), URI schemes ([ERC681](https://eips.ethereum.org/EIPS/eip-681)), library/package formats ([EIP190](https://eips.ethereum.org/EIPS/eip-190)), and wallet formats ([EIP85](https://github.com/ethereum/EIPs/issues/85)).

### [Meta](https://eips.ethereum.org/meta) (14)

Describes a process surrounding Ethereum or proposes a change to (or an event in) a process. Process EIPs are like Standards Track EIPs but apply to areas other than the Ethereum protocol itself. They may propose an implementation, but not to Ethereum's codebase; they often require community consensus; unlike Informational EIPs, they are more than recommendations, and users are typically not free to ignore them. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in Ethereum development. Any meta-EIP is also considered a Process EIP.

### [Informational](https://eips.ethereum.org/informational) (1)

Describes a Ethereum design issue, or provides general guidelines or information to the Ethereum community, but does not propose a new feature. Informational EIPs do not necessarily represent Ethereum community consensus or a recommendation, so users and implementers are free to ignore Informational EIPs or follow their advice.