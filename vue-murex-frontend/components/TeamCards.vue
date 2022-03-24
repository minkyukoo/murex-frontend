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
          image: "Teams/1.png",
          imgOnHover: "Teams/1-h.png",
          imgDetails: "Teams/1-d.png",
          basicDesc:
            "LG전자, 삼성 디스플레이에서 해외시장 개척, 전략투자 경험과 10년 이상의 벤처캐피탈 경력을 가지고 있습니다. ",
          EducationList: [
            "파트너스인베스트먼트 인터넷/모바일팀 ('11~'17)",
            "삼성디스플레이 사업개발팀 ('10~'11)",
            "LG 전자 미주 법인, PM ('03~'07)",
            "LG 전자 해외마케팅 ('99~'02)",
            "Dartmouth MBA",
            "부산대 기계공학 학사",
          ],
          investmentExp1: ["야놀자", "트렌비", "김기사", "리멤버"],
          investmentExp2: ["VCNC", "선익시스템", "트러스테이"],
          sns_links: {
            fb: "https://www.facebook.com/people/%EC%9D%B4%EB%B2%94%EC%84%9D/1616244428/",
            ln: "https://www.linkedin.com/in/brandon-bumsuk-lee-9a624a12",
          },
        },
        {
          id: 2,
          name: "강동민",
          designation: "부사장 / Co-Founder",
          image: "Teams/2.png",
          imgOnHover: "Teams/2-h.png",
          imgDetails: "Teams/2-d.png",
          basicDesc:
            "현대증권 Principal Investment, 파트너스인베스트먼트 등 15년 이상의 투자 경력을 가지고 있습니다. ",
          EducationList: [
            "파트너스인베스트먼트(’14~’18) 수석팀장",
            "현대증권(現 KB증권)(’07~’13) Principal Investment",
            "연세대 경제학 석사",
            "서울대 경제학부",
          ],
          investmentExp1: ["야놀자", "펫프렌즈", "패스트파이브", "AmazeVR"],
          investmentExp2: ["바디텍메드", "솔트룩스", "NBT", "루멘스"],
          sns_links: {
            fb: "https://www.facebook.com/dongminkang1",
            ln: "https://www.linkedin.com/in/demiankang1",
          },
        },
        {
          id: 3,
          name: "오지성",
          designation: "부사장 / Co-Founder",
          image: "Teams/3.png",
          imgOnHover: "Teams/3-h.png",
          imgDetails: "Teams/3-d.png",
          basicDesc:
            "포스코인터네셔널에서 해외영업, Kearney에서 전략 컨설팅 경험과 약 10년의 벤처캐피탈 경력을 가지고 있습니다.",
          EducationList: [
            "스톤브릿지벤처스 ('14~'18)",
            "Kearney ('10~'14)",
            "포스코인터네셔널 ('09~'10)",
            "KAIST 기술경영학부",
          ],
          investmentExp1: ["무신사", "어니스트펀드", "팀프레시", "하우빌드"],
          investmentExp2: ["SuperbAI", "두나무", "원티드랩", "데이블"],
          sns_links: {
            fb: "https://www.facebook.com/jiseong.oh.7",
            ln: "https://www.linkedin.com/in/ji-seong-oh-8810a923",
          },
        },
        {
          id: 4,
          name: "박진영",
          designation: "수석",
          image: "Teams/4.png",
          imgOnHover: "Teams/4-h.png",
          imgDetails: "Teams/4-d.png",
          basicDesc:
            "삼성전자에서 딥러닝 기반 자율주행 알고리즘을 개발한 경험을 기반으로, 기술 기반 스트타업에 많은 관심을 가지고 있습니다.",
          EducationList: [
            "삼성전자 C-lab, Project Manager ('17~'18)",
            "삼성전자 무선사업부, Enginner ('14~'17)",
            "고려대 기계공학부",
          ],
          investmentExp1: ["스마트레이더시스템", "Bobidi"],
          investmentExp2: ["Chequer", "콘텐츠테크놀로지스"],
          sns_links: {
            fb: "https://www.facebook.com/jinyku",
            ln: "https://www.linkedin.com/in/jinyoung-park-470b0351/",
          },
        },
        {
          id: 5,
          name: "김세진",
          designation: "수석",
          image: "Teams/5.png",
          imgOnHover: "Teams/5-h.png",
          imgDetails: "Teams/5-d.png",
          basicDesc:
            "의사 출신의 벤처캐피탈리스트로 세나클소프트, 제이앤피메디 등 유수의 헬스케어 기업에 투자하였습니다. 산부인과 전문의로서 병원 산업 특수성에 대한 깊은 이해도와 벤처에 대한 높은 관심도를 바탕으로 헬스케어 및 각종 트렌드 산업을 검토하고 있습니다.",
          EducationList: [
            "서울대병원 산부인과, 전공의 및 전임의 ('16~'20)",
            "Johns Hopkins University Hospital 소아정신과 연수 ('14)",
            "영남대학교 의과대학 의학사",
          ],
          investmentExp1: ["세나클소프트"],
          investmentExp2: ["제이앤피메디"],
          sns_links: {
            fb: "",
            ln: "https://www.linkedin.com/in/sejin-kim-6711418b/",
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
