# Starting of with the Web 3.0 project

* npm init vite@latest
* npx tailwindcss init -p

#### What is Solidity?
* A smart contract is a simple program that executes transactions on a blockchain
by following predefined rules set by the author
* It is object-oriented programming language build solely for running smart contracts on the Etherum Virtual Machine (EVM)

### What is Etherum ?
* Etherum is a decentralized, open source blockchain with smart contract functionality.
* Ether is the native cryptocurrency of the platform
* Ether is second only to Bitcoin in market captilization

#### What is Hardhat?
* It is a solidity development environment build using node.js
* With this javascript develops don't need to leave the javascript and Node.js world
* Testing smart contracts is easy, as it is plug and play
* To connect to the smart contract we need to use ether.js

#### Etherium Wallet [Meta Mask]
* To get our own etherium wallet we need to get a meta mask.
* At first we need to get MetaMask.
* It is an google extension for accessing  Etherum enabled distributed applications
* Creating an account requires a simple password
* Password is not important, secret recovery phase is.
* That is the master key and do not share it to anyone else
* Allow the test networks
* Choose the ropsten test network
* To get a test ethers we need to search for ropsten testnet faucet.
* Copy the account number from the meta mask and paste it to ropsten test faucet
* To get test ethers, it takes from 30s to many hours.

#### What is Alchemy in Ethereum?
* Alchemy is a powerful blockchain developer platform providing a suite of developer tools.
* Developers building apps which interact with Ethereum can use Alchemy's powerful APIs to supercharge their apps
* Leverage features not available in vanilla nodes.
* Create a account
* Create an app using the ropsten network
* Copy the api key for https in hardhat.config.js

#### Hardhat Waffle?
* This plugin is used build smart contract tests using Waffle in Hardhat.

```bash
yarn add --dev hardhat
npx hardhat
npx hardhat run scripts/deploy.js --network ropsten
```


#### Resources

Tailwind Setup - https://tailwindcss.com/docs/guides/c...
Tailwind Docs - https://tailwindcss.com/docs
ETH Ropsten Faucet 1 - https://faucet.egorfine.com
ETH Ropsten Faucet 2 - https://faucet.dimensions.network
Etherscan - https://ropsten.etherscan.io
Alchemy - https://alchemy.com
