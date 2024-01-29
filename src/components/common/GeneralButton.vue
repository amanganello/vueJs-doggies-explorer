<template>
    <button @click="onClick()" :style="{ background: color }" :class="className">
        {{text}}
    </button>
</template>

<script>

export default {
    name: 'GeneralButton',
    props: {
        text: String,
        color: String,
        className: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click');
        },
    }
}
</script>

<style scoped lang="scss">
@use '../../assets/main';
.search_random_btn {
    @include main.search_btn;
}

</style>