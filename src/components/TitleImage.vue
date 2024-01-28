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
    height: 60px;
    width: 60px;
    border: 2px solid main.$primary_black;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px main.$primary_gray;
    border-radius: 10px;
}
</style>