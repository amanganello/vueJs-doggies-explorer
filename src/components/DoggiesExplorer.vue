<template>
    <main class="content_container">
        <PageTitle titleText="The Doggies Explorer"/>
        <DoggiesSearch />
        <DoggiesInfo />
    </main>
</template>

<script>
import PageTitle from './PageTitle.vue'
import DoggiesSearch from './DoggiesSearch.vue'
import DoggiesInfo from './DoggiesInfo.vue'

export default {
    name: 'DoggiesExplorer',
    components: {
        PageTitle,
        DoggiesSearch,
        DoggiesInfo
    }
}
</script>

<style scoped lang="scss">
.content_container {
    height: 100%;
    padding: 100px 30px;
}
</style>

