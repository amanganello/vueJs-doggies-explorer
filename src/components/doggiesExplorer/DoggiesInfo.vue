<template>
    <div class="doggies_info_card">
        <DoggiesGralInfo v-show="!isLoading" :tokenData="tokenData"/>
        <DoggiesInfoTable v-show="!isLoading" :tokenData="tokenData" />
        <LoadingCard :isLoading="isLoading" className="doggies_info"/>
    </div>
</template>

<script>
import DoggiesInfoTable from './DoggiesInfoTable.vue'
import DoggiesGralInfo from './DoggiesGralInfo.vue'
import LoadingCard from '../common/LoadingCard.vue'

export default {
    name: "DoggiesInfo",
    props: {
        tokenData: Object,
        isLoading: Boolean,
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
    padding: main.$normal_padding;
}
</style>