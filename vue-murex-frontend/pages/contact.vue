<template>
  <div class="contact">
    <div class="container">
      <TopHeading :heading="pageHeading" />
    </div>
    <div class="divider-1"></div>
    <div class="fluidContainer">
      <div class="container">
        <div class="contact-us-cont md:grid grid-cols-2">
          <div class="md:w-1/2 left-panel col-span-1">
          <p>Current language: {{$i18n.locale }}</p>
            <h2 class="heading-2">{{ $t(`contact.content.title1`) }}</h2>
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
          <div class="md:w-1/2 right-panel col-span-1">
            <h2 class="heading-2">{{ $t(`contact.content.title2`) }}</h2>
            <ul class="inf-cont">
              <li class="inf-item">
                <p class="cont">{{ $t(`contact.content.textCont`) }}</p>
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
      <div class="mapWrapper">
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
  </div>
</template>

<script>
import ContactInfoItemVue from "../components/ContactInfoItem.vue";
import TopHeading from "../components/TopHeading.vue";
export default {
  name: "contact",
  components: { TopHeading, ContactInfoItemVue },
  data() {
    return {
      pageHeading: this.$t(`contact.pageTitle`),
      contactInformation: [
        {
          iconClass: "icon-location-pin",
          label: this.$t(`contact.content.address`),
          cont: this.$t(`contact.content.addressInfo`),
          linkType: "text",
        },
        {
          iconClass: "icon-call",
          label: this.$t(`contact.content.call`),
          cont: "+82 2-585-1116",
          linkType: "tel",
        },
        {
          iconClass: "icon-fax",
          label: this.$t(`contact.content.fax`),
          cont: "+82 2-546-8238",
          linkType: "text",
        },
        {
          iconClass: "icon-mail",
          label: this.$t(`contact.content.email`),
          cont: "we@murexpartners.com",
          linkType: "mail",
        },
      ],
      contactToCome: [
        {
          iconClass: "icon-train",
          label: this.$t(`contact.content.label1`),
          cont: this.$t(`contact.content.label1Info`),
          linkType: "text",
        },
        {
          iconClass: "icon-bus",
          label: this.$t(`contact.content.label2`),
          cont: this.$t(`contact.content.label2Info`),
          linkType: "text",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding-bottom: 50px;
  @media screen and (max-width: 767px) {
    padding-bottom: 25px;
  }
}
.contact-us-cont {
  max-width: 1520px;
  padding: 80px 0 100px 0;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    padding: 50px 0;
  }
  .left-panel {
    @media screen and (max-width: 767px) {
      margin-bottom: 60px;
    }
  }
  .inf-cont {
    margin-top: 40px;
    .inf-item {
      display: flex;
      margin-bottom: 29px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
  .heading-2 {
    font-weight: 500;
    font-size: 32px;
    line-height: 100%;
    color: $black-1;
    @media screen and (max-width: 767px) {
      font-size: 20px;
    }
  }
}

.mapWrapper {
  @media screen and (max-width: 767px) {
    padding: 16px;
  }
}
</style>
