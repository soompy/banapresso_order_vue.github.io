<template>
  <div id="app">
    <div id="nav">
      <h1><img src="./assets/logo.png"></h1>
      <div class="link">
         <router-link to="/">Home</router-link> |
         <router-link to="/Menu">Menu</router-link>
         <router-link to="/Store">Store</router-link>
      </div>
      
    </div>
    
    <router-view/>

    <footer id="footer">
      <ul class="row">
        <li class="col-sm-3"><a href="#">홈</a></li>
        <li class="col-sm-3"><a href="#">카테고리</a></li>
        <li class="col-sm-3"><a href="#">검색</a></li>
        <li class="col-sm-3"><a href="#" class="last">마이페이지</a></li>
      </ul>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>