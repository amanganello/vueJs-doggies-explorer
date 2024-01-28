<template>
    <header class="doggies_header_container">
        <div class="header_dots_container">
            <HeaderDot v-for="index in numberOfDots" :key="index"/>
        </div>
        <h1 class="doggies_title">
            {{title}}
        </h1>
    </header>
</template>

<script>
import HeaderDot from './HeaderDot.vue'
export default {
    name: 'HeaderDoggies',
    props: {
        title: String,
    },
    components: {
        HeaderDot
    },
    data() {
        return {
        numberOfDots: 3, // Set the desired number of dots
        };
    },
}
</script>
<style scoped lang="scss">
.doggies_header_container {
    line-height: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 2px groove black;
    .header_dots_container {
        display: flex;
        flex-direction: row;
        gap: 10px;
        :first-child {
            margin-left: 10px;
        }
    }

    .doggies_title {
        width: 100%;
        justify-content: center;
        display: flex;
    }
}
</style>