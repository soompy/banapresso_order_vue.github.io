<template>
  <div id="app">
    <div id="nav">
      <h1><router-link to="/"><img src="./assets/logo.png"></router-link></h1>
      <div class="link">
         <router-link to="/">Home</router-link>
         <router-link to="/Menu">Menu</router-link>
         <router-link to="/Store">Store</router-link>
      </div>      
    </div>
    
    <router-view/>

    <footer id="footer">
      <div class="footer_box">
        <div class="policy">
          <select name="policy" id="banaPolicy">
            <option value="">개인정보처리방침</option>
            <option value="">기업사이트 개인정보 처리방침</option>
            <option value="">바나프레소 개인정보 처리방침</option>
          </select>
          <router-link to="/Store">이용약관</router-link>
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

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
#nav{
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
#footer{
  .footer_box{
    padding: 1vw 0;
    width: 1200px;
    margin: auto;
  }
  display: flex;
}

@media screen and (max-width: 1200px) {
  #nav{width: 100%;}
}
</style>