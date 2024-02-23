import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-ledger";
import "@nomicfoundation/hardhat-ethers";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import "solidity-coverage";

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: {
      // Ethereum
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      sepolia: process.env.ETHERSCAN_API_KEY || "",
      // Arbitrum
      arbitrumOne: process.env.ARBISCAN_API_KEY || "",
      arbitrumGoerli: process.env.ARBISCAN_API_KEY || "",
      // Avalanche
      avalanche: process.env.SNOWTRACE_API_KEY || "",
      avalancheFuji: process.env.SNOWTRACE_API_KEY || "",
      // BNB Smart Chain
      bsc: process.env.BSCSCAN_API_KEY || "",
      bscTestnet: process.env.BSCSCAN_API_KEY || "",
      // Polygon
      polygon: process.env.POLYGONSCAN_API_KEY || "",
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
    },
  },
  networks: {
    hardhat: {
      // forking: { url: "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY || "" }
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
    local: {
      url: "http://127.0.0.1:8545",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
    // Ethereum
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY || "",
      gasPrice: 75000000000,
      chainId: 1,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + process.env.INFURA_API_KEY || "",
      gasPrice: 75000000000,
      chainId: 11155111,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
    // Arbitrum
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      gasPrice: 75000000000,
      chainId: 42161,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
    arbitrumGoerli: {
      url: "https://goerli-rollup.arbitrum.io/rpc",
      gasPrice: 75000000000,
      chainId: 421613,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
    // Avalanche
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43114,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
    avalancheFuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
    // BNB Smart Chain
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      gasPrice: 20000000000,
      chainId: 56,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      gasPrice: 20000000000,
      chainId: 97,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],s
    },
    // Polygon
    polygon: {
      url: "https://polygon-rpc.com/",
      chainId: 137,
      gasPrice: 8000000000,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
    polygonMumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      chainId: 80001,
      gasPrice: 8000000000,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //ledgerAccounts: ["0x1234567890123456789012345678901234567890"],
    },
  },
  solidity: {
    compilers: [{ version: "0.8.24" }],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    excludeContracts: [],
    src: "./contracts",
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    unit: "kB",
  },
};

export default config;
