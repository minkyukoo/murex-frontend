<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-6">
    <TeamCard
      v-for="(team, i) of teams"
      :key="team.id || i + 1"
      :bgImage="team.image"
      :product="team"
      :imgOnHover="team.imgOnHover"
      :name="team.name"
      :designation="team.designation"
      :snsFbLink="team.sns_links.fb"
      :snsLnLink="team.sns_links.ln"
      :engName="team.DescEng.name"
      :engDesignation="team.DescEng.designation"
      type="team"
      v-on:openModal="OpenModal($event)"
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
          image: "Advisory/1.png",
          imgOnHover: "Advisory/1.png",
          sns_links: {
            fb: "",
            ln: "",
          },
          DescEng: {
            name: "Taekdong Kim",
            designation: "Venture Partner / Lake Investment CEO",
          },
        },
        {
          id: 2,
          name: "김기봉",
          designation: "벤처파트너 / 글로벌네트웍스 대표이사",
          image: "Advisory/2.png",
          imgOnHover: "Advisory/2.png",
          sns_links: {
            fb: "",
            ln: "",
          },
          DescEng: {
            name: "Gibong Kim",
            designation: "Venture Partner / Global Networks President",
          },
        },
        {
          id: 3,
          name: "이수진",
          designation: "벤처파트너 / 야놀자 대표이사",
          image: "Advisory/3.png",
          imgOnHover: "Advisory/3.png",
          sns_links: {
            fb: "",
            ln: "",
          },
          DescEng: {
            name: "Sujin Lee",
            designation: "Venture Partner / Yanolja CEO",
          },
        },
        // {
        //   id: 4,
        //   name: "송치형",
        //   designation: "벤처파트너 / 두나무 의장",
        //   image: "Advisory/4.png",
        //   imgOnHover: "Advisory/4.png",
        //   sns_links: {
        //     fb: "",
        //     ln: "",
        //   },
        //   DescEng: {
        //     name: "Chihyung Song",
        //     designation: "Venture Partner / Dunamu Chairman",
        //   },
        // },
        {
          id: 5,
          name: "하용호",
          designation: "자문 / 데이터오븐 대표",
          image: "Advisory/5.png",
          imgOnHover: "Advisory/5.png",
          sns_links: {
            fb: "",
            ln: "",
          },
          DescEng: {
            name: "Yongho Ha",
            designation: "Advisor / DataOven CEO",
          },
        },
      ],
    };
  },
  methods: {
    OpenModal(event) {
      this.$emit("openModal", false);
      console.log("member click passed", event);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>