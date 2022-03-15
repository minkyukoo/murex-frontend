<template>
  <div class="philosophy">
    <div class="container philoHolder">
      <TopHeading :heading="pageHeading" />
      <div class="philCont">
        <p>뮤렉스파트너스는 <b>초기, 성장단계의 스타트업</b>에 투자합니다.</p>
        <p>뮤렉스파트너스는 <b>차별적인 투자 전략, 이론, 근거에 기반</b>하여 시장을 읽습니다.</p>
        <p>새롭고 비범한 창업가들에게 뮤렉스파트너스는 우선 투자합니다. 뮤렉스파트너스와 함께 성장의 여정을 일궈낸 창업가들은 뮤렉스파트너스의 벤처파트너로 새로운 스타트업 생태계를 열고 있습니다.</p>
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
          <h3>호기심과 집요함으로 일궈낸 비전과 확신,창업자와 VC간의 신뢰와 협력</h3>
        </li>
        <li>
          <div>
            <h4>Differently</h4>
            <h2>깊게 돕습니다</h2>
          </div>
        </li>
        <li>
          <h3>한국 최초, 유일의이론기반 투자 벤처캐피탈</h3>
        </li>
        <li>
          <div>
            <h4>Integrity</h4>
            <h2>깊게 돕습니다</h2>
          </div>
        </li>
        <li>
          <h3>스타트업/창업자의 문제에 대한 분석,극복과 성취를 위한 끊임없는 지원</h3>
        </li>
      </ul>
    </div>
    <!-- <h1>philosophy -- {{$route.path}}</h1> -->
  </div>
</template>

<script>
  export default {
    name: 'philosophy',
    data() {
    return {
      pageHeading: 'Philosophy',
    };
  },
  }
</script>

<style lang="scss" scoped>
.philoHolder{
  border-bottom: 1px solid #828282;
  padding-bottom: 100px;
  margin-bottom: 90px;
}
.philCont{
  max-width: 819px;
  margin: 0 auto;
  text-align: center;
  font-size: 27px;
  line-height: 40px;
  font-weight: 400;
}
.philBody{
  padding: 0 48px;
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -10px;
    li{
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
      div{
        width: 100%;
        height: 100%;
        border: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }
      &:nth-child(1){
        background: #7835E7;
      }
      &:nth-child(4){
        background: #F59033;
      }
      &:nth-child(5){
        background: #28A6CE;
      }
      h4{
        font-size: 30px;
        line-height: 40px;
        font-weight: 700;
      }
      h2{
        font-size: 60px;
        line-height: 90px;
        font-weight: 600;
      }
      h3{
        font-size: 38px;
        line-height: 57px;
        font-weight: 400;
      }
    }
  }
}
</style>
