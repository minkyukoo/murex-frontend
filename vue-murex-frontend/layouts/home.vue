<template>
  <div class="home-layout">
    <Header bgClass="bg-transparent" />
    <div class="main-body">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  name: 'Home-Layout',
}
</script>

<style lang="scss">
  .main-body {
    min-height: calc(100vh - (80px + 60px));
  }
</style>


