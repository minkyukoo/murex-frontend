<template>
  <div class="top-heading">
    <h1 class="main-heading">{{ heading }}</h1>
  </div>
</template>

<script>
export default {
  name: "TopHeading",
  props: {
    heading: String,
  },
};
</script>

<style lang="scss" scoped>
.top-heading {
  @include dflex-align-justify-center;
  // border: 1px solid red;
  padding: 100px 0;
  @media screen and (max-width: 767px) {
    padding: 40px 0;
  }
  .main-heading {
    font-weight: 500;
    font-size: 52px;
    color: $black-1;
    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }
}
</style>
