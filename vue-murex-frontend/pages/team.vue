<template>
  <div class="team">
    <div class="fluidContainer">
      <div class="container">
        <TopHeading :heading="pageHeading" />
      </div>
      <div class="divider-1"></div>

      <div class="teams-wrap">
        <div
          class="team-item"
          v-for="(team, i) of teams"
          :key="team.id || i + 1"
          :style="{
            backgroundImage: `url(${require('../assets/images/' +
              team.image)})`,
          }"
        >
          <div class="team-desc">
            <div class="team-desc-cont">
              <p class="name">{{ team.name }}</p>
              <p class="designation">{{ team.designation }}</p>
            </div>
            <div class="sns-links">
              <nuxt-link class="sns-link" :to="`${team.sns_links.ln}`">
                <i class="icon-ln"></i>
              </nuxt-link>
              <nuxt-link class="sns-link" :to="`${team.sns_links.fb}`">
                <i class="icon-fb"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team',
  data() {
    return {
      pageHeading: "Our Team",
      teams: [
        {
          id: 1,
          name: "이범석",
          designation: "CEO / Co-Founder",
          image: "team-01.jpg",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 2,
          name: "강동민",
          designation: "부사장 / Co-Founder",
          image: "team-02.jpg",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 3,
          name: "강동민",
          designation: "부사장 / Co-Founder",
          image: "team-02.jpg",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
      ]
    };
  },
}
</script>

<style lang="scss" scoped>
.teams-wrap {
  @include dflex-align-end;
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
}
</style>
