<template>
  <div class="footer">
    <div class="container">
      <p>© Copyright 2018. All Rights Reserved, Murexpartners.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  @include dflex-align-justify-center;
  border-top: 1px solid $grey-1;
  height: 60px;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    height: 50px;
  }
  p {
    font-family: $default-font;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: $grey-2;
    @media screen and (max-width: 567px) {
      font-size: 10px;
    }
  }
}
</style>
