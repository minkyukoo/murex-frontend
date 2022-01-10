<template>
  <div class="team">
    <div class="fluidContainer">
      <div class="container">
        <TopHeading :heading="pageHeading" />
      </div>
      <div class="divider-1"></div>
      <TeamCards />
    </div>
  </div>
</template>

<script>
import TeamCards from "../components/TeamCards.vue";
export default {
  name: "team",
  components: { TeamCards },
  data() {
    return {
      pageHeading: "Our Team",
    };
  },
}
</script>

<style lang="scss" scoped>
</style>
