<template>
    <div class="doggies_search_container">
        <form @submit="onSubmit" class="search_doggies">
            <div class="doggies_tokenId_input">
                <label>Token ID</label>
                <input type="text" v-model="tokenId" name="tokenId" placeholder="Doggies token ID" class="input_tokenId"/>
            </div>
            <input type="submit" value="Search" class="search_button" />
        </form>
        <GeneralButton @btn-click="$emit('search-random-doggie')" text="Search Random" className="search_random_btn"/>
    </div>
</template>

<script>
import GeneralButton from './common/GeneralButton.vue';

export default {
    name: 'DoggiesSearch',
    components: {
        GeneralButton
    },
    data() {
        return { 
            tokenId: ''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            console.log('Doggies Search', this.tokenId)
            if (!this.tokenId) {
                alert('Please enter a valid Token ID');
                return;
            }
            //TODO Doggies Search

            //cleanUp
            this.tokenId = '';
        },
    }
}
</script>
<!-- TODO style the button -->
<style lang="scss" scoped>
@use '../assets/main';

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
            }
        }
        .search_button {
            @include main.search_btn;
        }
    }   
}
</style>