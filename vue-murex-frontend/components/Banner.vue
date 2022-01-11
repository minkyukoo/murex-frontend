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
      <slide v-for="(slide, index) in arr" :key="index">
        <div
          class="slider-item"
          :style="{
            backgroundImage: `url(${require('../assets/images/' +
              slide.image)})`,
          }"
        >
          <div class="container">
            <div class>
              <h2>{{ slide.title }}</h2>
              <h6>{{ slide.subtext }}</h6>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
    <BannerState
      :slideNumber="this.number"
      :TotalSlides="this.arr.length"
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
      number: "01",
      progressValue: null,
      arr: [
        {
          id: "01",
          title: "Reinvent Venture Capital1",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
          value: "25",
        },
        {
          id: "02",
          title: "Reinvent Venture Capital2",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
          value: "50",
        },
        {
          id: "03",
          title: "Reinvent Venture Capital3",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
          value: "75",
        },
        {
          id: "04",
          title: "Reinvent Venture Capital4",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
          value: "100",
        },

      ],
    };
  },
  mounted() {
    this.show = true;
    console.log(this.slide);
    this.progressValue = (this.number / this.arr.length) * 100;
  },
  methods: {
    pauseSlide() {
      this.slide = !this.slide;
      this.pauseIcon = !this.pauseIcon;
    },
    FindPageNumber(currentPage) {
      console.log(`page changed to ${currentPage}`);
      this.number = `0${currentPage + 1}`;
      this.progressValue = (this.number / this.arr.length) * 100;
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
    font-size: calc(40px + 2vw);
    line-height: 112.5%;
    color: #ffffff;
    position: relative;
    z-index: 4;
  }
  h6 {
    font-weight: normal;
    font-size: 15px;
    line-height: 200%;
    width: 30%;
    color: #ffffff;
    position: relative;
    z-index: 4;
  }
}
</style>
