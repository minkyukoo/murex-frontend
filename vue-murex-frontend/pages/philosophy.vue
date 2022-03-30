<template>
  <div class="philosophy">
    <div class="container philoHolder">
      <TopHeading :heading="pageHeading" padbottom="bottom-60" />
      <div class="slash-violet">
        <img src="../assets/icons/slash-violet.svg" alt="img" />
      </div>
      <div class="philCont">
        <p>
          {{ $t(`phylosophy.text1`) }}
          <span>{{ $t(`phylosophy.text1Bold`) }}</span
          >{{ $t(`phylosophy.text1Part2`) }}
        </p>
        <p>
          {{ $t(`phylosophy.text2`) }}
          <span>{{ $t(`phylosophy.text2Bold`) }}</span>{{ $t(`phylosophy.text2Part2`) }}
        </p>
        <p>
          {{ $t(`phylosophy.text3`) }}
        </p>
      </div>
    </div>
    <div class="philBody">
      <ul>
        <li>
          <div>
            <h4>People</h4>
            <h2>{{ $t(`phylosophy.cards.first`) }}</h2>
          </div>
        </li>
        <li>
          <h3>
            {{ $t(`phylosophy.cards.second`) }}
          </h3>
        </li>
        <li>
          <h4>Differently</h4>
          <h2>{{ $t(`phylosophy.cards.third`) }}</h2>
        </li>
        <li>
          <div>
            <h3>{{ $t(`phylosophy.cards.fourth`) }}</h3>
          </div>
        </li>
        <li>
          <div>
            <h4>Integrity</h4>
            <h2>{{ $t(`phylosophy.cards.fifth`) }}</h2>
          </div>
        </li>
        <li>
          <h3>
            {{ $t(`phylosophy.cards.sixth`) }}
          </h3>
        </li>
      </ul>
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
.philosophy {
  padding: 0 16px;
}
.philoHolder {
  border-bottom: 1px solid #828282;
  padding-bottom: 100px;
  margin-bottom: 90px;
  @media screen and (max-width: 768px) {
    padding-bottom: 40px;
    margin-bottom: 40px;
  }
}
.philCont {
  max-width: 819px;
  margin: 0 auto;
  text-align: center;
  font-size: 27px;
  line-height: 150%;
  font-weight: 300;
  color: $black-2;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
  p {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  span {
    font-weight: 600;
    color: $purple-1;
  }
}
.slash-violet {
  padding-bottom: 26px;
  img {
    margin: 0 auto;
  }
}
.philBody {
  padding: 0 48px 100px;
  @media screen and (max-width: 768px) {
    padding: 0 0px 30px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -10px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin: 0px;
    }
    li {
      margin: 10px 10px 10px;
      width: calc(50% - 20px);
      height: 902px;
      background: #ccc;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-direction: column;
      text-align: center;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0 0 16px 0;
        height: 343px;
      }
      div {
        width: 100%;
        height: 100%;
        border: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }
      &:nth-child(1) {
        background: #7835e7;
      }
      &:nth-child(4) {
        background: #f59033;
      }
      &:nth-child(5) {
        background: #28a6ce;
      }
      &:nth-child(2) {
        background: url("~/assets/images/phil1.png") no-repeat center center;
        background-size: cover;
      }
      &:nth-child(3) {
        background: url("~/assets/images/phil2.png") no-repeat center center;
        background-size: cover;
      }
      &:nth-child(6) {
        background: url("~/assets/images/phil3.png") no-repeat center center;
        background-size: cover;
      }
      h4 {
        font-size: 30px;
        line-height: 150%;
        font-weight: 700;
        font-family: $secondery-font;
        opacity: 0.6;
        @media screen and (max-width: 768px) {
          font-size: 15px;
        }
      }
      h2 {
        font-size: 60px;
        line-height: 150%;
        font-weight: 600;
        @media screen and (max-width: 768px) {
          font-size: 30px;
        }
      }
      h3 {
        font-size: 45px;
        line-height: 150%;
        font-weight: 500;
        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
