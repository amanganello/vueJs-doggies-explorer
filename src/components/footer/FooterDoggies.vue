<template>
    <footer>
        <p>
            Copyright &copy; 2024
        </p>
        <router-link v-show="homePage" to="/about" class="about_link">About</router-link>
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/main';

footer {
    padding-bottom: main.$large_padding;
    text-align: center;
    color: main.$primary_font_color_white;
    .about_link { 
        color: main.$primary_font_color_white;
    }
}
</style>

<script>
export default {
    name: 'FooterDogies',
    computed: {
        homePage() {
        if(this.$route.path === '/')
            return true;
        return false;
        }
  }
}
</script>