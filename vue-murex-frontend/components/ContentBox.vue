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
    <a :href="link">
      <div
        class="content-img"
        v-if="image.length > 0"
        :style="{
          backgroundImage: `url(${image})`,
        }"
      >
        <!-- <img :src="image" alt="img" /> -->
      </div>
      <div class="no-img" v-else>
        <h4>No image available</h4>
      </div>
    </a>
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
    overflow-x: auto;
    @media screen and (max-width: 767px) {
      order: 3;
    }
    h3 {
      width: 85%;
      word-break: break-all;
      font-weight: 300;
      font-size: 32px;
      line-height: 140%;
      color: $black-3;
      margin-bottom: 20px;
      text-decoration: 2px solid underline;
      text-decoration-color: transparent;
      transition: all 0.3s ease;
      @media screen and (max-width: 1600px) {
        font-size: 22px;
      }
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
    width: 100%;
    height: 300px;
    background-position: center center;
    background-size: cover;
    @media screen and (max-width: 992px) {
      height: 200px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .no-img{
    width: 100%;
    height: 300px;
    background-color: #cecece;
    @include dflex-align-justify-center;
    @media screen and (max-width: 992px) {
      height: 200px;
    }
  }
}
</style>