<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-8">
    <TeamCard
      v-for="(team, i) of teams"
      :key="team.id || i + 1"
      :bgImage="team.image"
      :name="team.name"
      :designation="team.designation"
      :snsFbLink="team.sns_links.fb"
      :snsLnLink="team.sns_links.ln"
      v-on:openModal="OpenModal"
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
          name: "김택동",
          designation: "벤처파트너 / 레이크투자자문 대표이사",
          image: "Advisory1.png",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 2,
          name: "강동민",
          designation: "부사장 / Co-Founder",
          image: "Advisory2.png",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 3,
          name: "오지성",
          designation: "부사장 / Co-Founder",
          image: "Advisory3.png",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 4,
          name: "박진영",
          designation: "수석",
          image: "Advisory4.png",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 5,
          name: "김세진",
          designation: "수석",
          image: "Advisory5.png",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
      ]
    };
  },
  methods : {
    OpenModal() {
      this.$emit('openModal',true)
      console.log("member click passed")
    }
  }
}
</script>

<style lang="scss" scoped>

</style>