<template>
  <div id="service">
    <section class="main_con1 area-common">      
      <div class="greetings">
        <h1>{{ msg }}</h1>
        바나프레소 공식 모바일 앱은 <br>
        고객님의 보다 편리한 카페 이용을 위한 서비스입니다. <br>
        스마트폰만 있으면 음료 주문/결제 및 <br>
        스탬프 적립/확인이 실시간으로 가능하며 <br>
        바나프레소 전 지점에서 사용할 수 있습니다.<br>
        이제 기다릴 필요없이 <br>
        <strong>앱으로 빠르게 주문하고 다양한 혜택</strong>도 즐기세요!
      </div>
      <span class="app_mockup">
        <img src="../assets/images/service/app_guide1.png" alt="바나프레소 어플">
      </span>
    </section>
    <section class="main_con2 area-common">
      <h2>바나프레소 혜택</h2>
      <ul class="benefit">
        <li>
          <span class="benefit-box"><img src="../assets/images/service/app_benefit_img01.png" alt=""></span>
          <p>모바일로 주문, 결제 후 매장에서 바로<strong>PICK UP</strong></p>
        </li>
        <li>
          <span class="benefit-box"><img src="../assets/images/service/app_benefit_img02.png" alt=""></span>
          <p>음료 1잔 결제 시 자동 <strong>스탬프 1개 적립</strong></p>
        </li>
        <li>
          <span class="benefit-box"><img src="../assets/images/service/app_benefit_img03.png" alt=""></span>
          <p>매장 및 SNS에서 진행되는<strong>이벤트를 한 번에 확인</strong></p>
        </li>
        <li>
          <span class="benefit-box"><img src="../assets/images/service/app_benefit_img04.png" alt=""></span>
          <p>스탬프 12개 적립 시<strong>무료 음료 쿠폰 발급</strong></p>
        </li>
      </ul>
    </section>
    <section class="main_con3 area-common">      
      <div class="app_view">
        <h2>바나프레소 앱 이용 안내</h2>
        <div class="phone">

        </div>
      </div>
      <div class="steps">
        <p>
          <strong class="step_num">STEP.01</strong>
          앱스토어 / 구글 플레이스토어에서 <br>'바나프레소' 검색해 다운받으세요.
        </p>
        <p>
          <strong class="step_num">STEP.02</strong>
          회원가입 없이 휴대전화 인증만 마치면 <br>앱을 사용할 수 있습니다.
        </p>
        <p>
          <strong class="step_num">STEP.03</strong>
         가까운 매장을 설정한 후 <br>음료를 주문하고 결제를 합니다.
        </p>
        <p>
          <strong class="step_num">STEP.04</strong>
          결제 완료 후, 설정한 매장을 방문해 <br>음료를 가져가시면 됩니다.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Service',
  data () {
    return {
      msg: '더 즐거운 바나프레소 이용을 위해 모바일 어플 서비스를 만나보세요.'
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "~styles/variables.scss";
// @import "./styles/_variables.scss";
$primary-color: #f1648a;
body{margin: 0;}
ul{padding: 0;}
li{list-style: none;}
#service{
  .area-common{
    width: 1200px;
    margin: 50px auto;
    &.main_con1{
      display: flex;
      width: 800px;
      .greetings{
        h1{
          margin: 15px 0;
        }
        flex: 1;
        width: 350px;
        text-align: left;
        line-height: 26px;
        font-weight: 300;
        vertical-align: middle;
        strong{color: $primary-color;}
      }
      .app_mockup{
        img{width: 250px;}
      }
    }
    &.main_con2{
      h2{
        margin: 20px 0;
      }
      .benefit{
        display: flex;
        justify-content: center;
        li{
          margin: 0 20px;
          .benefit-box{
            img{
              border: 2px solid $primary-color;
              border-radius: 50%;              
            }            
          }
          strong{
            display: block;
            color: $primary-color;
          }
        }        
      }
    }
    &.main_con3{
      display: flex;
      justify-content: center;
      .app_view{
        .phone{
          background: url("../assets/images/service/phone_frame.png") 0 0 no-repeat;
          width: 260px;
          height: 500px;
          background-size: cover;    
        }
      }
      .steps{    
        display: flex;
        p{     
          display: flex;
          flex-direction: column;
          justify-content: center;
          .step_num{    
            display: block;      
            color: $primary-color;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px){
  .area-common{
    width: 100%;
    padding: 0 15px;
  }
}
</style>
