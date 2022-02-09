<template>
  <div>
    <filters v-on:sectorFilter="filterSector($event)"  />
    <div class="grid grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-8">
      <!-- <div>{{$nuxt.$route.path}}</div> -->
      <!-- <div class="Add-founder">
      <img src="../assets/images/founder-logo.png" alt="img" class="logo" />
      <div class="Adding">
        <div>
          <h4>하이메디</h4>
          <p>이정주, 서돈교</p>
        </div>
        <img src="../assets/icons/Plus.svg" />
      </div>
    </div> -->
      <TeamCard
        v-for="(team, i) of teams"
        :key="team.id || i + 1"
        :bgImage="team.image"
        :imgOnHover="team.imgOnHover"
        :name="team.name"
        :company="team.company"
        v-on:openModal="OpenModal"
      />
    </div>
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
          id: 1,
          company:"하이메디",
          name: "이정주, 서돈교",
          sector: "Current",
          status: "Consumer",
          link: "https://www.himedi.com/en",
          image: "com_1.png",
          imgOnHover: "com_ceo_1.png",
        },
        {
          id: 2,
          company:"뱅크샐러드",
          name: "김태훈",
          sector: "Current",
          status: "Consumer",
          link: "https://www.banksalad.com/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 3,
          company:"ImpriMed", //임프리메드
          name: "임성원",
          sector: "Current",
          status: "Healthcare",
          link: "https://www.imprimedicine.com/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 4,
          company:"야놀자",
          name: "이수진",
          sector: "Current",
          status: "Consumer",
          link: "https://www.yanolja.com/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 5,
          company:"어니스트펀드",
          name: "서상훈",
          sector: "Current",
          status: "Consumer",
          link: "https://www.honestfund.kr/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 6,
          company:"다노",
          name: "정범윤, 이지수",
          sector: "Current",
          status: "Consumer",
          link: "https://www.mydano.net/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 7,
          company:"펫프렌즈",
          name: "김창원",
          sector: "Alumni",
          status: "Consumer",
          link: "https://www.pet-friends.co.kr/main/tab/2",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 8,
          company:"디알코퍼레이션",
          name: "정종환",
          sector: "Current",
          status: "Consumer",
          link: "https://www.kiwiblack.kr/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 9,
          company:"패스트파이브",
          name: "김대일",
          sector: "Current",
          status: "Consumer",
          link: "https://www.fastfive.co.kr/#enp_mbris",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 10,
          company:"팀프레시",
          name: "이성일",
          sector: "Current",
          status: "Enterprise",
          link: "https://www.teamfresh.co.kr/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 11,
          company:"어반플레이",
          name: "홍주석",
          sector: "Current",
          status: "Consumer",
          link: "https://www.urbanplay.co.kr/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 12,
          company:"스마트레이더시스템",
          name: "김용환",
          sector: "Current",
          status: "Enterprise",
          link: "https://www.smartradarsystem.com/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 13,
          company:"모노리스",
          name: "김종석",
          sector: "Current",
          status: "Consumer",
          link: "주식회사 모노리스 – MONOLITH Inc.",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 14,
          company:"트렌비",
          name: "박경훈",
          sector: "Current",
          status: "Consumer",
          link: "전세계 명품 쇼핑은 트렌비 | 트렌비 (trenbe.com)",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 15,
          company:"디유닛",
          name: "윤반석",
          sector: "Current",
          status: "Consumer",
          link: "서울스토어 (seoulstore.com)",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 16,
          company:"퍼플랩스헬스케어",
          name: "전종하",
          sector: "Current",
          status: "Consumer",
          link: "serybox.com",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 17,
          company:"슈퍼브에이아이",
          name: "김현수",
          sector: "Current",
          status: "Enterprise",
          link: "https://www.superb-ai.com/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 18,
          company:"라우드커뮤니케이션즈",
          name: "서경종",
          sector: "Current",
          status: "Consumer",
          link: "https://still8.gg/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 19,
          company:"우리엔",
          name: "고석빈",
          sector: "Current",
          status: "Healthcare",
          link: "https://www.woorien.com/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 20,
          company:"하우빌드",
          name: "이승기",
          sector: "Current",
          status: "Consumer",
          link: "https://www.howbuild.com/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 21,
          company:"세나클소프트",
          name: "위의석, 박찬희",
          sector: "Current",
          status: "Healthcare",
          link: "https://cenacle.com/",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 22,
          company:"에스엠랩",
          name: "조재필",
          sector: "Current",
          status: "Enterprise",
          link: "", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 23,
          company:"무신사",
          name: "강정구, 한문일",
          sector: "Current",
          status: "Consumer",
          link: "https://www.musinsa.com/", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 24,
          company:"4DReplay",
          name: "정홍수",
          sector: "Current",
          status: "Enterprise",
          link: "4DREPLAY | Creating Experiences", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 25,
          company:"퍼플랩스",
          name: "전종하",
          sector: "Current",
          status: "Consumer",
          link: "https://www.doremifresh.com/index", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 26,
          company:"큐픽스",
          name: "배석훈",
          sector: "Current",
          status: "Enterprise",
          link: "큐픽스와 스마트 구축 (cupix.com)", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 27,
          company:"AmazeVR",
          name: "이승준, Ernest Lee",
          sector: "Current",
          status: "Consumer",
          link: "https://www.amazevr.com/", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 28,
          company:"글로랑",
          name: "황태일",
          sector: "Current",
          status: "Consumer",
          link: "Glorang", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 29,
          company:"케어닥",
          name: "박재병",
          sector: "Current",
          status: "Healthcare",
          link: "어르신 돌보미 찾기 (carecoordi.kr)", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 30,
          company:"테크타카",
          name: "양수영",
          sector: "Current",
          status: "Enterprise",
          link: "Argo - Anything Anywhere Anytime (argoport.com)", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 31,
          company:"Bobidi",
          name: "최정서, 배수현",
          sector: "Current",
          status: "Enterprise",
          link: "https://www.bobidi.com/", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 32,
          company:"트러스테이",
          name: "김정윤",
          sector: "Current",
          status: "Consumer",
          link: "", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 33,
          company:"Chequer Global, Inc.",
          name: "황인서",
          sector: "Current",
          status: "Enterprise",
          link: "Normalize your Data Governance | QueryPie", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 34,
          company:"콘텐츠테크놀로지스",
          name: "이장원",
          sector: "Current",
          status: "Consumer",
          link: "", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        {
          id: 35,
          company:"JNPMedi",
          name: "정권호",
          sector: "Current",
          status: "Healthcare",
          link: "https://www.jnpmedi.com/", 
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
        },
        
        
      ],
      backupTeam: [],
      clear: [],
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
      // console.log(event,event.includes("Consumer"))
      this.clear = event;
      if (event.length > 0) {
        this.teams = this.backupTeam.filter((x) => {
          let imd = event.findIndex((y) => y == x.sector && y == x.status); // [Consumer,Enterprice]
          console.log(imd);
          if (imd > -1 ) {
            return true;
          }
        });
        console.log("teams", this.teams);
      } else {
        this.teams = [...this.backupTeam];
      }
    },
    clearFilter(type = "") {
      console.log(type,this.clear)
      if (type == "Sector") {
        this.teams = this.backupTeam.filter((x) => {
          let imd = this.clear.findIndex((y) => y == x.status); // [Consumer,Enterprice]
          console.log(imd);
          if (imd > -1) {
            return true;
          }
        });
      }
      if (type == "Status") {
        this.teams = this.backupTeam.filter((x) => {
          let imd = this.clear.findIndex((y) => y == x.sector); // [current,alumini]
          console.log(imd);
          if (imd > -1) {
            return true;
          }
        });
      }
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
