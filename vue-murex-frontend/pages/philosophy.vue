<template>
  <div class="philosophy">
    <div class="container philoHolder">
      <TopHeading :heading="pageHeading" padbottom="bottom-60" />
      <div class="slash-violet">
        <img src="../assets/icons/slash-violet.svg" alt="img" />
      </div>
      <div class="philCont">
        <p>
          뮤렉스파트너스는 <span>초기, 성장단계의 스타트업</span>에 투자합니다.
        </p>
        <p>
          뮤렉스파트너스는
          <span>차별적인 투자 전략, 이론, 근거에 기반</span>하여 시장을
          읽습니다.
        </p>
        <p>
          새롭고 비범한 창업가들에게 뮤렉스파트너스는 우선 투자합니다.
          뮤렉스파트너스와 함께 성장의 여정을 일궈낸 창업가들은 뮤렉스파트너스의
          벤처파트너로 새로운 스타트업 생태계를 열고 있습니다.
        </p>
      </div>
    </div>
    <div class="philBody">
      <ul>
        <li>
          <div>
            <h4>People</h4>
            <h2>사람에 투자합니다</h2>
          </div>
        </li>
        <li>
          <h3>
            호기심과 집요함으로 일궈낸 비전과 확신,<br/>창업자와 VC간의 신뢰와 협력
          </h3>
        </li>
        <li>
          <h4>Differently</h4>
          <h2>다르게 투자합니다</h2>
        </li>
        <li>
          <div>
            <h3>한국 최초, 유일의 <br/>이론기반 투자 벤처캐피탈</h3>
          </div>
        </li>
        <li>
          <div>
            <h4>Integrity</h4>
            <h2>깊게 돕습니다</h2>
          </div>
        </li>
        <li>
          <h3>
            스타트업/창업자의 문제에 대한 분석,<br/>극복과 성취를 위한 끊임없는 지원
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
.philosophy{
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
