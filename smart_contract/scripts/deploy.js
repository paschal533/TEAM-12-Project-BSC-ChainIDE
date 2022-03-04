 const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const NFTFactory = await hre.ethers.getContractFactory("MintNFT");

  const transactionsContract = await transactionsFactory.deploy();
  const NFTContract = await NFTFactory.deploy();

  await transactionsContract.deployed();
  await NFTContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
  console.log("NFT address: ", NFTContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
