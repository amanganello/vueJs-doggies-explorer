<template>
    <div class="dog_page_title_container">
        <TitleImage imageSrc="src/assets/images/doggies_changing.gif" />
        <h2 class="doggies_explorer_title">
            The Doggies Explorer
        </h2>
    </div>
</template>

<script>
import TitleImage from './TitleImage.vue'

export default {
    name: 'PageTitle',
    props: {
        titleText: String,
    },
    components: {
        TitleImage,
    }
}
</script>

<style scoped lang="scss">
@use '../assets/main';
.doggies_explorer_title {
    font-size: 3em;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    background-color: #030303;
    background-image: linear-gradient(45deg, #030303 43%, #343d46 58%);
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
.dog_page_title_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>