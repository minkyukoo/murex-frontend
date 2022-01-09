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
              <li class="inf-item">
                <p class="label">
                  <i class></i>
                </p>
                <p class="cont"></p>
              </li>
            </ul>
          </div>
          <div class="col-auto w-1/2 right-panel">
            <h2 class="heading-2">How to come</h2>
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
import TopHeading from "../components/TopHeading.vue";
export default {
  name: "contact",
  data() {
    return {
      pageHeading: "Contact",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
