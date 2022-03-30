<template>
  <!-- <div class="team-item" :style="{backgroundImage: `url(${require('../assets/images/'+bgImage)})`}"> -->
  <div
    :class="`team-item ${type === 'team' ? 'gradient' : ''}`"
    @mouseenter="
      () => {
        changeImg = true;
        this.$emit('hover', true);
      }
    "
    @mouseleave="
      () => {
        changeImg = false;
        this.$emit('hover', false);
      }
    "
  >
    <!-- {{ engName + engDesignation + setLang }} -->
    <div class="img-holder" @click="MemberInfo">
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
    </div>
    <div class="team-desc">
      <div>
        <div
          class="team-desc-cont"
          v-if="type === 'team' && setLang === 'kr'"
        >
          <p class="name">{{ name }}</p>
          <p class="designation">{{ designation }}</p>
        </div>

        <div class="team-desc-cont" v-else-if="type === 'team' && setLang === 'en'">
          <p class="name">{{ engName }}</p>
          <p class="designation">{{ engDesignation }}</p>
        </div>
        <div
          class="team-desc-cont"
          v-else-if="type === 'founder' && setLang === 'kr'"
        >
          <p class="name">{{ company }}</p>
          <p class="designation">{{ name }}</p>
          <!-- <p class="designation">{{ status }}</p>
        <p class="designation">{{ sector }}</p> -->
        </div>
        <div
          class="team-desc-cont"
          v-else
        >
          <p class="name">{{ engCompany }}</p>
          <p class="designation">{{ engName }}</p>
          <!-- <p class="designation">{{ status }}</p>
        <p class="designation">{{ sector }}</p> -->
        </div>
      </div>
      <div>
        <div class="sns-links" v-if="type === 'team'">
          <a
            class="sns-link"
            :href="`${snsLnLink}`"
            target="_blank"
            v-if="snsLnLink"
          >
            <i class="icon-ln"></i>
          </a>
          <a
            class="sns-link"
            :href="`${snsFbLink}`"
            target="_blank"
            v-if="snsFbLink"
          >
            <i class="icon-fb"></i>
          </a>
        </div>
        <div
          class="sns-links"
          v-else-if="type === 'founder'"
        >
          <a
            class="sns-link"
            :href="companyLink"
            target="_blank"
            v-if="companyLink"
          >
            <img class="plus-icon" src="../assets/icons/Plus.svg" />
          </a>
        </div>
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
    engName: String,
    engDesignation: String,
    engCompany: String,
    company: String,
    designation: String,
    companyLink: String,
    imgOnHover: String,
    product: Object,
    status: String,
    sector: String,
    snsFbLink: String,
    snsLnLink: String,
    type: String,
  },
  data() {
    return {
      changeImg: false,
      setLang: "",
    };
  },
  created() {
    this.setLang = this.$i18n.locale;
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
    .img-holder {
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
    // height: 100%;
    aspect-ratio: 2/2.15;
    max-height: 480px;
    object-fit: cover;
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
    // z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 25px 28px 25px 25px;
    @media screen and (max-width: 767px) {
      padding: 15px;
    }
    .team-desc-cont {
      .name {
        @include white-text-1;
        margin-bottom: 10px;
        @media screen and (max-width: 767px) {
          margin-bottom: 3px;
        }
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
        @media screen and (max-width: 767px) {
          margin-right: 8px;
        }
        .plus-icon {
          width: 55px;
          height: 60px;
          @media screen and (max-width: 1600px) {
            width: 40px;
            height: 45px;
          }
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
