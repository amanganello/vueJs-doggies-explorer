<template>
    <main class="content_container">
        <DoggiesExplorerPageTitle titleText="The Doggies Explorer"/>
        <DoggiesSearch @get-token-data="getTokenData" :isLoading="isLoading" :connected="connected" @connect-wallet="connectWallet" @search-random-doggie="getRandomDoggi"/>
        <DoggiesInfo v-show="showInfoComp" :tokenData="tokenData" :isLoading="isLoading"/>
    </main>
</template>

<script>
import DoggiesExplorerPageTitle from './DoggiesExplorerPageTitle.vue';
import DoggiesSearch from './DoggiesSearch.vue';
import DoggiesInfo from './DoggiesInfo.vue';
import Data from '../../assets/data.json';
import Abi from '../../assets/abi.json';
import Web3 from 'web3';
import { useToast } from "vue-toastification";

export default {
    name: 'DoggiesExplorer',
    components: {
        DoggiesExplorerPageTitle,
        DoggiesSearch,
        DoggiesInfo
    },
    setup() {
        const toast = useToast();
        const web3 = new Web3(window.ethereum);
        const contractAddress = Data.contractAddress;
        const abi = Abi;
        const contract = new web3.eth.Contract(abi, contractAddress);
        return { toast, web3, contract };
    },
    data() {
        return { 
            connected: false,
            tokenData: {},
            isLoading: false,
            tokenId: null,
            showInfoComp: false,
        }
    },
    methods: {
        async connectWallet() {
            try {
                //here we connect to the metamask wallet
                if (window.ethereum) { //chech to see if metamask is installed
                    window.ethereum.request({ method: 'eth_requestAccounts'})
                    .then(() => {
                        this.connected = true;
                    })
                }
            } catch (error) {
                this.triggerToast(`Error connecting to the wallet`);
                console.error('Error connecting to the wallet:', error);
            }
        },
        async getTokenData(tokenId) {
            this.showInfoComp = true;
            if (this.checkStoredTokenId(tokenId)) {
                return;
            }
            this.isLoading = true;
            this.tokenId = tokenId;
            try {
                const uri = await this.contract.methods.tokenURI(tokenId).call();
                const response = await fetch(uri);
                const tokenData = await response.json();
                this.tokenData = tokenData;
                const ownerOf = await this.getOwner(tokenId);
                this.tokenData["ownerOf"] = ownerOf;
            } catch (error) {
                this.triggerToast(`Error getting token data for ID ${tokenId}`);
                console.error(`Error getting token data for ID ${tokenId}:`, error);
            } finally {
                this.isLoading = false;
            }
        },
        async getOwner(tokenId) {
            try {
                const ownerOf = await this.contract.methods.ownerOf(tokenId).call();
                return ownerOf;
            } catch (error) {
                this.triggerToast(`Error getting owner for token ${tokenId}`);
                console.error(`Error getting owner for token ${tokenId}:`, error);
            }
        },
        async getRandomDoggi() {
            let randomNum;
            do {
                randomNum = this.getRandomTokenId();
            } while (this.checkStoredTokenId(randomNum));
            
            await this.getTokenData(randomNum);
        },
        checkStoredTokenId (tokenId) {
            //Check if tokenId it's the same stored, if it's not executes the call to get the info 
            if (this.tokenId && this.tokenId === tokenId) {
                return true;
            }
            return false;
        },
        getRandomTokenId() {
            return Math.floor(Math.random() * Data.totalDoggiesSupply);
        },
        triggerToast(message) {
            this.toast.error(message, {
                position: "top-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: "fas fa-rocket",
                rtl: false
            })
        }
    }
}
</script>

<style scoped lang="scss">
@use '../../assets/main';
.content_container {
    height: 100%;
    padding: main.$large_padding_margin main.$normal_padding_margin;
    @include main.responsive(mobile) {
        padding: main.$normal_padding_margin main.$small_padding_margin;
    }
}
</style>