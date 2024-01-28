<template>
    <header>
        <div class="header_dots">
            
        </div>
        <h1>
            {{title}}
        </h1>
    </header>
</template>
<script>
export default {
    name: 'HeaderDoggies',
    props: {
        title: String,
    }
}
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>