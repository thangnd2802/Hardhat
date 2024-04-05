const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8545'); // replace with your Infura Project ID

// Your account private key and the contract address
const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

// MyNFT contract ABI
const abi = require('../contract-abi.json')

// Set up the contract instance
const contract = new web3.eth.Contract(abi, contractAddress);

const depositETH = async () => {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;

    const valueToSend = web3.utils.toWei('1000', 'ether'); // 1 Ether

    const gasPrice = await web3.eth.getGasPrice();
    const gasEstimate = await contract.methods.depositETH().estimateGas({ from: account.address, value: valueToSend });

    const receipt = await contract.methods.depositETH().send({ from: account.address, gasPrice: gasPrice, gas: gasEstimate, value: valueToSend });

    console.log(receipt);
}

depositETH();