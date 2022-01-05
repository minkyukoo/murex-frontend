<template>
  <div>
    <Carousel
      :perPage="1"
      :autoplay="true"
      :loop="true"
      :autoplayHoverPause="false"
      :paginationEnabled="false"
    >
      <Slide v-for="(slide, index) in arr" :key="index">
        <div class="slider-item">
          <h2>{{ slide.title }}</h2>
          <h6>{{ slide.subtext }}</h6>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      arr: [
        {
          title: "Reinvent Venture Capital1",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
        },
        {
          title: "Reinvent Venture Capital2",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
        },
        {
          title: "Reinvent Venture Capital3",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
        },
        {
          title: "Reinvent Venture Capital4",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
        },
      ],
    };
  },
};
</script>

<style>
.slider-item {
  height: calc(100vh - 140px);
  width: 100%;
}
</style>