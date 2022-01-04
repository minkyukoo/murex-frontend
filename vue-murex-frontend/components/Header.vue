<template>
  <div class="header">
    <div class="left-panel">
      <router-link to="/">
        <img src="../assets/images/site-logo.svg" alt="Logo" />
      </router-link>
    </div>
    <div class="right-panel">
      <ul class="nav-wrap">
        <li class="nav-item" v-for="(item, i) of menu" :key="item.label || i">
          <NuxtLink :to="item.to" class="nav-link">{{item.label}}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtHeader",
  data() {
    return{
      menu: [
        { label: "Our Founders", to: "/founders" },
        { label: "Our Team", to: "/team" },
        { label: "Philosophy", to: "/philosophy" },
        { label: "Contents", to: "/contents" },
        { label: "Contact", to: "/contact" },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @include dflex-align-justify-between;
  background: $white;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  .right-panel {
    .nav-wrap {
      @include dflex-align-center;
    }
  }
}
</style>
