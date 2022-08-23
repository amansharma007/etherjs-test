const ethers = require("ethers");

const getEtherBalance = async function (address) {
  const network = "rinkeby"; // use rinkeby testnet
  const provider = ethers.getDefaultProvider(network);
  let balanceInEth = "";

  let response = await provider.getBalance(address);

  return ethers.utils.formatEther(response);
};

module.exports = { getEtherBalance };
