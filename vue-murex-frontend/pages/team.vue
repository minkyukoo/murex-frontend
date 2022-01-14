<template>
  <div class="team">
    <div class="container">
      <TopHeading :heading="pageHeading" />
    </div>
    <div class="fluidContainer">
      <!-- <div class="divider-1"></div> -->
      <TeamCards v-on:openModal="changeState" />
    </div>
    <div class="container">
      <TopHeading :heading="pageHeading2" />
    </div>
    <div class="fluidContainer">
      <!-- <div class="divider-1"></div> -->
      <AdvisoryCards v-on:openModal="changeState" />
    </div>
    <Modal v-show="TeamModal" @close="closeModal" v-bind:showCloseBtn="true">
      <template v-slot:header>
        <div class="w-full team-modal-header">
          <h1 class="name">강동민 <span>부사장 / Co-Founder</span></h1>
        </div>
      </template>
      <template v-slot:body>
        <div class="w-full team-modal-body">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div class="img-holder">
              <img src="~/assets/images/team-01.jpg" alt="img" />
            </div>
            <div>
              <p class="desc-sec main-desc">
                강동민 부사장은 +14년 경력의 벤처캐피탈리스트로 야놀자,
                펫프렌즈, 바디텍메드, 패스트파이브 등에 투자하였습니다.
                현대증권에서 근무한 금융 출신 경험을 바탕으로 투자 기업 분석,
                투자 전략 수립 등에 전문성을 가지고 있습니다.
              </p>
              <h4 class="heading">학력 / 경력</h4>
              <p class="sub-desc desc-sec">
                파트너스인베스트먼트(’14~’18) 수석팀장<br />
                현대증권(現 KB증권)(’07~’13) Principal Investment <br />
                연세대 경제학 석사 <br />
                서울대 경제학부
              </p>
              <h4 class="heading">투자경력</h4>
              <div class="grid grid-rows-1 grid-flow-col desc-sec">
                <div>
                  <ul>
                    <li>펫프렌즈</li>
                    <li>다노</li>
                    <li>솔트룩스</li>
                    <li>모아이게임즈</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>스틸에잇</li>
                    <li>야놀자</li>
                    <li>바디텍메드</li>
                    <li>루멘스</li>
                  </ul>
                </div>
              </div>
              <div>
                <span role="button" class="social-icon">
                  <i class="icon-linkedin-dark"></i>
                </span>
                <span role="button" class="social-icon">
                  <i class="icon-facebook-dark"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="flex justify-around"></div>
      </template>
    </Modal>
  </div>
</template>

<script>
import TeamCards from "../components/TeamCards.vue";
import AdvisoryCards from "../components/AdvisoryCards.vue";
import Modal from "../components/Modal.vue";
export default {
  name: "team",
  components: { TeamCards, Modal,AdvisoryCards },
  props: {
    showCloseBtn: Boolean,
  },
  data() {
    return {
      pageHeading: "Our Team",
      pageHeading2: "Venture Partner / Advisory",
      isModalVisible: false,
      TeamModal: false,
    };
  },
  methods: {
    changeState() {
      this.TeamModal = true;
    },
    closeModal() {
      this.TeamModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>

.team-modal-header {
  margin-bottom: calc(10px + 2.5vw);
  .name {
    @include dflex-align-center;
    font-weight: 600;
    font-size: calc(10px + 2.3vw);
    span {
      display: inline-block;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      padding-left: 24px;
    }
  }
}
.team-modal-body {
  .img-holder {
    img {
      width: 100%;
      height: auto;
      // aspect-ratio: 1/1.15;
      max-width: 750px;
      max-height: 800px;
    }
  }
  .heading {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: $purple-1;
    border-bottom: 2px solid #000000;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }
  .desc-sec {
    margin-bottom: calc(20px + 2vw);
  }
  .main-desc {
    font-weight: normal;
    font-size: 24px;
    line-height: 150%;
  }
  .sub-desc {
    font-weight: normal;
    font-size: 16px;
    line-height: 180%;
    color: $grey-5;
  }
  .social-icon {
    display: inline-block;
    margin-right: 12px;
  }
}
</style>
