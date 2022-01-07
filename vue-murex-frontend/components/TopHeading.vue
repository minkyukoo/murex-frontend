<template>
  <div class="top-heading">
    <h1>{{heading}}</h1>
  </div>
</template>

<script>
export default {
  name: "TopHeading",
  props: {
    heading: String,
  }
};
</script>

<style lang="scss" scoped>
.top-heading {
  @include dflex-align-justify-center;
  border: 1px solid red;
}
</style>
