<template>
  <div id="app">
    <div id="header">
      <div class="nav">
        <h1><router-link to="/"><img src="./assets/logo.png" alt="logo"></router-link></h1>
        <div class="link">
          <router-link to="/">Home</router-link>
          <router-link to="/Store">Store</router-link>
          <router-link to="/Service">Service</router-link>         
        </div> 
      </div> 
      <div class="m_nav">
        <slider :width="300" format="push" direction="left" :opacity="0.15" :links="[{'id': 1, 'text': 'Home', 'url': '/#'}, {'id': 2, 'text': 'Store', 'url': '/Service#/Store'}, {'id': 3, 'text': 'Service', 'url': '/Service#/Service'}]"></slider>
        <h1><router-link to="/"><img src="./assets/logo.png" alt="logo"></router-link></h1>        
      </div>
    </div>    
    <router-view/>

    <footer id="footer">
      <div class="footer_box">
        <div class="policy">
          <select name="policy" id="banaPolicy" class="select_policy">
            <option selected value="">개인정보처리방침</option>
            <option value="">기업사이트 개인정보 처리방침</option>
            <option value="">바나프레소 개인정보 처리방침</option>
          </select>
          <strong><router-link to="/Store">이용약관</router-link></strong>
        </div>
        <p class="contact">
          <span>대표자명 : 송민기 /</span>
          <span>사업장 소재지 : 서울특별시 강남구 테헤란로 81길 9 (삼성동, 바나플빌딩) 3층 /</span>
          <span>사업자번호 : 358-87-00860</span>
        </p>
        <p class="contact">
          <span>대표전화 : 1811-1111 /</span>
          <span>Fax : 070-4512-0296 /</span>
          <span>이메일 : master@banapresso.com</span>
        </p>
      </div>      
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<script>
import Vue from 'vue'
import Slider from '@jeremyhamm/vue-slider'

export default {
  components: {
    'slider': Slider
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #f66b91;
a{
  color: #333;
  text-decoration: none;
  transition: 0.5s;
  &:hover{
    color: $primary-color;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
#header{
  width: 100%;
  background: #ffeef3;
  .nav{
    display: flex;
    padding: 1vw 0;
    width: 1200px;
    margin: auto;
    h1{
      width: 180px;
      margin: 0;
      img{
        width: 100%;
      }
    }
    .link{
      display: flex;
      align-items: center;
      margin-left: 5vw;
      a{
        color: #333;
        margin: 0 1vw;
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
  .m_nav{
    display: none;
  }
}
#footer{
   background: #ffeef3;
   padding: 15px 0;
  .footer_box{
    padding: 1vw 0;
    width: 1200px;
    margin: auto;
    .select_policy{
      width: 220px;
      -webkit-appearance: none; 
      -moz-appearance: none; 
      appearance: none; 
      background: url("./assets/images/arrdown.png") no-repeat 95% 50%;
      background-size: 12px;
      border: 2px solid $primary-color;
      background-color: #fff;
      padding: 5px 8px;
      margin-right: 5px;
      &::-ms-expand { display: none; }     
    }
  }
  display: flex;
}

@media screen and (max-width: 1200px) {
  #header{
    .nav{
      width: 100%;
      padding: 1vw 2vw;
    }
  }
}

@media screen and (max-width: 500px) {
  #header{
    .nav{display: none;}
    .m_nav{
      position: relative;
      display: flex;
      padding: 16px 8px;
      h1{
        margin: 0;
        margin-left: auto;
        a{
          width: 70%;
          display: block; 
          img{
            width: 100%;
          }             
        }
      }
      .bars{
        position: absolute;
        right: 8px;
        top: 50%;
        margin-top: -2.5vw;
        display: block;
        width: 5vw;
      }
      #gnb{
        position: absolute;
        right: 0;
        top: 73.5px;
        width: 100%;
        z-index: 200;
        margin: 0;
        background: #fff;  
        display: none;     
        li{
          list-style: none;         
          border-bottom: 1px solid #ccc;
          a{
            display: block;
            padding: 4vw;             
          }
        }
      }
    }
  }
}
</style>