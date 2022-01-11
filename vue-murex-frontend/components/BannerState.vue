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
          <h5>
            <span>{{ slideNumber }}</span> / <span>0{{ TotalSlides }}</span>
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
</style>