<template>
  <div class="teams-wrap">
    <TeamCard
      v-for="(team, i) of teams"
      :key="team.id || i + 1"
      :bgImage="team.image"
      :name="team.name"
      :designation="team.designation"
      :snsFbLink="team.sns_links.fb"
      :snsLnLink="team.sns_links.ln"
    />
  </div>
</template>

<script>
import TeamCard from "./TeamCard.vue";
export default {
  name: "TeamCards",
  components: { TeamCard },
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
          name: "오지성",
          designation: "부사장 / Co-Founder",
          image: "team-03.jpg",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 4,
          name: "박진영",
          designation: "수석",
          image: "team-04.jpg",
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
}
</style>
