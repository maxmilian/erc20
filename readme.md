# MHCoin

In this project, we will generate ERC-20 token "MH Coin", which its symbol is "MH" in Goerli Testnet. We use [Openzeppelin](https://docs.openzeppelin.com/contracts/4.x/wizard) library and [ALCHEMY](https://www.alchemy.com/) node provider, and verify the contract in [Etherscan](https://goerli.etherscan.io/address/0x0d12c2f5ee6cb9ba9200a3d0665b590e9ceabb3d#code).

## Get Eth from faucet

You can get 0.25 Goerli ETH/day in [goerli faucet](https://goerlifaucet.com/).

Owner Address: 0xf31e610317b2BD5dA905Cc7E611EB21ac16BA3b7

## Compile

```
yarn hardhat compile
```

## Deployment

```
yarn hardhat run scripts/deploy.js --network goerli
```

The MH Coin was deployed to [Goeril Testnet](https://goerli.etherscan.io/address/0x0d12c2f5ee6cb9ba9200a3d0665b590e9ceabb3d)
Contract address: 0x0d12c2f5ee6cb9ba9200a3d0665b590e9ceabb3d

### Verify contract

```sh
yarn hardhat verify --network goerli <contract_address>
# yarn hardhat verify --network goerli 0x0d12c2f5ee6cb9ba9200a3d0665b590e9ceabb3d
```

# Reference
https://github.com/OnChainFund/ERC20
