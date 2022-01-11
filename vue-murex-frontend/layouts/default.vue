<template>
  <div class="default-layout">
    <client-only placeholder="loading...">
      <Header bgClass="bg-white" />
    </client-only>
    <div class="main-body">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
  .main-body {
    min-height: calc(100vh - (80px + 60px));
  }
</style>


