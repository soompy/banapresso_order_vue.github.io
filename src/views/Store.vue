<template>
  <div id="mapWrap" class="space">
    <div id="map" style="width:100%;height:100%;"></div>
    <div class="local_box">
      <div class="top">
        <div class="inner">
          <span class="search_box">
            <input type="text" class="text_search_box" placeholder="매장명 또는 주소">
            <button type="submit" class="btn_map_search">검색</button>
          </span>
          <ul class="all_store">
            <li class="active"><a href="">모든지점</a></li>
            <li><a href="">운영매장</a></li>
            <li><a href="">오픈예정</a></li>
          </ul>
        </div>
      </div>
      <div class="content">
        <ul id="storeList" class="store_1">
          <li>
            <span class="pic">
              <img src="../assets/images/store_1.jpg" alt="매장이미지">
            </span>
            <span class="box">
              <strong class="name">Central</strong>
              <em class="place">강남역점</em>
              <em class="addr">서울 강남구 역삼동</em>
            </span>
          </li>
        </ul>
        <ul id="storeList" class="store_2">
          <li>
            <span class="pic">
              <img src="../assets/images/store_1.jpg" alt="매장이미지">
            </span>
            <span class="box">
              <strong class="name">Central</strong>
              <em class="place">강남역점</em>
              <em class="addr">서울 강남구 역삼동</em>
            </span>
          </li>
        </ul>
        <ul id="storeList" class="store_3">
          <li>
            <span class="pic">
              <img src="../assets/images/store_1.jpg" alt="매장이미지">
            </span>
            <span class="box">
              <strong class="name">Central</strong>
              <em class="place">강남역점</em>
              <em class="addr">서울 강남구 역삼동</em>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'map',
  data() {
    return{
      msg: '카카오 지도 적용'
    }
  },
  mounted() {
    var container = document.getElementById('map');
    var mapOptions = {
      center: new daum.maps.LatLng(37.498201, 127.027569),
      level: 4 
    };
    var map = new daum.maps.Map(container, mapOptions);
  }
}
</script>



<style lang="scss" scoped>
$primary-color: #f66b91;
ul{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}

#mapWrap{
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  #map{
    overflow-x: hidden;
  }
  .local_box{
    position: absolute;
    left: 0;
    top: 0;
    width: 304px;
    z-index: 100;
    background: #fff;
    .inner{
      padding: 15px;
    }
    .top{
      background: $primary-color;
      .search_box{
        display: block;
        position: relative;
        height: 35px;
        border-bottom: 1px solid #fff;
        .text_search_box{
          width: 80%;
          padding: 8px;
          font-size: 16px;
          position: absolute;
          left: 0;
          top: 0;
          background: none;
          border: none;        
          color: #fff;     
          font-weight: bold;              
          &::placeholder{
            color: #fff;
          }       
        }
        .btn_map_search{
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          background: url('../assets/images/service/coffee.png') center center no-repeat;
          background-size: 25px;
          text-indent: -9999px;
          border: none;
          color: pointer;
        }          
      }            
    }
    .all_store{
      display: flex;
      padding: 0;
      margin-top: 15px;
      li{
         margin: 0 15px;
         a{
           color: #eee;
        }
        &.active{
          a{
            font-weight: bold;
            color: #fff;
          }
        }
      }
    }

    .content{
      position: relative;
      #storeList{
        position: absolute;
        left: 0;
        top: 0;
        background: #fff;
        li{
          display: flex;
          padding: 15px;
          .box{
            display: flex;
            flex-direction: column;
            margin-left: 15px;
            text-align: left;
            justify-content: center;
            .pic{display: block;}
            .name{display: block;color: $primary-color;font-size: 16px;}
            .place{display: block;margin: 10px 0;font-size: 16px;font-style: normal;}
            .addr{display: inline-block;color: #999;font-style: normal;word-break: keep-all;}
          }
          &:hover{
            background: #fff3f6;
          }          
        }
      }
    }
  }
}


</style>
