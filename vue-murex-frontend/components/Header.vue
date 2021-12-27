<template>
  <div class="header">
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
</template>

<script>
export default {
  name: "NuxtHeader",
}
</script>

<style lang="scss" scoped>
.header {
  background-color: $red;
  padding: 10px;
}
</style>
