<template>
    <main class="content_container">
        <PageTitle titleText="The Doggies Explorer"/>
    </main>
</template>

<script>
import PageTitle from './PageTitle.vue'
export default {
    name: 'DoggiesExplorer',
    components: {
        PageTitle,
    }
}
</script>

<style scoped>
.content_container {
    height: 100%;
    padding: 100px 30px;
}
</style>
