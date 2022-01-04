<template>
  <div class="header">
    <div class="left-panel">
      <router-link to="/">
        <img src="../assets/images/site-logo.svg" alt="Logo" />
      </router-link>
    </div>
    <div class="right-panel">
      <ul>
        <li>
          <NuxtLink to="/">home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/users">Users</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtHeader",
}
</script>

<style lang="scss" scoped>
.header {
  @include dflex-align-center;
  background: $white;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
