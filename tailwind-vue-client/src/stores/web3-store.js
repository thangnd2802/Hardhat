import { defineStore } from 'pinia';
import Web3 from 'web3';
import marketABI from '../lib/NFTMarket.json';


const walletConnectionStatus = Object.freeze({ 
    CONNECTED: 1, 
    NOTCONNECTED: 0
  }); 



export const web3Store = defineStore({
    id: 'web3',
    state: () => ({
        walletStatus: walletConnectionStatus.DISCONNECTED,
        marketContract: null,
        wallBalance: null,
    }),
    actions: {
        async init() {
            const web3 = new Web3(window.ethereum);
            const market_address = marketABI[this.chainId].address;
            const chainId = await web3.eth.getChainId();
            this.marketContract = new web3.eth.Contract(
                marketABI[chainId].abi,
                web3.utils.toChecksumAddress(market_address)
            );
        },

        async getCurrentWalletConnected() {
            if (window.ethereum) {
                try {
                    const addressArray = await window.ethereum.request({
                        method: "eth_accounts",
                    });
                    if (addressArray.length > 0) {
                        this.walletStatus = walletConnectionStatus.CONNECTED;
                        this.walletAddress = addressArray[0];
                        this.wallBalance = await this.getAccountBalance(this.walletAddress);
                    }
                } catch (err) {
                    this.walletAddress = walletConnectionStatus.NOTCONNECTED;
            
                }
            } else {
                this.walletAddress = walletConnectionStatus.NOTCONNECTED;              
            }
        },

        async connectWallet() {
            if (window.ethereum) {
                try {
                    const addressArray = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    this.walletStatus = walletConnectionStatus.CONNECTED;
                    this.walletAddress = addressArray[0];
                    this.wallBalance = await this.getAccountBalance(this.walletAddress);
                } catch (err) {
                    this.walletStatus = walletConnectionStatus.NOTCONNECTED;
                }
            } else {
                    this.walletStatus = walletConnectionStatus.NOTCONNECTED;
                
            }
        },

        async getAccountBalance(address) {
            if (!address) {
              return 0;
            }
            const checksumAddress = this.web3.utils.toChecksumAddress(address);
            const balanceInWei = await this.web3.eth.getBalance(checksumAddress);
            const balanceInEther = this.web3.utils.fromWei(balanceInWei, "ether");
            return balanceInEther;
        },

        async getNFTsBySeller() {
            let nfts = await this.marketContract.methods.getNFTBySeller().call();
            return nfts;
        },

        async getNFTsByOwner() {
            let nfts = await this.marketContract.methods.getNFTByOwner().call();
            return nfts;
        },
    }
});

const store = web3Store();

onBeforeMount(async () => {
    await store.initialize();
});