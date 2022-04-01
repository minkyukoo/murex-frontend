<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">404 Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style lang="scss" scoped>
.error-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(213, 53, 53, 1);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>