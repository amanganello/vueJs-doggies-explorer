<template>
    <span class="empty_dot"></span>
</template>

<script>

export default {
    name: 'GeneralDot',
}
</script>

<style scoped lang="scss">
@use '../../assets/main';
.empty_dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  border: solid 2px main.$primary_font_color_white;
}
</style>