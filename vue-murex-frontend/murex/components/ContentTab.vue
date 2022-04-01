<template>
  <div class="flex content-tab">
    <div
      :class="`tab-element ${tabState === 'all' ? 'active' : ''}`"
      @click="setState('all')"
    >
      <h5>{{ $t(`contents.tabs.allTab`) }}</h5>
    </div>
    <div
      :class="`tab-element ${tabState === 'news' ? 'active' : ''}`"
      @click="setState('news')"
    >
      <h5>{{ $t(`contents.tabs.newTab`) }}</h5>
    </div>
    <div
      :class="`tab-element ${tabState === 'insight' ? 'active' : ''}`"
      @click="setState('insight')"
    >
      <h5>{{ $t(`contents.tabs.insightTab`) }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentTab",
  props: {
    tabState: String,
  },
  // data() {
  //   return {
  //     tabState: "all",
  //   };
  // },
  methods: {
    setState(state) {
      // this.tabState = state;
      console.log("tab state", state);
      this.$emit("currentState", state);
    },
  },
};
</script>

<style lang="scss" scoped>
.content-tab {
  margin-bottom: calc(30px + 1vw);
  .tab-element {
    margin-right: calc(40px + 1vw);
    cursor: pointer;
    color: $grey-2;
    border-bottom: 2px solid transparent;
    transition: all 0.4s ease;
    &.active {
      color: $black-3;
      border-bottom: 2px solid $purple-1;
      transition: all 0.4s ease;
    }
    h5 {
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 4px;
      @media screen and (max-width: 767px) {
        font-size: 15px;
      }
    }
  }
}
</style>
