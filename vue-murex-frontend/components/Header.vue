<template>
  <div :class="`header ${bgClass}`">
    <div class="container">
      <div class="header-wrap">
        <div class="left-panel">
          <router-link to="/">
            <img src="../assets/images/site-logo.svg" alt="Logo" />
          </router-link>
        </div>
        <div class="right-panel">
          <ul class="nav-wrap">
            <li class="nav-item" v-for="(item, i) of menu" :key="item.label || i">
              <NuxtLink :to="item.to" class="nav-link">{{ item.label }}</NuxtLink>
            </li>
          </ul>
          <LanguageInput />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtHeader",
  props:{
    bgClass: String,
  },
  data() {
    return {
      menu: [
        { label: "Our Founders", to: "/founders" },
        { label: "Our Team", to: "/team" },
        { label: "Philosophy", to: "/philosophy" },
        { label: "Contents", to: "/contents" },
        { label: "Contact", to: "/contact" },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  // background: $white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  .header-wrap {
    @include dflex-align-justify-between;
    height: 80px;
    .right-panel {
      @include dflex-align-center;
      .nav-wrap {
        @include dflex-align-center;
        .nav-item {
          .nav-link {
            font-family: $default-font;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: $black-1;
            padding: 0 30px;
          }
        }
      }
    }
  }
}
</style>
