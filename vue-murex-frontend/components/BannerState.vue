<template>
  <div class="container">
    <div class="Banner-state">
      <div class="flex items-center">
        <div @click="pauseSlide" class="slideCon">
          <img src="../assets/images/pause.svg" alt="img" v-if="pauseIcon" />
          <img
            src="../assets/icons/play.svg"
            alt="img"
            v-else-if="!pauseIcon"
          />
        </div>
        <div class="px-4 pb-2">
          <progress id="file" :value="progressValue" max="100"></progress>
        </div>
        <div>
          <h5 class="pagination">
            <span>{{ slideNumber > 9 ? slideNumber : 0 + slideNumber }}</span> /
            <span>{{ TotalSlides > 9 ? TotalSlides : `0${TotalSlides}` }}</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerState",
  props: {
    slideNumber: String,
    TotalSlides: Number,
    progressValue: Number,
    // pauseIcon: Boolean,
  },
  data() {
    return {
      pauseIcon: true,
    };
  },
  methods: {
    pauseSlide() {
      this.$emit("PauseIt", false);
      this.pauseIcon = !this.pauseIcon;
    },
  },
};
</script>

<style lang="scss" scoped>
.Banner-state {
  position: absolute;
  bottom: 15%;
  color: $white;
}
.pagination{
  font-family: $secondery-font;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #666666;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  span{
    padding-right: 8px;
    color: #E0E0E0;
    &:nth-child(2){
      color: #666666;
      padding: 0 0 0 8px;
    }
  }
}
.slideCon {
  img {
    width: 24px;
    height: 24px;
  }
}
progress {
  vertical-align: baseline;
  min-width: 400px;
  color: white;
  height: 1px;

  @media screen and (max-width: 765px) {
    min-width: 280px;
  }
  @media screen and (max-width: 560px) {
    min-width: 180px;
  }
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
  transition: width 3s ease;
}
</style>
