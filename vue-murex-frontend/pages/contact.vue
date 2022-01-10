<template>
  <div class="contact">
    <div class="fluidContainer">
      <div class="container">
        <TopHeading :heading="pageHeading" />
      </div>
      <div class="divider-1"></div>
      <div class="container">
        <div class="contact-us-cont flex">
          <div class="col-auto w-1/2 left-panel">
            <h2 class="heading-2">Information</h2>
            <ul class="inf-cont">
              <ContactInfoItem
                v-for="(item, i) of contactInformation"
                :key="i + 1"
                :iconClass="`${item.iconClass}`"
                :label="`${item.label}`"
                :cont="`${item.cont}`"
                :linkType="`${item.linkType}`"
              />
            </ul>
          </div>
          <div class="col-auto w-1/2 right-panel">
            <h2 class="heading-2">How to come</h2>
            <ul class="inf-cont">
              <li class="inf-item">
                <p class="cont">뮤렉스 파트너스에 오시는 방법을 안내해 드립니다.</p>
              </li>
              <ContactInfoItem
                v-for="(item, i) of contactToCome"
                :key="i + 1"
                :iconClass="`${item.iconClass}`"
                :label="`${item.label}`"
                :cont="`${item.cont}`"
                :linkType="`${item.linkType}`"
              />
            </ul>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.3296854862424!2d127.03376721531042!3d37.52372497980592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3893de45589%3A0xc7979017269f9283!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrj4TsgrDrjIDroZw0Neq4uCAxOC02!5e0!3m2!1sko!2skr!4v1641136996650!5m2!1sko!2skr"
        width="100%"
        height="670"
        style="border: 0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
import ContactInfoItemVue from "../components/ContactInfoItem.vue";
import TopHeading from "../components/TopHeading.vue";
export default {
  name: "contact",
  components: { TopHeading, ContactInfoItemVue},
  data() {
    return {
      pageHeading: "Contact",
      contactInformation: [
        {
          iconClass: 'icon-location-pin',
          label: 'Adress',
          cont: '서울시 강남구 도산대로45길 18-6, 2층',
          linkType: 'text'
        },
        {
          iconClass: 'icon-call',
          label: 'Call',
          cont: '+82 2-585-1116',
          linkType: 'tel'
        },
        {
          iconClass: 'icon-fax',
          label: 'Fax',
          cont: '+82 2-546-8238',
          linkType: 'text'
        },
        {
          iconClass: 'icon-mail',
          label: 'E-mail',
          cont: 'we@murexpartners.com',
          linkType: 'mail'
        },
      ],
      contactToCome: [
        {
          iconClass: 'icon-train',
          label: '지하철 이용 시',
          cont: '압구정로데오역 5번 출구 혹은 압구정역 3번 출구에서 도산공원 방향',
          linkType: 'text'
        },
        {
          iconClass: 'icon-bus',
          label: '버스 이용시',
          cont: '도산공원사거리 정류장(23-155)에서 하차',
          linkType: 'text'
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-us-cont {
  padding: 80px 0 100px 0;
  .inf-cont {
    margin-top: 40px;
    .inf-item {
      display: flex;
      margin-bottom: 29px;
    }
  }
}
</style>
