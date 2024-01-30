<template>
    <main class="content_container">
        <PageTitle titleText="The Doggies Explorer"/>
        <DoggiesSearch @get-token-data="getTokenData" :isLoading="isLoading" :connected="connected" @connect-wallet="connectWallet" @search-random-doggie="getRandomDoggi"/>
        <DoggiesInfo v-show="Object.keys(tokenData).length > 0 && !isLoading" :tokenData="tokenData" />
    </main>
</template>

<script>
import PageTitle from './PageTitle.vue'
import DoggiesSearch from './DoggiesSearch.vue'
import DoggiesInfo from './DoggiesInfo.vue'
import Data from '../assets/data.json'
import Abi from '../assets/abi.json'
import Web3 from 'web3';

export default {
    name: 'DoggiesExplorer',
    components: {
        PageTitle,
        DoggiesSearch,
        DoggiesInfo
    },
    data() {
        return { 
            connected: false,
            tokenData: {},
            isLoading: false,
            tokenId: null,
        }
    },
    created() {
        // Initialize contract instance when component is created
        this.web3 = new Web3(window.ethereum);
        this.contractAddress = Data.contractAddress;
        this.abi = Abi;
        this.contract = new this.web3.eth.Contract(this.abi, this.contractAddress);
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
                console.error('Error connecting to the wallet:', error);
            }
        },
        async getTokenData(tokenId) {
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
                console.error(`Error getting token URI for ID ${tokenId}:`, error);
                throw error;
            } finally {
                this.isLoading = false;
            }
        },
        async getOwner(tokenId) {
            try {
                const ownerOf = await this.contract.methods.ownerOf(tokenId).call();
                return ownerOf
            } catch (error) {
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
        }
    }
}
</script>

<style scoped lang="scss">
.content_container {
    height: 100%;
    padding: 100px 30px;
}
</style>

