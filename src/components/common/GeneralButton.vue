<template>
    <button @click="onClick()" :class="className">
        {{text}}
    </button>
</template>

<script>

export default {
    name: 'GeneralButton',
    props: {
        text: {
            type: String,
            required:true
        },
        className: {
            type:String,
            required:true
        }
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
.regular_button {
    @include main.search_btn;
    &:disabled {
        @include main.disabled_btn;
    }
    @include main.responsive(mobile) {
        padding: 0;
    }
}

</style>