// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MintNFT is ERC721URIStorage { 

    using Counters for Counters.Counter; 
    Counters.Counter private _tokenIds;

    constructor() ERC721("Factory NFT", "FTN") {
    }

    function createToken(string memory tokenURI) public returns (bool) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return true;
    }
}
