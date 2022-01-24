<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-x-0 md:gap-x-4 content-box"
  >
    <div class="col-span-2 content-desc">
      <a :href="link">
        <h3>
          {{ desc }}
        </h3>
      </a>
      <h6 class="author">by {{ author }}</h6>
    </div>
    <div class="content-img">
      <img :src="image" alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "contentBox",
  props: {
    desc: String,
    author: String,
    image: String,
    link: String,
  },
  // mounted() {
  //   console.log("images" , author)
  // }
};
</script>

<style lang="scss" scoped>
.content-box {
  margin-bottom: calc(60px + 3vw);
  overflow-x: auto;
  &:hover {
    .content-desc {
      h3 {
        text-decoration-color: $purple-1;
        color: $purple-1;
        transition: all 0.3s ease;
      }
    }
  }
  .content-desc {
    @include dflex-column-between;
    padding-bottom: 20px;
    border-bottom: 1px solid $grey-2;
    @media screen and (max-width: 767px) {
      order: 3;
    }
    h3 {
      width: 85%;
      font-weight: 300;
      font-size: 32px;
      line-height: calc(28px + 1vw);
      color: $black-3;
      margin-bottom: 20px;
      text-decoration: 2px solid underline;
      text-decoration-color: transparent;
      transition: all 0.3s ease;
      @media screen and (max-width: 767px) {
        width: 100%;
        font-size: 16px;
      }
    }
    .author {
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: $grey-2;
      @media screen and (max-width: 767px) {
        font-size: 12px;
      }
    }
  }
  .content-img {
    img {
      width: 100%;
      max-height: 300px;
    }
  }
}
</style>