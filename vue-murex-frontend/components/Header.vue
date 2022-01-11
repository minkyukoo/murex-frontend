<template>
  <div :class="`header ${bgClass}`">
    <div class="container">
      <div class="header-wrap">
        <div class="left-panel">
          <router-link to="/" v-if="bgClass === 'bg-transparent'">
            <img src="../assets/images/site-logo-white.svg" alt="Logo" />
            {{width}}
          </router-link>
          <router-link to="/" v-else>
            <img src="../assets/images/site-logo.svg" alt="Logo" />
          </router-link>
        </div>
        <div class="right-panel">
          <div v-if="mobileView">
            <button type="button" class="">
              <i class="icon-menu"></i>
            </button>
          </div>
          <div class="flex jc-center" v-if="!mobileView">
            <ul class="nav-wrap">
              <li
                class="nav-item"
                v-for="(item, i) of menu"
                :key="item.label || i"
              >
                <NuxtLink :to="item.to" class="nav-link">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
            <LanguageInput />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtHeader",
  props: {
    bgClass: String,
  },
  data() {
    return {
      menu: [
        { label: "Our Founders", to: "/founders" },
        { label: "Our Team", to: "/team" },
        { label: "Philosophy", to: "/philosophy" },
        { label: "Contents", to: "/contents" },
        { label: "Contact", to: "/contact" },
      ],
      mobileView: false,
      width: document.documentElement.clientWidth,
    };
  },
  // created() {
  //   // window.addEventListener("resize", this.handleResize);
  //   this.handleView();
  // },
  // destroyed() {
  //   window.removeEventListener("resize", this.handleResize);
  // },
   mounted: function () {
    this.$nextTick(function () {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    // handleView() {
    //   if (process.client) {
    //     let width = window.innerWidth;
    //     console.log(width)
    //   } else {
    //     console.log("not client")
    //   }
    //   // console.log(this.mobileView);
    // },
    // getDimensions() {
    //   this.width = document.documentElement.clientWidth;
    //   // this.height = document.documentElement.clientHeight;
    // },
    onResize() {
      console.log('Resized')
    }
    // handleResize() {
    //   this.windowSize = window.innerWidth;
    // },
  },
};
</script>

<style lang="scss" scoped>
.header {
  // background: $white;

  .header-wrap {
    @include dflex-align-justify-between;
    height: 80px;
    .right-panel {
      @include dflex-align-center;
      .nav-wrap {
        @include dflex-align-center;
        .nav-item {
          .nav-link {
            font-family: $default-font;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: $black-1;
            padding: 0 30px;
          }
        }
      }
    }
  }
  &.bg-white {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  &.bg-transparent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    .right-panel {
      .lang-dropdown {
        select {
          color: $white;
        }
      }
      .nav-wrap {
        .nav-item {
          .nav-link {
            color: $white;
          }
        }
      }
    }
  }
}
</style>
