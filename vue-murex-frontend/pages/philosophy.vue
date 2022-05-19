<template>
  <div class="philosophy">
    <div class="container15 philoHolder">
      <TopHeading :heading="pageHeading" padbottom="bottom-50" />
      <div class="slash-violet">
        <img src="../assets/icons/slash-violet.svg" alt="img" />
      </div>
      <div class="philCont">
        <p>
          {{ $t(`phylosophy.text1`) }}
          <span>{{ $t(`phylosophy.text1Bold`) }}</span>{{ $t(`phylosophy.text1Part2`) }}
        </p>
        <p>
          {{ $t(`phylosophy.text2`) }}
          <span>{{ $t(`phylosophy.text2Bold`) }}</span>{{ $t(`phylosophy.text2Part2`) }}
        </p>
        <!-- <p class="desktop-third" v-html="$t(`phylosophy.text3`)"></p>
        <p class="mobile-third" v-html="$t(`phylosophy.mobileText3`)"></p> -->
      </div>
    </div>
    <div class="container15 philBody">
      <ul>
        <li>
          <div>
            <h4>{{ $t(`phylosophy.cardshead.first`) }}</h4>
            <h3>{{ $t(`phylosophy.cards.first`) }}</h3>
          </div>
        </li>
        <li>
          <div>
            <h4>{{ $t(`phylosophy.cardshead.second`) }}</h4>
            <h3 v-html="$t(`phylosophy.cards.second`)">
            </h3>
          </div>
        </li>
        <li>
          <div>
            <h4>{{ $t(`phylosophy.cardshead.third`) }}</h4>
            <h3>{{ $t(`phylosophy.cards.third`) }}</h3>
          </div>
        </li>
      </ul>
      <div class="btmText">
        <p>{{ $t(`phylosophy.bottomtext.line1`) }}</p>
        <p>{{ $t(`phylosophy.bottomtext.line2`) }}</p>
        <p>{{ $t(`phylosophy.bottomtext.line3`) }}</p>
      </div>
    </div>
    <!-- <h1>philosophy -- {{$route.path}}</h1> -->

  </div>
</template>

<script>
export default {
  name: "philosophy",
  data() {
    return {
      pageHeading: "Philosophy",
    };
  },
};
</script>

<style lang="scss" scoped>
.container15 {
  max-width: 1516px;
  margin: 0 auto;
}


.philosophy {
  @media screen and (max-width: 1516px) {
    padding: 0 48px;
  }

  @media screen and (max-width: 640px) {
    padding: 0 16px;
  }
}

.philoHolder {
  // border-bottom: 1px solid #828282;
  // padding: 0;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding: 0px 0 40px;
    margin-bottom: 0px;
  }
}

.philCont {
  border-top: 1px solid #828282;
  padding: 60px 0 0 0;
  font-size: 40px;
  line-height: 150%;
  font-weight: 300;
  color: $black-2;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    border-top: 0;
    border-bottom: 1px solid #828282;
    padding: 0 0 24px;
  }

  p {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 16px;
    }
  }

  span {
    font-weight: 600;
    color: $purple-1;
  }

  .desktop-third {
    display: block;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .mobile-third {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }
}

.slash-violet {
  padding-bottom: 50px;

  // padding-top: 10px;
  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
  }

  img {
    margin: 0 auto;
  }
}

.philBody {

  // padding: 0 0px 100px;
  @media screen and (max-width: 768px) {
    padding: 0 0px 0px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -10px 60px;

    @media screen and (max-width: 1024px) {
      margin: 0px 0 24px;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      border-bottom: 1px solid #828282;
    }

    li {
      margin: 10px 10px 10px;
      width: calc(33.3% - 20px);
      height: 492px;
      background: #ccc;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-direction: column;
      text-align: center;

      @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 0 0 20px 0;
        height: 343px;
        padding: 10px;
      }

      div {
        width: 100%;
        // height: 100%;
        height: 212px;
        // background-color: red;
        // border: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        text-align: center;
        @media screen and (max-width: 1024px) {
          height: 100%;
          justify-content: center;
        }
      }

      &:nth-child(1) {
        background: url("~/assets/images/phil1.png") no-repeat center center;
        background-size: cover;
      }

      &:nth-child(2) {
        background: url("~/assets/images/phil2.png") no-repeat center center;
        background-size: cover;
      }

      &:nth-child(3) {
        background: url("~/assets/images/phil3.png") no-repeat center center;
        background-size: cover;

        @media screen and (max-width: 768px) {
          margin-bottom: 40px;
        }
      }

      h4 {
        font-size: 40px;
        line-height: 48px;
        font-weight: 700;
        font-family: $default-font;
        opacity: 1;
        margin-bottom: 20px;
        text-shadow: 1px -1px 13px rgba(60, 60, 60, 0.6);

        @media screen and (max-width: 768px) {
          font-size: 28px;
          line-height: 34px;
        }
      }

      h2 {
        font-size: 60px;
        line-height: 150%;
        max-width: 600px;
        font-weight: 600;

        @media screen and (max-width: 768px) {
          font-size: 30px;
          max-width: 303px;
        }
      }

      h3 {
        font-size: 22px;
        line-height: 48px;
        // max-width: 600px;
        font-weight: 500;
        text-shadow: 1px -1px 13px rgba(60, 60, 60, 0.6);

        @media screen and (max-width: 768px) {
          font-size: 18px;
          max-width: 303px;
        }
      }

      h5 {
        font-weight: 500;
        font-size: 45px;
        line-height: 150%;
        max-width: 600px;

        @media screen and (max-width: 768px) {
          font-size: 20px;
          max-width: 303px;
        }
      }
    }
  }

  .btmText {
    font-size: 40px;
    line-height: 72px;
    font-weight: 300;
    margin-bottom: 150px;

    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 80px;
    }
  }
}
</style>
