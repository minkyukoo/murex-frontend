<template>
  <div class="team">
    <div class="container">
      <TopHeading :heading="pageHeading" />
    </div>
    <div class="fluidContainer addPad-40">
      <!-- <div class="divider-1"></div> -->
      <TeamCards v-on:openModal="changeState($event)" />
    </div>
    <div class="container">
      <TopHeading :heading="pageHeading2" />
    </div>
    <div class="fluidContainer">
      <AdvisoryCards v-on:openModal="changeState($event)" />
    </div>

    <section v-if="selectedLang === 'kr'">
      <Modal
        v-show="TeamModal"
        @close="closeModal"
        v-bind:showCloseBtn="true"
        v-if="Object.keys(modalData).length > 0 && selectedLang === 'kr'"
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
            <div class="flex flex-col md:flex-row gap-8 justify-between">
              <div class="img-holder" v-if="modalData.imgDetails">
                <img
                  :src="`${require('../assets/images/' +
                    modalData.imgDetails)}`"
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
    </section>

    <section v-if="selectedLang === 'en'">
      <Modal
        v-show="TeamModal"
        @close="closeModal"
        v-bind:showCloseBtn="true"
        v-if="Object.keys(modalData).length > 0"
      >
        <template v-slot:header>
          <div class="w-full team-modal-header"></div>
        </template>
        <template v-slot:body>
          <div class="w-full team-modal-body design-2">
            <div class="flex flex-col lg:flex-row gap-8 justify-between">
              <div class="img-holder" v-if="modalData.imgDetails">
                <img
                  :src="`${require('../assets/images/' +
                    modalData.imgDetails)}`"
                  alt="img"
                />
              </div>
              <div class="total-desc desc-right">
                <h1 class="name">
                  {{ modalData.DescEng.name }}
                  <span>{{ modalData.DescEng.designation }}</span>
                </h1>
                <div class="short-desc">
                  <p class="catch-phrase">
                    {{ modalData.DescEng.catchPhrase }}
                  </p>
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
            <div class="below-details">
              <p v-html="modalData.DescEng.basicDesc"></p>
              <h3 v-if="modalData.DescEng.beforeMurex">
                Prior to founding Murex
              </h3>
              <p v-html="modalData.DescEng.beforeMurex"></p>
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <div class="flex justify-around"></div>
        </template>
      </Modal>
    </section>
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
      selectedLang: "",
    };
  },
  created() {
    this.selectedLang = this.$i18n.locale;
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
  background: #f6f6f6;
  @media screen and (max-width: 768px) {
    padding-bottom: 40px;
  }
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
      line-height: 24px;
    }
    span {
      display: inline-block;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      padding-left: 24px;
      @media screen and (max-width: 640px) {
        font-size: 12px;
        padding-left: 18px;
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
      border-bottom: 1px solid #000000;
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
    font-weight: 400;
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

.design-2 {
  .desc-right {
    height: 100%;
    // min-height: 526px;
    .catch-phrase {
      font-weight: 400;
      font-size: 20px;
      font-family: $third-font;
      line-height: 180%;
      letter-spacing: -0.05em;
      color: $black-2;
      margin-bottom: 30px;
      @media screen and (max-width: 767px) {
        font-size: 15px;
        line-height: 150%;
      }
    }
    .short-desc {
      height: 100%;
      min-height: 540px;
      padding-bottom: 30px;
      border-bottom: 1px solid #000000;
      @include dflex-column-between;
      @media screen and (max-width: 1600px) {
        min-height: calc(100px + 20vw);
      }
      @media screen and (max-width: 1100px) {
        min-height: calc(50px + 15vw);
      }
      @media screen and (max-width: 767px) {
        padding-bottom: 30px;
      }
    }
    .name {
      @include dflex-align-center;
      font-weight: 600;
      // font-size: calc(10px + 2.3vw);
      font-size: 52px;
      line-height: 52px;
      letter-spacing: -0.02rem;
      color: #181818;
      padding-bottom: 66px;
      border-bottom: 1px solid #000000;
      margin-bottom: 42px;
      @media screen and (max-width: 640px) {
        font-size: 24px;
        line-height: 100%;
        padding-bottom: 30px;
        margin-bottom: 30px;
      }
      span {
        display: inline-block;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        padding-left: 24px;
        @media screen and (max-width: 640px) {
          font-size: 12px;
          line-height: 14px;
          padding-left: 18px;
        }
      }
    }
  }
  .below-details {
    padding: 60px 0 0px;
    color: $black-1;
    @media screen and (max-width: 767px) {
      padding: 40px 0 0;
    }
    h3 {
      font-weight: 600;
      font-size: 30px;
      line-height: 170%;
      padding: 36px 0;
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 170%;
        padding: 30px 0;
      }
    }
    P {
      font-weight: 400;
      font-size: 20px;
      line-height: 170%;
      @media screen and (max-width: 767px) {
        font-size: 15px;
        line-height: 170%;
      }
    }
  }
}
.addPad-40 {
  padding-bottom: 40px !important;
  @media screen and (max-width: 767px) {
    padding-bottom: 0px !important;
  }
}
</style>
