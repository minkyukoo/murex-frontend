<template>
  <div class="founders">
    <div class="container">
      <TopHeading :heading="pageHeading" />
    </div>
    <div class="fluidContainer">
      <!-- <Filters /> -->
      <FounderCards />
    </div>
  </div>
</template>

<script>
import TopHeading from "../components/TopHeading.vue";
// import Filters from "../components/Filters.vue";
import FounderCards from "../components/FounderCards.vue";
export default {
  name: "founders",
  components: {
    TopHeading,
    // Filters,
    FounderCards,
  },
  data() {
    return {
      pageHeading: this.$t(`founders.pageTitle`),
    };
  },
};
</script>

<style lang="scss" scoped>
.founders {
  background: #f6f6f6;
  padding-bottom: calc(60px + 2vw);
  height: 100%;
  min-height: calc(100vh - 140px);
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
}
</style>
