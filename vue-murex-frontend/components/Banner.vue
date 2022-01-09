<template>
  <div v-if="show">
    <carousel
      :easing="easeinout"
      :autoplayTimeout="4000"
      :perPage="1"
      :autoplay="slide"
      :loop="true"
      :autoplayHoverPause="false"
      :paginationEnabled="false"
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
            <div class="Banner-state">
              <div class="flex items-center">
                <div @click="pauseSlide">
                  <img src="../assets/images/play.svg" alt="img" />
                </div>
                <div class="px-4 pb-2">
                  <progress id="file" :value="slide.value" max="100"></progress>
                </div>
                <div>
                  <h5>
                    <span>{{ slide.id }}</span> /
                    <span>0{{ arr.length }}</span>
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
export default {
  data() {
    return {
      show: false,
      slide: true,
      arr: [
        {
          id: "01",
          title: "Reinvent Venture Capital1",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
          value: "25"
        },
        {
          id: "02",
          title: "Reinvent Venture Capital2",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
          value: "50"
        },
        {
          id: "03",
          title: "Reinvent Venture Capital3",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
          value: "75"
        },
        {
          id: "04",
          title: "Reinvent Venture Capital4",
          subtext:
            "뮤렉스파트너스는 새로운 밴처캐피탈입니다.벤처캐피탈의 혁신을 꿈꾸는 젊은 벤처캐피탈 리스트들이 만나는 회사입니다.창업자와 함께 일하고 자본시장에 새로운 흐름을 만듭니다.",
          image: "banner-img.png",
          value: "100"
        },
      ],
    };
  },
  mounted() {
    this.show = true;
    console.log(this.slide);
  },
  methods: {
    pauseSlide() {
      this.slide = !this.slide;
      console.log(this.slide);
    }
  }
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
  .Banner-state {
    position: absolute;
    bottom: 10%;
    color: $white;
  }
  progress {
    vertical-align: baseline;
    min-width: 400px;
    color: white;
    height: 2px;
  }
  progress[value] {
    -webkit-appearance: none;
    appearance: none;
  }
  progress[value]::-webkit-progress-bar {
    background-color: #666666;
    border-radius: 5px;
  }
  progress[value]::-webkit-progress-value {
    background-color: #ffffff;
    height: 2px;
  }
}
</style>
