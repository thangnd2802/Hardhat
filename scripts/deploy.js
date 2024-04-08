//import { ethers, network } from "hardhat";
//import path from "path";
//import { readFileSync, writeFileSync } from "fs";

const hre = require("hardhat");
const path = require("path");
const fs = require("fs");

async function main() {
    const nft_market = await hre.ethers.getContractFactory("NFTMarket");
    const NFTMarket = await nft_market.deploy();

    await NFTMarket.waitForDeployment();

    const nft_market_address = await NFTMarket.getAddress();

    console.log("NFT market deployed to:", nft_market_address);

    const nft_market_Json = JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, "../tailwind-vue-client", "lib", "NFTMarket.json"),
          "utf8"
        )
    );

    const market_abi = {
        address : nft_market_address,
        abi : JSON.parse(NFTMarket.interface.formatJson())
    }

    nft_market_Json[network.config.chainId.toString()] = market_abi;

    fs.writeFileSync(
        path.resolve(__dirname, "../tailwind-vue-client", "lib", "NFTMarket.json"),
        JSON.stringify(nft_market_Json, null, 2)
      );

    const nft = await hre.ethers.getContractFactory("DigitalArt");
    const NFT = await nft.deploy(nft_market_address);
    await NFT.waitForDeployment();

    const nft_address = await NFT.getAddress();

    console.log("NFT deployed to:", nft_address);

    const nftJson = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "../tailwind-vue-client", "lib", "NFT.json"),
        "utf8"
      )
    );

    const abi = {
        address : nft_address,
        abi : JSON.parse(NFT.interface.formatJson())
    }

    nftJson[network.config.chainId.toString()] = abi;

    fs.writeFileSync(
        path.resolve(__dirname, "../tailwind-vue-client", "lib", "NFT.json"),
        JSON.stringify(nftJson, null, 2)
      );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});