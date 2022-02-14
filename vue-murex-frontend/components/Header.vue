<template>
  <div :class="`header ${bgClass}`">
    <div class="Nav-container">
      <div class="header-wrap">
        <div class="left-panel">
          <router-link to="/" v-if="bgClass === 'bg-transparent'">
            <img
              src="../assets/images/site-logo-white.svg"
              class="logo"
              alt="Logo"
            />
          </router-link>

          <router-link to="/" v-else>
            <img src="../assets/images/site-logo.png" class="logo" alt="Logo" />
          </router-link>
        </div>
        <div class="right-panel">
          <div v-if="mobileView">
            <button type="button" @click="mobileToggle">
              <i
                :class="
                  bgClass === 'bg-transparent'
                    ? 'icon-menu'
                    : 'icon-menu-violet-bg'
                "
              ></i>
            </button>
          </div>
          <div class="flex jc-center" v-if="!mobileView">
            <ul class="nav-wrap">
              <li
                class="nav-item"
                v-for="(item, i) of menu"
                :key="item.label || i"
              >
                <NuxtLink
                  :to="localePath(`${item.to}`)"
                  class="nav-link"
                  @click="() => (this.mobileMenu = false)"
                  >{{ item.label }}</NuxtLink
                >
              </li>
            </ul>
            <LanguageInput />
          </div>
        </div>
      </div>
    </div>
    <div class="Mobile-dropdown" v-if="mobileMenu">
      <div class="text-right p-5">
        <button type="button" @click="mobileToggle">
          <i class="icon-cross"></i>
        </button>
      </div>
      <ul>
        <li
          class="Mobnav-item"
          v-for="(item, i) of menu"
          :key="item.label || i"
          @click="closeMenu"
        >
          <NuxtLink :to="item.to" class="nav-link">{{ item.label }}</NuxtLink>
        </li>
      </ul>
      <div class="lang-select">
        <div class="elements">
          <span
            :class="`${selectedValue === 'kr' ? 'active' : ''}`"
            @click="setLang('kr')"
            >KO</span
          >
          <span
            :class="`${selectedValue === 'en' ? 'active' : ''}`"
            @click="setLang('en')"
            >EN</span
          >
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
      mobileMenu: false,
      selectedValue: "",
    };
  },
  created() {
    this.getDimensions();
    this.selectedValue = this.$i18n.locale;
  },
  mounted() {
    window.addEventListener("resize", this.getDimensions);
  },
  unmounted() {
    window.removeEventListener("resize", this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.mobileView = window.innerWidth <= 990;
    },
    mobileToggle() {
      this.mobileMenu = !this.mobileMenu;
    },
    closeMenu() {
      this.mobileMenu = false;
    },
    setLang(event) {
      console.log("see event", event);
      this.selectedValue = event;
      this.$router.replace(this.switchLocalePath(this.selectedValue));
    },
  },
  watch: {
    mobileMenu: function () {
      if (this.mobileMenu) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  // background: $white;
  .logo {
    width: 160px;
    height: auto;
    @media screen and (max-width: 640px) {
      width: 105px;
    }
  }
  .container {
    @media screen and (max-width: 640px) {
      padding: 0 16px;
    }
  }
  .header-wrap {
    @include dflex-align-justify-between;
    height: 80px;
    @media screen and (max-width: 640px) {
      height: 60px;
    }
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
            @media screen and (max-width: 1024px) {
              padding: 0 12px;
            }
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
  .Mobile-dropdown {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background-color: $white;
    ul {
      padding: 30px;
      margin-bottom: 10px;
      li {
        margin-bottom: 30px;
        font-weight: 500;
        font-size: 16px;
        color: $black-1;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .lang-select {
      padding: 0px 30px 30px;
      .elements {
        padding: 40px 0 0;
        border-top: 1px solid $grey-3;
        span {
          font-weight: normal;
          font-size: 16px;
          display: inline-block;
          margin-right: 16px;
          color: $grey-4;
          cursor: pointer;
          &.active {
            color: $black-1;
          }
        }
      }
    }
  }
  .Mobnav-item {
    width: fit-content;
    width: -moz-fit-content;
  }
  .Nav-container {
    width: 100%;
    padding: 0 48px;
    @media screen and (max-width: 640px) {
      padding: 0 16px;
    }
  }
}
</style>
