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
        <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true">
          <div class="lst_wrp">
            <div class="phone">
              <div class="screen_box">
                <span class="screen"><img src="../assets/images/service/app_guide2.png" alt=""></span>
              </div>
            </div>
            <div class="steps">
              <p>
                <strong class="step_num">STEP.01</strong>
                앱스토어 / 구글 플레이스토어에서 <br>'바나프레소' 검색해 다운받으세요.
              </p>
            </div>
          </div>
          <div class="lst_wrp">
            <div class="phone">
              <div class="screen_box">
                <span class="screen"><img src="../assets/images/service/app_guide3.png" alt=""></span>
              </div>
            </div>
            <div class="steps">
              <p>
                <strong class="step_num">STEP.02</strong>
                회원가입 없이 휴대전화 인증만 마치면 <br>앱을 사용할 수 있습니다.
              </p>
            </div>
          </div>
          <div class="lst_wrp">
            <div class="phone">
              <div class="screen_box">
                <span class="screen"><img src="../assets/images/service/app_guide4.png" alt=""></span>
              </div>
            </div>
            <div class="steps">
              <p>
                <strong class="step_num">STEP.03</strong>
                가까운 매장을 설정한 후 <br>음료를 주문하고 결제를 합니다.
              </p>
            </div>
          </div>                             
        </VueSlickCarousel>
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
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          "dots": true,
          "dotsClass": "slick-dots bana-dots",
          "edgeFriction": 0.35,
          "infinite": false,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1
        },
      }
    },
  }
</script>



<style lang="scss" scoped>
$primary-color: #f1648a;
body{margin: 0;}
ul{padding: 0;}
li{list-style: none;}
#service{
  .area-common{
    width: 1000px;
    margin: 50px auto;
    &.main_con1{
      display: flex;
      width: 1000px;
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
        display: block;
        img{
          width: 250px;
          animation-name: slideRight;
          animation-duration: 1s;
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        @keyframes slideRight {
          0%{opacity: 0;}
          100%{opacity: 1;transform:translateX(-20px);}
        }
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
          flex: 1;
          margin: 0 2vw;
          .benefit-box{
            display: block;
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
      width: 500px;
      .app_view{
        .lst_wrp{
          display: table;
          width: auto;
        }
        .phone{
          display: table-cell;
          background: url("../assets/images/service/phone_frame.png") 0 0 no-repeat;
          width: 260px;
          height: 500px;
          background-size: cover;  
          .screen_box{
            position: relative;
            img{
              position: absolute;
              left: 14px;
              top: 57px;
              z-index: 100;
              width: 88%;
            }
          }  
        }        
      }
      .steps{    
        display: table-cell;
        vertical-align: middle;
        .step_num{    
          display: block;
          font-size: 16px;      
          color: $primary-color;
          margin: 8px 0;
        }
      }    
    }
  }
}

@media screen and (max-width: 1000px){
  #service {
    .area-common{
      width: 100%;
      &.main_con1{
        width: 100%;
        .greetings{
          h1{text-align: center;word-break: keep-all;}
        }
      }
      &.main_con2{
        .benefit{
          li{
            .benefit-box{
              width: 100%;
              img{
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 500px){
  #service {
    .area-common{
      width: 100%;
      &.main_con1{
        width: 100%;
        margin: 15px;
        flex-direction: column;
      }
      &.main_con2{
        .benefit{
          flex-direction: column;
          li{
            width: 60%;
            margin: 0 auto 1vw;
          }
        }
      }
      &.main_con3{
        width: 100%;
        .slick-prev, .slick-next{display: none;}
        .app_view{
          .phone{
            display: block;
            margin: auto;
          }
          .steps{
            display: block;
          }
        }        
      }
    }
  }
}
</style>
