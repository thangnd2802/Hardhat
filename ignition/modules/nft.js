const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("nftModule", (m) => {
  
  const nft = m.contract("DNFT");

  const deploy = m.call(nft, "deploy");

  const address = m.readEventArgument(deploy, "Deployed", "addr");

  const deployedWithNFT = m.contractAt("deployWithNFT", address);


  return { nft, deployedWithNFT };
});
