<template>
  <div
    class="flex flex-col md:flex-row gap-4 gap-x-0 md:gap-x-4 content-box"
    v-if="status != 'inactive'"
  >
    <div class="content-desc">
      <a :href="link" target="_blank">
        <h3>
          {{ desc }}
        </h3>
      </a>
      <h6 class="author">by {{ author }}</h6>
    </div>
    <a :href="link" target="_blank">
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
    status: String,
    id: Number,
  },
  // mounted() {
  //   console.log("images" , author)
  // }
};
</script>

<style lang="scss" scoped>
.content-box {
  margin-bottom: calc(62px + 3vw);
  overflow-x: auto;
  @media screen and (max-width: 640px) {
    margin-bottom: 40px;
  }
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
    // line-height: 48px;
    overflow-x: auto;
    width: calc(100% - 594px);
    flex-grow: 1;
    @media screen and (max-width: 767px) {
      order: 3;
      width: 100%;
    }
    h3 {
      width: 85%;
      word-break: break-all;
      font-weight: 300;
      font-size: 32px;
      line-height: 150%;
      color: $black-3;
      margin-bottom: 20px;
      text-decoration: 2px solid underline;
      text-decoration-color: transparent;
      transition: all 0.3s ease;
      @media screen and (max-width: 1600px) {
        font-size: 21px;
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
    width: 594px;
    height: 300px;
    background-position: center center;
    background-size: cover;
    @media screen and (max-width: 1600px) {
      width: 394px;
      height: 250px;
    }
    @media screen and (max-width: 992px) {
      width: 310px;
      height: 200px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      height: 173px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
  .no-img {
    width: 594px;
    height: 300px;
    background-color: #cecece;
    @include dflex-align-justify-center;
    @media screen and (max-width: 1600px) {
      width: 394px;
      height: 250px;
    }
    @media screen and (max-width: 992px) {
      width: 310px;
      height: 200px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      height: 173px;
    }
  }
}
</style>
