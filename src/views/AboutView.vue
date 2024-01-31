<template>
  <main class="about">
    <h3>Version 1.0.0</h3>
    <router-link to="/" class="about_link">
        Go Back
    </router-link>
  </main>
</template>

<style scoped lang="scss">
@use '../assets/main.scss';
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .about_link { 
      color: main.$primary_font_color_white;;
  }
}
</style>
