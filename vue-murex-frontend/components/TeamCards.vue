<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-8">
    <TeamCard
      v-for="(team, i) of teams"
      :key="team.id || i + 1"
      :product="team"
      :bgImage="team.image"
      :imgOnHover="team.imgOnHover"
      :name="team.name"
      :designation="team.designation"
      :snsFbLink="team.sns_links.fb"
      :snsLnLink="team.sns_links.ln"
      v-on:openModal="OpenModal($event)"
      @click="MemberInfo"
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
          basicDesc:
            "강동민 부사장은 +14년 경력의 벤처캐피탈리스트로 야놀자, 펫프렌즈, 바디텍메드, 패스트파이브 등에 투자하였습니다. 현대증권에서 근무한 금융 출신 경험을 바탕으로 투자 기업 분석, 투자 전략 수립 등에 전문성을 가지고 있습니다.",
          EducationList: [
            "파트너스인베스트먼트(’14~’18) 수석팀장",
            "현대증권(現 KB증권)(’07~’13)",
            "Principal Investment",
            "연세대 경제학 석사",
            "서울대 경제학부",
          ],
          investmentExp1: ["펫프렌즈", "다노", "솔트룩스", "모아이게임즈"],
          investmentExp2: ["스틸에잇", "야놀자", "바디텍메드", "루멘스"],
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
        },
        {
          id: 2,
          name: "강동민",
          designation: "부사장 / Co-Founder",
          image: "team-02.jpg",
          imgOnHover: "company-logoOnHover.png",
          basicDesc:
            "강동민 부사장은 +14년 경력의 벤처캐피탈리스트로 야놀자, 펫프렌즈, 바디텍메드, 패스트파이브 등에 투자하였습니다. 현대증권에서 근무한 금융 출신 경험을 바탕으로 투자 기업 분석, 투자 전략 수립 등에 전문성을 가지고 있습니다.",
          EducationList: {
            first: "파트너스인베스트먼트(’14~’18) 수석팀장",
            second: "현대증권(現 KB증권)(’07~’13)",
            third: "Principal Investment",
            fourth: "연세대 경제학 석사",
            fifth: "서울대 경제학부",
          },
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
        },
      ],
    };
  },
  methods: {
    OpenModal(event) {
      this.$emit("openModal", event);
      // console.log("member click passed",event)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
