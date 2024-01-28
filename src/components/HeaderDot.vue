<template>
    <span class="header_dot"></span>
</template>

<script>

export default {
    name: 'HeaderDot',
}
</script>

<style scoped lang="scss">
@use '../assets/main';
.header_dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  border: solid 2px main.$primary_black;
}
</style>