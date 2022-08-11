# 👷‍♀️ TypeScript Hardhat configuration template 👷‍♂️

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a script that deploys that contract.

- [Hardhat](https://github.com/nomiclabs/hardhat): compile, run and test smart contracts
- [TypeChain](https://github.com/ethereum-ts/TypeChain): generate TypeScript bindings for smart contracts
- [Ethers](https://github.com/ethers-io/ethers.js/): renowned Ethereum library and wallet implementation
- [Ethers-Ledger](https://github.com/anders-torbjornsen/ethers-ledger): fork of @ethersproject/hardware-wallets to support Ledger


## Getting Started

Before being able to run any command, you need to create a .env file and set a Private Key as an environment variable. You can follow the example in .env.example.

Then, proceed with installing dependencies:
```sh
$ npm install
```

## Compiling your contracts

To compile your contracts in your Hardhat project, use the built-in `compile` task:
```sh
$ npx hardhat compile
Compiling...
Compiled 1 contract successfully
```

## Deploying your contracts

You can deploy your contract using the deployment scripts in the `scripts` folder.

### Hardhat deploying whit a private key

You can target any network from your Hardhat config using:
```sh
$ npx hardhat run --network <your-network> scripts/deploy.ts
```

### Hardhat deploying with Ledger

You can target any network from your Hardhat config using:
```sh
$ npx hardhat run --network <your-network> scripts/deployHardware.ts
```

#### Derivation path for ETH in Ledger

[BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) which define the general pattern of address derivations but also describe a fondamental concept of Account.

Essentially what the spec is saying is that all address should be derived at
```text
purpose' / coin_type' / account' / change / address_index
````

where

- `purpose` will be 44 for legacy, 49 for segwit and 84 for native segwit.
- `coin_type` is a number unique per crypto currency and specified in [SLIP 44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md). Ethereum is 60.
- `account` is the index of the account
- `change` and `address_index` are ways to generate new addresses inside the account. This follow a strict rule described in the spec (with the importance of the Gap limit)

So a typical derivation is:
| coin        | account     | chain       | address     | path             |
| ----------- | ----------- | ----------- | ----------- | ---------------- |
| Ethereum    | first       | external    | first       | m/44'/60'/0'/0/0 |
| Ethereum    | second      | external    | first       | m/44'/60'/1'/0/0 |
| Ethereum    | third       | external    | first       | m/44'/60'/2'/0/0 |
| Ethereum    | fourth      | external    | first       | m/44'/60'/3'/0/0 |


For more information, see [derivation – BIP44 and exceptions](https://github.com/LedgerHQ/ledger-live/wiki/LLC:derivation).