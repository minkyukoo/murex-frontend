<template>
  <div v-if="show">
    <carousel
      :perPage="1"
      :autoplay="false"
      :loop="true"
      :autoplayHoverPause="false"
      :paginationEnabled="true"
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
            <div class="">
              <h2>{{ slide.title }}</h2>
              <h6>{{ slide.subtext }}</h6>
            </div>
            <div class="Banner-state">
              <div class="flex items-center">
                <div class="p-custom-16">
                  <img src="../assets/images/play.svg" alt="img" />
                </div>
                <div>
                  <img src="../assets/images/track.svg" alt="img" />
                </div>
                <div>
                  <h5>
                    <span>{{ slide.id }}</span> / <span>0{{arr.length}}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
// import { Carousel, Slide } from "vue-carousel";
// import BannerImg from "@/assets/images/banner-img.png";
export default {
  // components: {
  //   Carousel,
  //   Slide,
  // },
  data() {
    return {
      show: false,
      arr: [
        {
          id: "01",
          title: "Reinvent Venture Capital1",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
        },
        {
          id: "02",
          title: "Reinvent Venture Capital2",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
        },
        {
          id: "03",
          title: "Reinvent Venture Capital3",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
        },
        {
          id: "04",
          title: "Reinvent Venture Capital4",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
        },
      ],
    };
  },
  mounted() {
    this.show = true;
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
  .Banner-state{
    position: absolute;
    bottom: 10%;
    color: $white;
  }
}
</style>