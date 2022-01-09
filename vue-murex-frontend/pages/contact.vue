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

              <ContactInfoItem iconClass="icon-location-pin" label="Adress" cont="서울시 강남구 도산대로45길 18-6, 2층" />


              <li class="inf-item">
                <i class="icon-location-pin"></i>
                <div class="inf-item-cont">
                  <p class="label">Adress</p>
                  <p class="cont">서울시 강남구 도산대로45길 18-6, 2층</p>
                </div>
              </li>
              <li class="inf-item">
                <i class="icon-call"></i>
                <div class="inf-item-cont">
                  <p class="label">Call</p>
                  <p class="cont">+82 2-585-1116</p>
                </div>
              </li>
              <li class="inf-item">
                <i class="icon-fax"></i>
                <div class="inf-item-cont">
                  <p class="label">Fax</p>
                  <p class="cont">+82 2-546-8238</p>
                </div>
              </li>
              <li class="inf-item">
                <i class="icon-mail"></i>
                <div class="inf-item-cont">
                  <p class="label">E-mail</p>
                  <p class="cont">we@murexpartners.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-auto w-1/2 right-panel">
            <h2 class="heading-2">How to come</h2>
            <ul class="inf-cont">
              <li class="inf-item">
                <p class="cont">뮤렉스 파트너스에 오시는 방법을 안내해 드립니다.</p>
              </li>
              <li class="inf-item">
                <i class="icon-train"></i>
                <div class="inf-item-cont">
                  <p class="label">지하철 이용 시</p>
                  <p class="cont">압구정로데오역 5번 출구 혹은 압구정역 3번 출구에서 도산공원 방향</p>
                </div>
              </li>
              <li class="inf-item">
               <i class="icon-bus"></i>
                <div class="inf-item-cont">
                  <p class="label">버스 이용시</p>
                  <p class="cont">도산공원사거리 정류장(23-155)에서 하차</p>
                </div>
              </li>
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
  data() {
    return {
      pageHeading: "Contact",
      contactInformation: {

      }
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
      i {
        margin-right: 7px;
      }
      .label {
        @include black-text-1;
        margin-bottom: 7px;
      }
      .cont {
        @include black-text-2;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
