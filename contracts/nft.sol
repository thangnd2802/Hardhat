// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract DigitalArt is ERC721URIStorage {
    uint256 private _nextTokenId;
    address private _contractAddress;
    constructor(address contractAddress) ERC721("DigitalArt", "DA") {
        setApprovalForAll(contractAddress, true);
        _contractAddress = contractAddress;
    }

    function createToken(string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 tokenId = _nextTokenId++;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }
}