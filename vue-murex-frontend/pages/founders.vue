<template>
  <div class="founders">
    <div class="container">
      <TopHeading :heading="pageHeading" />
    </div>
    <div class="fluidContainer">
      <Filters />
      <FounderCards />
    </div>
  </div>
</template>

<script>
import TopHeading from "../components/TopHeading.vue";
import Filters from "../components/Filters.vue";
import FounderCards from "../components/FounderCards.vue";
  export default {
    name: 'founders',
    components: {
      TopHeading,
      Filters,
      FounderCards,
    },
    data() {
      return{
        pageHeading: "Our Founders"
      }
    }
  }
</script>

<style lang="scss" scoped>
  .founders{
    background: #E5E5E5;
    padding-bottom: calc(60px + 2vw);
  }
</style>
