<template>
  <div class="team-item" :style="{backgroundImage: `url(${require('../assets/images/'+bgImage)})`}">
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
  }
}
</script>

<style lang="scss" scoped>
.team-item {
    @include dflex-align-end;
    width: 480px;
    min-height: 480px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .team-desc {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 39px 43px 39px 28px;
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
