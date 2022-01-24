<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-8">
    <TeamCard
      v-for="(team, i) of teams"
      :key="team.id || i + 1"
      :bgImage="team.image"
      :imgOnHover="team.imgOnHover"
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
          name: "이범석",
          designation: "CEO / Co-Founder",
          image: "team-01.jpg",
          imgOnHover: "company-logoOnHover.png",
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
          imgOnHover: "company-logoOnHover.png",
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
          imgOnHover: "company-logoOnHover.png",
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
          imgOnHover: "company-logoOnHover.png",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 5,
          name: "김세진",
          designation: "수석",
          image: "team-05.jpg",
          imgOnHover: "company-logoOnHover.png",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 6,
          name: "김세호",
          designation: "이사",
          image: "team-06.jpg",
          imgOnHover: "company-logoOnHover.png",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 7,
          name: "이은영",
          designation: "경영기획실장",
          image: "team-07.jpg",
          imgOnHover: "company-logoOnHover.png",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 8,
          name: "김윤나",
          designation: "사원",
          image: "team-08.jpg",
          imgOnHover: "company-logoOnHover.png",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          }
        },
        {
          id: 9,
          name: "신지혜",
          designation: "사원",
          image: "team-09.jpg",
          imgOnHover: "company-logoOnHover.png",
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
