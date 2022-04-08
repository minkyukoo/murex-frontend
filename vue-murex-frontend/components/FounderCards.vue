<template>
  <div>
    <filters
      v-on:sectorFilter="filterSector($event)"
      v-on:statusFilter="filterStatus($event)"
      :isclose="close"
    />
    <div
      class="
        grid grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        sm:gap-2
        md:gap-4
        lg:gap-6
      "
    >
      <TeamCard
        v-for="(team, i) of teams"
        :key="team.id || i + 1"
        :bgImage="team.image"
        :imgOnHover="team.imgOnHover"
        :name="team.name"
        :company="team.company"
        :companyLink="team.link"
        :status="team.status"
        :sector="team.sector"
        :engCompany="team.DescEng.company"
        :engName="team.DescEng.name"
        type="founder"
        v-on:openModal="OpenModal"
        v-on:hover="hoverEffect($event)"
      />
    </div>
    <div v-if="teams.length == 0" class="no-data-div">No Founders Found</div>
  </div>
</template>

<script>
import Filters from "./Filters.vue";
import TeamCard from "./TeamCard.vue";
export default {
  name: "FounderCards",
  components: { TeamCard, Filters },
  data() {
    return {
      teams: [
        {
          id: 35,
          company: "JNPMedi",
          name: "정권호",
          status: "Current",
          sector: "Healthcare",
          link: "https://www.jnpmedi.com/",
          image: "com_ceo_35.png",
          imgOnHover: "com_35.png",
          DescEng: {
            company: "JNPMedi",
            name: "Kwunho Jeong",
          },
        },
        {
          id: 34,
          company: "콘텐츠테크놀로지스",
          name: "이장원",
          status: "Current",
          sector: "Consumer",
          link: "",
          image: "com_ceo_34.png",
          imgOnHover: "com_34.png",
          DescEng: {
            company: "Contents Technologies",
            name: "Jangwon Lee",
          },
        },
        {
          id: 33,
          company: "Chequer Global, Inc.",
          name: "황인서",
          status: "Current",
          sector: "Enterprise",
          link: "https://www.querypie.com/en",
          image: "com_ceo_33.png",
          imgOnHover: "com_33.png",
          DescEng: {
            company: "Chequer Global, Inc.",
            name: "Brant Hwang",
          },
        },
        {
          id: 32,
          company: "트러스테이",
          name: "김정윤",
          status: "Current",
          sector: "Consumer",
          link: "",
          image: "com_ceo_32.png",
          imgOnHover: "com_32.png",
          DescEng: {
            company: "Trustay",
            name: "Jungyun Kim",
          },
        },
        {
          id: 31,
          company: "Bobidi",
          name: "최정서, 배수현",
          status: "Current",
          sector: "Enterprise",
          link: "https://www.bobidi.com/",
          image: "com_ceo_31.png",
          imgOnHover: "com_31.png",
          DescEng: {
            company: "Bobidi",
            name: "Jungseo Choi, Soohyun Bae",
          },
        },
        {
          id: 30,
          company: "테크타카",
          name: "양수영",
          status: "Current",
          sector: "Enterprise",
          link: "https://www.argoport.com/",
          image: "com_ceo_30.png",
          imgOnHover: "com_30.png",
          DescEng: {
            company: "Techtaka",
            name: "Sooyoung Yang",
          },
        },
        {
          id: 29,
          company: "케어닥",
          name: "박재병",
          status: "Current",
          sector: "Healthcare",
          link: "https://carecoordi.kr/",
          image: "com_ceo_29.png",
          imgOnHover: "com_29.png",
          DescEng: {
            company: "Caredoc",
            name: "Jaebyung Park",
          },
        },
        {
          id: 28,
          company: "글로랑",
          name: "황태일",
          status: "Current",
          sector: "Consumer",
          link: "https://www.glorang.com/",
          image: "com_ceo_28.png",
          imgOnHover: "com_28.png",
          DescEng: {
            company: "Glorang",
            name: "Taeil Hwang",
          },
        },
        {
          id: 27,
          company: "AmazeVR",
          name: "이승준, Ernest Lee",
          status: "Current",
          sector: "Consumer",
          link: "https://www.amazevr.com/",
          image: "com_ceo_27.png",
          imgOnHover: "com_27.png",
          DescEng: {
            company: "AmazeVR",
            name: "Steve Lee, Ernest Lee",
          },
        },
        {
          id: 26,
          company: "큐픽스",
          name: "배석훈",
          status: "Current",
          sector: "Enterprise",
          link: "https://www.cupix.com/",
          image: "com_ceo_26.png",
          imgOnHover: "com_26.png",
          DescEng: {
            company: "Cupix",
            name: "Simon Bae",
          },
        },
        {
          id: 25,
          company: "퍼플랩스",
          name: "전종하",
          status: "Current",
          sector: "Consumer",
          link: "https://www.doremifresh.com/index",
          image: "com_ceo_25.png",
          imgOnHover: "com_25.png",
          DescEng: {
            company: "PurpleLabs",
            name: "Jongha Jeon",
          },
        },
        {
          id: 24,
          company: "4DReplay",
          name: "정홍수",
          status: "Current",
          sector: "Enterprise",
          link: "https://4dreplay.com/",
          image: "com_ceo_24.png",
          imgOnHover: "com_24.png",
          DescEng: {
            company: "4DReplay",
            name: "Hongsoo Jung",
          },
        },
        {
          id: 23,
          company: "무신사",
          name: "강정구, 한문일",
          status: "Current",
          sector: "Consumer",
          link: "https://www.musinsa.com/",
          image: "com_ceo_23.png",
          imgOnHover: "com_23.png",
          DescEng: {
            company: "Musinsa",
            name: "Jungkoo Kang, Moonil Han",
          },
        },
        {
          id: 22,
          company: "에스엠랩",
          name: "조재필",
          status: "Current",
          sector: "Enterprise",
          link: "",
          image: "com_ceo_22.png",
          imgOnHover: "com_22.png",
          DescEng: {
            company: "SMLAB",
            name: "Jaepil Cho",
          },
        },
        {
          id: 21,
          company: "세나클소프트",
          name: "위의석, 박찬희",
          status: "Current",
          sector: "Healthcare",
          link: "https://cenacle.com/",
          image: "com_ceo_21.png",
          imgOnHover: "com_21.png",
          DescEng: {
            company: "Cenacle",
            name: "Euiseok Wi, Chanhee Park",
          },
        },
        {
          id: 20,
          company: "하우빌드",
          name: "이승기",
          status: "Current",
          sector: "Consumer",
          link: "https://www.howbuild.com/",
          image: "com_ceo_20.png",
          imgOnHover: "com_20.png",
          DescEng: {
            company: "Howbuild",
            name: "Seungki Lee",
          },
        },
        {
          id: 19,
          company: "우리엔",
          name: "고석빈",
          status: "Current",
          sector: "Healthcare",
          link: "https://www.woorien.com/",
          image: "com_ceo_19.png",
          imgOnHover: "com_19.png",
          DescEng: {
            company: "Woorien",
            name: "Seokbin Ko",
          },
        },
        {
          id: 18,
          company: "라우드커뮤니케이션즈",
          name: "서경종",
          status: "Current",
          sector: "Consumer",
          link: "https://loudcorp.com/",
          image: "com_ceo_18.png",
          imgOnHover: "com_18.png",
          DescEng: {
            company: "Loud Communications",
            name: "Kyungjong Seo",
          },
        },
        {
          id: 17,
          company: "슈퍼브에이아이",
          name: "김현수",
          status: "Current",
          sector: "Enterprise",
          link: "https://www.superb-ai.com/",
          image: "com_ceo_17.png",
          imgOnHover: "com_17.png",
          DescEng: {
            company: "Superb AI",
            name: "Hyunsoo Kim",
          },
        },
        {
          id: 16,
          company: "퍼플랩스헬스케어",
          name: "전종하",
          status: "Current",
          sector: "Consumer",
          link: "https://www.serybox.com/",
          image: "com_ceo_16.png",
          imgOnHover: "com_16.png",
          DescEng: {
            company: "PurpleLabs Healthcare",
            name: "Jongha Jeon",
          },
        },
        {
          id: 15,
          company: "디유닛",
          name: "윤반석",
          status: "Current",
          sector: "Consumer",
          link: "https://www.seoulstore.com/",
          image: "com_ceo_15.png",
          imgOnHover: "com_15.png",
          DescEng: {
            company: "D-unit",
            name: "Banseok Yoon",
          },
        },
        {
          id: 14,
          company: "트렌비",
          name: "박경훈",
          status: "Current",
          sector: "Consumer",
          link: "https://www.trenbe.com/",
          image: "com_ceo_14.png",
          imgOnHover: "com_14.png",
          DescEng: {
            company: "Trenbe",
            name: "Kyunghoon Park",
          },
        },
        {
          id: 13,
          company: "모노리스",
          name: "김종석",
          status: "Current",
          sector: "Consumer",
          link: "https://www.monolith.co.kr/",
          image: "com_ceo_13.png",
          imgOnHover: "com_13.png",
          DescEng: {
            company: "Monolith",
            name: "Jongseok Kim",
          },
        },
        {
          id: 12,
          company: "스마트레이더시스템",
          name: "김용환",
          status: "Current",
          sector: "Enterprise",
          link: "https://www.smartradarsystem.com/",
          image: "com_ceo_12.png",
          imgOnHover: "com_12.png",
          DescEng: {
            company: "Smart Radar System",
            name: "Paul Kim",
          },
        },
        {
          id: 11,
          company: "어반플레이",
          name: "홍주석",
          status: "Current",
          sector: "Consumer",
          link: "https://www.urbanplay.co.kr/",
          image: "com_ceo_11.png",
          imgOnHover: "com_11.png",
          DescEng: {
            company: "Urbanplay",
            name: "Juseok Hong",
          },
        },
        {
          id: 10,
          company: "팀프레시",
          name: "이성일",
          status: "Current",
          sector: "Enterprise",
          link: "https://www.teamfresh.co.kr/",
          image: "com_ceo_10.png",
          imgOnHover: "com_10.png",
          DescEng: {
            company: "Teamfresh",
            name: "Seongil Lee",
          },
        },
        {
          id: 9,
          company: "패스트파이브",
          name: "김대일",
          status: "Current",
          sector: "Consumer",
          link: "https://www.fastfive.co.kr/#enp_mbris",
          image: "com_ceo_9.png",
          imgOnHover: "com_9.png",
          DescEng: {
            company: "Fastfive",
            name: "Daeil Kim",
          },
        },
        {
          id: 8,
          company: "디알코퍼레이션",
          name: "정종환",
          status: "Current",
          sector: "Consumer",
          link: "https://www.kiwiblack.kr/",
          image: "com_ceo_8.png",
          imgOnHover: "com_8.png",
          DescEng: {
            company: "DR corporation",
            name: "Jongwhan Chung",
          },
        },
        {
          id: 7,
          company: "펫프렌즈",
          name: "김창원",
          status: "Alumni",
          sector: "Consumer",
          link: "https://www.pet-friends.co.kr/main/tab/2",
          image: "com_ceo_7.png",
          imgOnHover: "com_7.png",
          DescEng: {
            company: "Pet-friends",
            name: "Changwon Kim",
          },
        },
        {
          id: 6,
          company: "다노",
          name: "정범윤, 이지수",
          status: "Current",
          sector: "Consumer",
          link: "https://www.mydano.net/",
          image: "com_ceo_6.png",
          imgOnHover: "com_6.png",
          DescEng: {
            company: "Dano",
            name: "Bumyoon Jung, Jisoo Lee",
          },
        },
        {
          id: 5,
          company: "어니스트펀드",
          name: "서상훈",
          status: "Current",
          sector: "Consumer",
          link: "https://www.honestfund.kr/",
          image: "com_ceo_5.png",
          imgOnHover: "com_5.png",
          DescEng: {
            company: "Honestfund",
            name: "Sanghoon Seo",
          },
        },
        {
          id: 4,
          company: "야놀자",
          name: "이수진",
          status: "Current",
          sector: "Consumer",
          link: "https://www.yanolja.com/",
          image: "com_ceo_4.png",
          imgOnHover: "com_4.png",
          DescEng: {
            company: "Yanolja",
            name: "Sujin Lee",
          },
        },
        {
          id: 3,
          company: "ImpriMed", //임프리메드
          name: "임성원",
          status: "Current",
          sector: "Healthcare",
          link: "https://www.imprimedicine.com/",
          image: "com_ceo_3.png",
          imgOnHover: "com_3.png",
          DescEng: {
            company: "ImpriMed",
            name: "Sungwon Im",
          },
        },
        {
          id: 2,
          company: "뱅크샐러드",
          name: "김태훈",
          status: "Current",
          sector: "Consumer",
          link: "https://www.banksalad.com/",
          image: "founder-1.png",
          imgOnHover: "com_2.png",
          DescEng: {
            company: "Banksalad",
            name: "Taehoon Kim",
          },
        },
        {
          id: 1,
          company: "하이메디",
          name: "이정주, 서돈교",
          status: "Current",
          sector: "Health Care",
          link: "https://www.himedi.com/en",
          image: "com_ceo_1.png",
          imgOnHover: "com_1.png",
          DescEng: {
            company: "Himedi",
            name: "Jengju Lee, Donkyo Seo",
          },
        }, 
      ],
      backupTeam: [],
      clear: [],
      sectorFilter: [],
      statusFilter: [],
      close: false,
    };
  },
  mounted() {
    this.backupTeam = [...this.teams];
  },
  methods: {
    OpenModal() {
      this.$emit("openModal", true);
      console.log("member click passed");
    },
    filterSector(event = []) {
      this.sectorFilter = [...event];
      this.teams = this.filterTeam();
    },
    filterStatus(event = []) {
      this.statusFilter = [...event];
      this.teams = this.filterTeam();
    },
    hoverEffect(event) {
      this.close = event;
    },
    // filter(type) {
    //   console.log(this.teams, type);
    //   if (type == "sector") {
    //     this.teams = this.filterTeam();
    //   }
    //   if (type == "status") {
    //     this.teams = this.filterTeam();
    //   }
    // },
    filterTeam() {
      let filterTeam = [];
      filterTeam = this.backupTeam.filter((x) => {
        if (this.sectorFilter.length || this.statusFilter.length) {
          if (this.sectorFilter.length && this.statusFilter.length) {
            console.log("both sector & status");
            return (
              this.sectorFilter.includes(x.sector) &&
              this.statusFilter.includes(x.status)
            );
          } else if (this.sectorFilter.length) {
            console.log("only sector ");
            return this.sectorFilter.includes(x.sector);
          } else if (this.statusFilter.length) {
            console.log("only status ");
            return this.statusFilter.includes(x.status);
          } else {
          }
        } else {
          return x;
        }
      });
      console.log("filtered teams", filterTeam);
      return filterTeam;
    },
  },
};
</script>

<style lang="scss" scoped>
.Add-founder {
  position: relative;
  background-color: $white;
  padding: calc(10px + 1vw);
  @include dflex-align-justify-center;
  .logo {
    max-width: calc(80px + 10vw);
    width: 100%;
  }
  .Adding {
    @include dflex-align-justify-between;
    padding: calc(10px + 1vw);
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    h4 {
      font-weight: 600;
      font-size: 24px;
    }
    img {
      width: calc(10px + 2vw);
      cursor: pointer;
    }
  }
}
</style>
