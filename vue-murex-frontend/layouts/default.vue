<template>
  <div class="default-layout">
    <Header />
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


