<template>
  <!-- <div class="team-item" :style="{backgroundImage: `url(${require('../assets/images/'+bgImage)})`}"> -->
  <div class="team-item" @click="MemberInfo">
    <img :src="`${require('../assets/images/'+bgImage)}`" :alt="`${name}`"/>
    <div class="team-desc">
      <div class="team-desc-cont">
        <p class="name">{{ name }}</p>
        <p class="designation">{{ designation }}</p>
      </div>
      <div class="sns-links">
        <nuxt-link class="sns-link" :to="`${snsLnLink}`">
          <i class="icon-ln"></i>
        </nuxt-link>
        <nuxt-link class="sns-link" :to="`${snsFbLink}`">
          <i class="icon-fb"></i>
        </nuxt-link>
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
  },
  methods : {
    MemberInfo() {
      this.$emit('openModal',true)
      console.log("member clicked")
    }
  }
}
</script>

<style lang="scss" scoped>
.team-item {
    // @include dflex-align-end;
    // width: 25%;
    // min-height: 480px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    img {
      width: 100%;
    }
    .team-desc {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 39px 43px 39px 28px;
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
        .sns-link {
          margin-right: 12px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
