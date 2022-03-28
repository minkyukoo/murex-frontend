<template>
  <div class="team">
    <div class="container">
      <TopHeading :heading="pageHeading" />
    </div>
    <div class="fluidContainer">
      <!-- <div class="divider-1"></div> -->
      <TeamCards v-on:openModal="changeState($event)" />
    </div>
    <div class="container">
      <TopHeading :heading="pageHeading2" />
    </div>
    <div class="fluidContainer">
      <AdvisoryCards v-on:openModal="changeState($event)" />
    </div>
    <Modal
      v-show="TeamModal"
      @close="closeModal"
      v-bind:showCloseBtn="true"
      v-if="Object.keys(modalData).length > 0"
    >
      <template v-slot:header>
        <div class="w-full team-modal-header">
          <h1 class="name">
            {{ modalData.name }} <span>{{ modalData.designation }}</span>
          </h1>
        </div>
      </template>
      <template v-slot:body>
        <div class="w-full team-modal-body">
          <div class="flex flex-col md:flex-row gap-10 justify-between">
            <div class="img-holder" v-if="modalData.imgDetails">
              <img
                :src="`${require('../assets/images/' + modalData.imgDetails)}`"
                alt="img"
              />
            </div>
            <div class="total-desc">
              <p class="desc-sec main-desc">
                {{ modalData.basicDesc }}
              </p>
              <div v-if="modalData.EducationList.length > 0">
                <h4 class="heading">학력 / 경력</h4>
                <ul class="sub-desc desc-sec">
                  <li
                    v-for="(item, index) in modalData.EducationList"
                    :key="index"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div
                v-if="
                  modalData.investmentExp1.length > 0 ||
                  modalData.investmentExp2.length > 0
                "
              >
                <h4 class="heading">투자경력</h4>
                <div class="grid grid-rows-1 grid-flow-col">
                  <div>
                    <ul class="sub-desc desc-sec">
                      <li
                        v-for="(item, index) in modalData.investmentExp1"
                        :key="index"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="sub-desc desc-sec">
                      <li
                        v-for="(item, index) in modalData.investmentExp2"
                        :key="index"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <a
                  :href="modalData.sns_links.ln"
                  class="social-icon"
                  target="_blank"
                  v-if="modalData.sns_links.ln"
                >
                  <i class="icon-linkedin-dark"></i>
                </a>
                <a
                  :href="modalData.sns_links.fb"
                  class="social-icon"
                  target="_blank"
                  v-if="modalData.sns_links.fb"
                >
                  <i class="icon-facebook-dark"></i>
                </a>
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
  components: { TeamCards, Modal, AdvisoryCards },
  props: {
    showCloseBtn: Boolean,
  },
  data() {
    return {
      pageHeading: this.$t(`team.pageTitle1`),
      pageHeading2: this.$t(`team.pageTitle2`),
      isModalVisible: false,
      TeamModal: false,
      modalData: [],
    };
  },
  methods: {
    changeState(event) {
      this.TeamModal = true;
      // console.log(event);
      this.modalData = event;
      console.log(this.modalData);
    },
    closeModal() {
      this.TeamModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.team {
  padding-bottom: calc(60px + 2vw);
  background: #e5e5e5;
}
.team-modal-header {
  margin-bottom: calc(10px + 2.5vw);
  .name {
    @include dflex-align-center;
    font-weight: 600;
    // font-size: calc(10px + 2.3vw);
    font-size: 52px;
    line-height: 52px;
    color: #181818;
    @media screen and (max-width: 640px) {
      font-size: 24px;
    }
    span {
      display: inline-block;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      padding-left: 24px;
      @media screen and (max-width: 640px) {
        font-size: 12px;
      }
    }
  }
}
.team-modal-body {
  .total-desc {
    width: 594px;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  .img-holder {
    width: 750px;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    img {
      width: 100%;
      height: auto;
      // aspect-ratio: 1/1.15;
      object-fit: cover;
      // max-width: 750px;
      // max-height: 800px;
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
    @media screen and (max-width: 640px) {
      font-size: 18px;
      font-weight: 500;
    }
  }
  .desc-sec {
    margin-bottom: calc(20px + 2vw);
    @media screen and (max-width: 640px) {
      margin-bottom: 40px;
    }
  }
  .main-desc {
    font-weight: normal;
    font-size: 24px;
    line-height: 150%;
    font-weight: 500;
    @media screen and (max-width: 767px) {
      font-size: 15px;
      font-weight: 400;
    }
  }
  .sub-desc {
    font-weight: 500;
    font-size: 16px;
    line-height: 180%;
    color: $grey-5;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      font-weight: 300;
    }
  }
  .social-icon {
    display: inline-block;
    margin-right: 12px;
  }
}

.desc-sec-2 {
  ul {
    li {
      color: #4c4c4c;
    }
  }
}
</style>
