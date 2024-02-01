<template>
    <div class="dog_page_title_container">
        <TitleImage imageSrc="src/assets/images/doggies_changing.gif" altText="Doggies Changing" />
        <h2 class="doggies_explorer_title" tabindex="0">
            {{ titleText }}
        </h2>
    </div>
</template>

<script>
import TitleImage from './TitleImage.vue';

export default {
    name: 'PageTitle',
    props: {
        titleText: {
            type:String,
            required: true
        },
    },
    components: {
        TitleImage,
    }
}
</script>

<style scoped lang="scss">
@use '../../assets/main';
.doggies_explorer_title {
    font-size: 48px;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    background-color: main.$secondary_black;
    background-image: linear-gradient(45deg, main.$secondary_black 43%, main.$primary_gray 58%);
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-align: center;
    @include main.responsive(mobile) {
        text-align: center;
        font-size: 38px;
    }
}
.dog_page_title_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}


</style>