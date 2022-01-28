<template>
  <div v-if="show">
    <carousel
      easing="ease-in-out"
      :autoplayTimeout="6000"
      :perPage="1"
      :autoplay="slide"
      :loop="true"
      :autoplayHoverPause="false"
      :paginationEnabled="false"
      @page-change="FindPageNumber"
    >
      <slide v-for="(slide, index) in bannerArr" :key="index">
        <div
          class="slider-item"
          :style="{
            backgroundImage: `url(${
              mobileView ? slide.mob_image : slide.pc_image
            })`,
          }"
        >
          <!-- <div class="container">
            <div class>
              <h2>{{ slide.title }}</h2>
              <h6>{{ slide.subtext }}</h6>
            </div>
          </div> -->
        </div>
      </slide>
    </carousel>
    <BannerState
      :slideNumber="this.number"
      :TotalSlides="this.bannerArr.length"
      :progressValue="this.progressValue"
      v-on:PauseIt="pauseSlide"
    />
  </div>
</template>

<script>
import BannerState from "./BannerState.vue";
export default {
  components: {
    BannerState,
  },
  data() {
    return {
      show: false,
      slide: true,
      pauseIcon: true,
      number: "1",
      progressValue: 1,
      bannerArr: [],
      mobileView: false,
     
    };
  },
  mounted() {
    this.show = true;
    console.log(this.slide);
    this.progressValue = (this.number / this.bannerArr.length) * 100;
    this.getBanner();
    window.addEventListener("resize", this.getDimensions);
  },
  unmounted() {
    window.removeEventListener("resize", this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.mobileView = window.innerWidth <= 567;
    },
    pauseSlide() {
      this.slide = !this.slide;
      this.pauseIcon = !this.pauseIcon;
    },
    FindPageNumber(currentPage) {
      console.log(`page changed to ${currentPage}`);
      this.number = `${currentPage + 1}`;
      this.progressValue = (this.number / this.bannerArr.length) * 100;
    },
    async getBanner() {
      const BannerItem = await this.$axios.$get("getbannerlist");
      console.log("Items", BannerItem.data);
      this.bannerArr = BannerItem.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-item {
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background-image: url("../assets/images/banner-img.png");
  background-size: cover;
  position: relative;
}
.slider-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(92, 25, 66, 0.3) 0%,
      rgba(92, 25, 66, 0.3) 32.03%
    ),
    rgba(48, 42, 85, 0.3);
}
.slider-item {
  h2 {
    font-weight: 600;
    font-size: calc(19px + 3vw);
    line-height: 112.5%;
    color: #ffffff;
    position: relative;
    z-index: 4;
    margin-bottom: 20px;
  }
  h6 {
    font-weight: normal;
    font-size: 15px;
    line-height: 200%;
    width: 30%;
    color: #ffffff;
    position: relative;
    z-index: 4;
    @media screen and (max-width: 765px) {
      width: 100%;
    }
  }
}
</style>
