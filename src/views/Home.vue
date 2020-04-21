<template>
  <div id="content">
    <div class="visual">
      <iframe src="https://www.youtube.com/embed/XD7qDDfVexA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="main_con1 area-common">
      <p class="bana">바나프레소</p>
      <h2>메뉴</h2>
      <span>시즌마다 들어오는 새로운 메뉴들을 바나프레소에서 즐기세요.</span>
      
      <template>
        <div class="menu_box">
          <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true">
            <div>
              <img src="../assets/images/m1.png" alt="COFFEE">
              <p>COFFEE</p>
            </div>
            <div>
              <img src="../assets/images/m2.png" alt="Grilled">
              <p>Grilled</p>
            </div>
            <div>
              <img src="../assets/images/m3.png" alt="MUFFIN">
              <p>MUFFIN</p>
            </div>
            <div>
              <img src="../assets/images/m4.png" alt="ADE">
              <p>ADE</p>
            </div>
            <div>
              <img src="../assets/images/m5.png" alt="SANDWICH">
              <p>SANDWICH</p>
            </div>
          </VueSlickCarousel>
        </div>
      </template>   
    </div>
    <div class="main_con2 area-common">
      <p class="bana">바나프레소</p>
      <h2>바나프레소 주문</h2>
      <span>바나프레소를 만나는 여러가지 방법</span>
      <div class="order">
        <div class="offline">
          <h3>1. 바나프레소 매장에서 주문하기</h3>
          <p>직접 매장을 방문하여 바나프레소의 최상의 서비스를 경험해보세요!</p>
          <button class="pink_btn">가까운 매장 찾기 <img src="/assets/images/arr.png" alt=""></button>
        </div>
        <div class="online">
          <h3>2. 바나프레소 어플로 주문하기</h3>
          <p>기다릴 필요없이 빠르게 주문하고 다양한 혜택을 즐기세요!</p>
          <button class="pink_btn">바나프레소 어플 소개 <img src="/assets/images/arr.png" alt=""></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      
    }
  }
}
</script>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          "dots": true,
          "infinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 2500,
          "pauseOnDotsHover": true,
          "pauseOnFocus": true,
          "pauseOnHover": true
        },
      }
    },
  }
</script>



<style lang="scss" scoped>
@import "../assets/scss/main.scss";
#content{
  .visual{
     width: 100%; 
     background: #f66b91;     
     iframe{
        width: 1200px;
        height: 720px;
      }
  }
  .area-common{
    width: 1200px;
    margin: 30px auto;
    text-align: left;    
    &.main_con2{
      .order{
        display: flex;
        div{
          flex: 1;
        }
        h3{
          font-size: 20px;
        }
      }
      .pink_btn{
        border-radius: 20px;
        border: 2px solid #f66b91;
        color: #f66b91;
        font-weight: bold;
        background: #fff;
        padding: 10px;
        cursor: pointer;
      }
    }
    .menu_box{
      img{
        width: 15vw;
        height: 15vw;
        overflow: hidden;
        margin: auto;
        &:hover{
          animation: bounce 1s infinite;
          @keyframes bounce {
            0%{transform:translateY(10px);}
            50%{transform:translateY(-20px);}
            100%{transform:translateY(10px);}
          }
          +p{
            color: #f66b91;
            animation: twinkle 1s infinite;
            @keyframes twinkle {
              0%{opacity: 1;}
              50%{opacity: 0.7;}
              100%{opacity: 1;}
            }
          }
        }
      }
      p{
        text-align: center;
        font-weight: bold;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  #content{
    .area-common{
      width: 100%;      
    }
    .visual{    
        iframe{
          width: 100%;
          margin: 10px 0;
        }
    }
  } 
}
@media screen and (max-width: 600px) {
  #content{    
    .area-common{      
      .menu_box{
        img{
          width: 28vw;
          height: 28vw;
        }
      }
    }
  } 
}



</style>
