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
        :designation="team.designation"
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
      pageHeading: "Our Team",
      teams: [
        // {
        //   id: 1,
        //   name: "하이메디",
        //   designation: "이정주, 서돈교",
        //   image: "founder-logo.png",
        //   sns_links: {
        //     fb: "https://facebook.com",
        //     ln: "https://linkedin.com",
        //   },
        // },
        {
          id: 2,
          name: "이범석",
          designation: "CEO / Co-Founder",
          image: "founder-1.png",
          imgOnHover: "company-logoOnHover.png",
          sector: "Healthcare",
          status: "Alumni",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
        },
        {
          id: 3,
          name: "강동민",
          designation: "부사장 / Co-Founder",
          image: "team-02.jpg",
          imgOnHover: "company-logoOnHover.png",
          sector: "Consumer",
          status: "Alumni",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
        },
        {
          id: 4,
          name: "오지성",
          designation: "부사장 / Co-Founder",
          image: "team-03.jpg",
          imgOnHover: "company-logoOnHover.png",
          sector: "Crypto",
          status: "Current",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
        },
        {
          id: 5,
          name: "박진영",
          designation: "수석",
          image: "team-04.jpg",
          imgOnHover: "company-logoOnHover.png",
          sector: "Consumer",
          status: "Current",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
        },
        {
          id: 6,
          name: "김세진",
          designation: "수석",
          image: "team-05.jpg",
          imgOnHover: "company-logoOnHover.png",
          sector: "Consumer",
          status: "Current",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
        },
        {
          id: 7,
          name: "김세호",
          designation: "이사",
          image: "team-06.jpg",
          imgOnHover: "company-logoOnHover.png",
          sector: "Consumer",
          status: "Current",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
        },
        {
          id: 8,
          name: "이은영",
          designation: "경영기획실장",
          image: "team-07.jpg",
          imgOnHover: "company-logoOnHover.png",
          sector: "Enterprise",
          status: "Current",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
        },
        {
          id: 9,
          name: "김윤나",
          designation: "사원",
          image: "team-08.jpg",
          imgOnHover: "company-logoOnHover.png",
          sector: "Consumer",
          status: "Current",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
        },
        {
          id: 10,
          name: "신지혜",
          designation: "사원",
          image: "team-09.jpg",
          imgOnHover: "company-logoOnHover.png",
          sector: "Enterprise",
          status: "Current",
          sns_links: {
            fb: "https://facebook.com",
            ln: "https://linkedin.com",
          },
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
          let imd = event.findIndex((y) => y == x.sector || y == x.status); // [Consumer,Enterprice]
          console.log(imd);
          if (imd > -1) {
            return true;
          }
        });
        // console.log(this.teams);
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
          let imd = this.clear.findIndex((y) => y == x.sector); // [Consumer,Enterprice]
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
