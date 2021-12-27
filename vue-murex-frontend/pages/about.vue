<template>
<div>

  <h1>About us page</h1>
  <h1 class="title">{{ $t('message') }}</h1>
  <!-- <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
  <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link> -->
  <LanguageInput/>
</div>
</template>

<script>
export default {
  name: "AboutPage",
}
</script>

<style scoped>
  h1{
    font-size: 40px;
  }
</style>
