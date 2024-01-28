<template>
    <div class="dog_page_title_container">
        <TitleImage imageSrc="src/assets/default-user-image-black.png" />
        <h2>
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

<style scoped>
.dog_page_title_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>