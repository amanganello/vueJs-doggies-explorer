<template>
    <header class="doggies_header_container">
        <h1 class="doggies_title">
            {{title}}
        </h1>
    </header>
</template>

<script>
export default {
    name: 'HeaderDoggies',
    props: {
        title: {
            type:String,
            required: true
        },
    },
    data() {
        return {
        numberOfDots: 3, // Set the desired number of dots
        };
    },
}
</script>
<style scoped lang="scss">
@use '../../assets/main';
.doggies_header_container {
    line-height: 1;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: main.$primary_black;
    .doggies_title {
        width: 100%;
        justify-content: center;
        display: flex;
        color: main.$primary_font_color_white;
        @include main.responsive(mobile) {
            font-size: 38px;
            text-align: center;
        }
    }
}
</style>