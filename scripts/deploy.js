//import { ethers, network } from "hardhat";
//import path from "path";
//import { readFileSync, writeFileSync } from "fs";

const hre = require("hardhat");
const path = require("path");
const fs = require("fs");

async function main() {
    const nft = await hre.ethers.getContractFactory("DNFT");
    const nftContract = await nft.deploy();

    await nftContract.waitForDeployment();

    const address = await nftContract.getAddress();

    console.log("DNFT deployed to:", address);

    const nftJson = JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, "../tailwind-vue-client", "lib", "NFT.json"),
          "utf8"
        )
    );

    const abi = {
        address : address,
        abi : JSON.parse(nftContract.interface.formatJson())
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