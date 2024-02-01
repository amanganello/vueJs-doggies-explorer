<template>
    <div class="doggies_info_card">
        <div v-if="!isLoading">
            <DoggiesGralInfo :tokenData="tokenData"/>
            <DoggiesInfoTable :tokenData="tokenData" />
        </div>
        <LoadingCard v-else :isLoading="isLoading"/>
    </div>
</template>

<script>
import DoggiesInfoTable from './DoggiesInfoTable.vue'
import DoggiesGralInfo from './DoggiesGralInfo.vue'
import LoadingCard from '../common/LoadingCard.vue'

export default {
    name: "DoggiesInfo",
    props: {
        tokenData: {
            type:Object,
            required: true
        },
        isLoading: {
            type:Boolean,
            required: true
        },
    },
    components: {
        DoggiesInfoTable,
        DoggiesGralInfo,
        LoadingCard
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/main';
.doggies_info_card {
    box-shadow: main.$primary_box_shadow;
    background: transparent;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    max-width: 80%;
    margin: auto;
    padding: main.$normal_padding_margin;
    @include main.responsive(mobile) {
        padding: main.$small_padding_margin;
    }
}
</style>