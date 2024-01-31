<template>
    <div class="doggies_search_container">
        <form @submit="onSubmit" class="search_doggies" v-if="connected">
            <div class="doggies_tokenId_input">
                <label>Token ID</label>
                <input type="text" autocomplete="off" v-model="tokenId" name="tokenId" placeholder="Token ID" class="input_tokenId" :disabled="isLoading"/>
            </div>
            <input type="submit" value="Search" class="regular_button" :disabled="isLoading"/>
        </form>
        <GeneralButton @btn-click="$emit('search-random-doggie')" text="Search Random" className="regular_button" :disabled="isLoading" v-if="connected"/>
        <GeneralButton @btn-click="$emit('connect-wallet')" text="Connect wallet" className="regular_button" v-if="!connected"/>
    </div>
</template>

<script>
import GeneralButton from '../common/GeneralButton.vue';
import Data from '../../assets/data.json'
import { useToast } from "vue-toastification";

export default {
    name: 'DoggiesSearch',
    components: {
        GeneralButton
    },
    setup() {
        const toast = useToast();
        return { toast }
    },
    props: {
        isLoading: Boolean,
        connected: Boolean,
    },
    data() {
        return { 
            tokenId: '',
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            if (!this.tokenId) {
                this.triggerToast('Please enter a Token ID');
                return;
            }
            // Checking that Doggi ID is not major to total supply - 1 as the id goes from 0 to 9999
            if (this.tokenId > Data.totalDoggiesSupply - 1) {
                this.triggerToast('Please enter a valid Token Id from 0 to 9999');
                return;
            }
            const tokenId = this.tokenId;
            this.$emit('get-token-data', tokenId);
            //cleanUp
            this.tokenId = '';
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
<!-- TODO style the button -->
<style lang="scss" scoped>
@use '../../assets/main';

.doggies_search_container {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 80px auto;
    gap: main.$input_element_gap;
    border-radius: 20px;
    box-shadow: main.$primary_box_shadow;
    padding: main.$normal_padding;
    .search_doggies {
        display: flex;
        flex-direction: column;
        gap: main.$input_element_gap;
        .doggies_tokenId_input {
            display: flex;
            flex-direction: column;
            gap: main.$input_element_gap;
            .input_tokenId {
                padding: 10px 45px;
                background: main.$primary_white url("../assets/images/search-icon-mglass.svg") no-repeat 15px center;
                background-size: 15px 15px;
                font-size: 16px;
                border-radius: 10px;
                &:focus-visible { 
                    outline-color: main.$primary_green;
                }
            }
        }
        .regular_button {
            @include main.search_btn;
            &:disabled {
                @include main.disabled_btn;
            }
        }
    }   
}
</style>