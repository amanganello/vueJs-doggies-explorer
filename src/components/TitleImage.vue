<template>
    <div class="title_img_container">
        <img :src="imageSrc" ref="defaultUserImage" alt="default-user-img"/>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars

export default {
    name: 'PageTitle',
    props: {
        imageSrc: String,
    },
}

</script>

<style scoped lang="scss">
@use '../assets/main';
.title_img_container {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: main.$primary_box_shadow;
    border-radius: 20px;
    img {
        width: 300px;
        border-radius: 20px;
    }
}
</style>