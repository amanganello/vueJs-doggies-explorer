<template>
    <img :src="imageSrc" :alt="altText"/>
</template>

<script>

export default {
    name: 'PageTitle',
    props: {
        imageSrc: {
            type:String,
            required: true
        },
        altText: {
            type:String,
            required: true
        },
    },
}
</script>

<style scoped lang="scss">
@use '../../assets/main';

img {
    box-shadow: main.$primary_box_shadow;
    width: 300px;
    height: auto;
    border-radius: 20px;
    @include main.responsive(mobile) {
        width: 250px;
    }
}
</style>