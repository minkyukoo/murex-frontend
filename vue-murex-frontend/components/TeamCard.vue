<template>
  <!-- <div class="team-item" :style="{backgroundImage: `url(${require('../assets/images/'+bgImage)})`}"> -->
  <div
    :class="`team-item ${$nuxt.$route.path === '/team' ? 'gradient' : ''}`"
    @click="MemberInfo"
    @mouseenter="() => (changeImg = true)"
    @mouseleave="() => (changeImg = false)"
  >
    <img
      :src="`${require('../assets/images/' + bgImage)}`"
      :alt="`${name}`"
      class="member-img"
      v-if="!changeImg"
    />
    <img
      :src="`${require('../assets/images/' + imgOnHover)}`"
      :alt="`${name}`"
      class="member-img"
      v-else
    />
    <div class="team-desc">
      <div class="team-desc-cont">
        <p class="name">{{ name }}</p>
        <p class="designation">{{ designation }}</p>
      </div>
      <div class="sns-links" v-if="`${$nuxt.$route.path}` === '/team'">
        <a class="sns-link" :href="`${snsLnLink}`" v-if="snsLnLink">
          <i class="icon-ln"></i>
        </a>
        <a class="sns-link" :href="`${snsFbLink}`" v-if="snsFbLink">
          <i class="icon-fb"></i>
        </a>
      </div>
      <div class="sns-links" v-else-if="`${$nuxt.$route.path}` === '/founders'">
        <a class="sns-link" href="/#">
          <img src="../assets/icons/Plus.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    bgImage: String,
    name: String,
    designation: String,
    snsFbLink: String,
    snsLnLink: String,
    imgOnHover: String,
    product: Object,
  },
  data() {
    return {
      changeImg: false,
    };
  },
  methods: {
    MemberInfo() {
      this.$emit("openModal", this.product);
      // console.log("member clicked", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
.team-item {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  &.gradient {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 59.11%,
        #272727 100%
      );
    }
    &:hover {
      .team-desc {
        .team-desc-cont {
          .name {
            color: $white;
          }
          .designation {
            color: $white;
          }
        }
      }
    }
  }
  .member-img {
    height: 100%;
    aspect-ratio: 2/2.15;
    max-height: 438px;
    @media screen and (max-width: 1560px) {
      max-height: 300px;
    }
  }
  &:hover {
    .team-desc {
      .team-desc-cont {
        .name {
          color: $black-1;
        }
        .designation {
          color: $black-1;
        }
      }
      .sns-links {
        transform: translateY(0%);
        opacity: 1;
        transition: all 0.3s ease;
      }
    }
  }
  img {
    width: 100%;
  }
  .team-desc {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 25px 5px 25px 25px;
    @media screen and (max-width: 767px) {
      padding: 15px;
    }
    .team-desc-cont {
      .name {
        @include white-text-1;
        margin-bottom: 4px;
      }
      .designation {
        @include white-text-2;
      }
    }
    .sns-links {
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.3s ease;

      .sns-link {
        display: inline-block;
        margin-right: 12px;
        vertical-align: middle;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
