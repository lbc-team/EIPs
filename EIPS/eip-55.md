# EIP 55: 混合大小写校验和地址编码

| 作者 | 类型 | 分类 | 状态 |  创建时间 |
| --- | --- | --- | --- | --- |
| Vitalik Buterin <vitalik.buterin@ethereum.org>, Alex Van de Sande <avsa@ethereum.org>| Standards Track|ERC|Final|2016-01-14|


## 规范

代码:

``` python
from ethereum import utils

def checksum_encode(addr): # Takes a 20-byte binary address as input
    o = ''
    v = utils.big_endian_to_int(utils.sha3(addr.hex()))
    for i, c in enumerate(addr.hex()):
        if c in '0123456789':
            o += c
        else:
            o += c.upper() if (v & (2**(255 - 4*i))) else c.lower()
    return '0x'+o

def test(addrstr):
    assert(addrstr == checksum_encode(bytes.fromhex(addrstr[2:])))

test('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed')
test('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359')
test('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB')
test('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb')

```


在英文中，将地址转换为十六进制，但如果第`i`个字符是一个字母（即它是`abcdef`之一），如果十六进制的`4*i`位为1则以大写字母打印，否则以小写形式打印。


## 原理阐述

优点:
- 向后兼容许多接受混合大小写的十六进制解析器，允许它随着时间的推移轻松引入
- 保持长度为40个字符
- 平均每个地址将有15个校验位，如果输入错误，随机生成的地因抄写错误意外通过检查的净概率为0.0247％。 这比ICAP提高了约50倍，但不如4字节检查代码好。


## 实现

javascript代码:

```js
const createKeccakHash = require('keccak')

function toChecksumAddress (address) {
  address = address.toLowerCase().replace('0x', '')
  var hash = createKeccakHash('keccak256').update(address).digest('hex')
  var ret = '0x'

  for (var i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) >= 8) {
      ret += address[i].toUpperCase()
    } else {
      ret += address[i]
    }
  }

  return ret
}
```

```
> toChecksumAddress('0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359')
'0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'
```


请注意，Keccak256哈希的输入是小写十六进制字符串（即编码为ASCII的十六进制地址）：


```
    var hash = createKeccakHash('keccak256').update(Buffer.from(address.toLowerCase(), 'ascii')).digest()
```

## 测试用例

```
# All caps
0x52908400098527886E0F7030069857D2E4169EE7
0x8617E340B3D01FA5F11F306F4090FD50E238070D
# All Lower
0xde709f2102306220921060314715629080e2fb77
0x27b1fdb04752bbc536007a920d24acb045561c26
# Normal
0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed
0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359
0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB
0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb
```

## 采用情况

| Wallet                   | displays checksummed addresses | rejects invalid mixed-case | rejects too short | rejects too long |
|--------------------------|--------------------------------|----------------------------|-------------------|------------------|
| Etherwall 2.0.1          | Yes                            | Yes                        | Yes               | Yes              |
| Jaxx 1.2.17              | No                             | Yes                        | Yes               | Yes              |
| MetaMask 3.7.8           | Yes                            | Yes                        | Yes               | Yes              |
| Mist 0.8.10              | Yes                            | Yes                        | Yes               | Yes              |
| MyEtherWallet v3.9.4     | Yes                            | Yes                        | Yes               | Yes              |
| Parity 1.6.6-beta (UI)   | Yes                            | Yes                        | Yes               | Yes              |
| Jaxx Liberty 2.0.0       | Yes                            | Yes                        | Yes               | Yes              |
| Coinomi 1.10             | Yes                            | Yes                        | Yes               | Yes              |
| Trust Wallet             | Yes                            | Yes                        | Yes               | Yes              |

### Exchange support for mixed-case address checksums, as of 2017-05-27:

| Exchange     | displays checksummed deposit addresses | rejects invalid mixed-case | rejects too short | rejects too long |
|--------------|----------------------------------------|----------------------------|-------------------|------------------|
| Bitfinex     | No                                     | Yes                        | Yes               | Yes              |
| Coinbase     | Yes                                    | No                         | Yes               | Yes              |
| GDAX         | Yes                                    | Yes                        | Yes               | Yes              |
| Kraken       | No                                     | No                         | Yes               | Yes              |
| Poloniex     | No                                     | No                         | Yes               | Yes              |
| Shapeshift   | No                                     | No                         | Yes               | Yes              |

## 参考引用

1. EIP 55 issue and discussion https://github.com/ethereum/eips/issues/55
2. Python example by @Recmo https://github.com/ethereum/eips/issues/55#issuecomment-261521584
3. Python implementation in [`ethereum-utils`](https://github.com/pipermerriam/ethereum-utils#to_checksum_addressvalue---text)
4. Ethereumjs-util implementation https://github.com/ethereumjs/ethereumjs-util/blob/75f529458bc7dc84f85fd0446d0fac92d991c262/index.js#L452-L466
5. Swift implementation in [`EthereumKit`](https://github.com/yuzushioh/EthereumKit/blob/master/EthereumKit/Helper/EIP55.swift)
6. Kotlin implementation in [`KEthereum`](https://github.com/walleth/kethereum/tree/master/erc55)
