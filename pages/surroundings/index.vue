<template>
  <div class="box">
    <van-nav-bar
      title="周边"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="search-box">
      <div class="prefix">
        <p><img src="../../assets/imgs/map.png" alt=""></p>
        <p >我的位置</p>
      </div>
      <div style="width:100%">
        <van-search
          v-model="value"
          shape="round"
          placeholder="搜企业"
        />
      </div>
    </div>
    <div>
      <div class="map" id="container"></div>
    </div>
    <div class="address-wrapper">
      <div class="address"
           v-for="item in list"
           :key="item.icon">
        <div>
          <img src="../../assets/imgs/location1.png" class="location-icon" alt="">
        </div>
        <div style="width:100%">
          <p class="company-name">{{item.text}}</p>
          <p class="company-address">{{item.distance}}|{{item.detail}}</p>
        </div>
        <div class="location" @click="getLocation">
<!--          <a href="https://uri.amap.com/marker?position=120.211816,30.20856&name=滨江区">定位到这里</a>-->
          定位这里
        </div>
      </div>
      <div>{{location}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        username: '',
        password: '',
        list:[
          {
            text:'某某周边企业',
            distance:'315m',
            detail:'吴兴区金盖山路56号某某大酒店后…'
          },
          {
            text:'某某周边企业',
            distance:'315m',
            detail:'吴兴区金盖山路56号某某大酒店后…'
          },
          {
            text:'某某周边企业',
            distance:'315m',
            detail:'吴兴区金盖山路56号某某大酒店后…'
          }
        ],
        location:'你的位置'
      };
    },
    mounted(){
      this.$nextTick(function () {
        this.createMap()
      })
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
      onClickLeft(){
        this.$router.go(-1)
      },
      onClickRight(){

      },
      createMap (){
        let geolocation;
        const _this=this
        const map = new window.AMap.Map('container', {
          resizeEnable: true,
        });
        map.plugin('AMap.Geolocation', function() {
          geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition: 'RB'
          });
          map.addControl(geolocation);
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, 'complete', _this.onComplete); //返回定位信息
          AMap.event.addListener(geolocation, 'error', _this.onError); //返回定位出错信息
        });
      },
      guide(){

      },
      onComplete(data) {
        var str = [];
        str.push(data.position.getLat());
        str.push(data.position.getLng());
        this.location =str
      },
      onError(data) {
        this.location ='定位失败'
      },
      getLocation(){
        var mapObj = new window.AMap.Map('container');
        mapObj.plugin('AMap.Geolocation', function () {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, // 是否使用高精度定位，默认:true
            timeout: 10000,           // 超过10秒后停止定位，默认：无穷大
            maximumAge: 0,            // 定位结果缓存0毫秒，默认：0
            convert: true,            // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,         // 显示定位按钮，默认：true
            buttonPosition: 'LB',     // 定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,         // 定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,         // 定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,      // 定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy:true       // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          });
          mapObj.addControl(geolocation);
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, 'complete', onComplete); // 返回定位信息
          AMap.event.addListener(geolocation, 'error', onError);       // 返回定位出错信息
        });

        function onComplete(obj){
          var res = '经纬度：' + obj.position +
            '\n精度范围：' + obj.accuracy +
            '米\n定位结果的来源：' + obj.location_type +
            '\n状态信息：' + obj.info +
            '\n地址：' + obj.formattedAddress +
            '\n地址信息：' + JSON.stringify(obj.addressComponent, null, 4);
          alert(res);
        }

        function onError(obj) {
          alert(obj.info + '--' + obj.message);
          console.log(obj);
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .search-box{
    display: flex;
    padding: 0 12px;
    box-shadow:0 6px 8px 0 rgba(228,230,233,1);
  }
  .prefix{
    width: 58px;
    font-size:10px ;
    padding: 4px 0;
    >p{
      text-align: center;
      >img{
        width: 18px;
      }
    }
  }
  .info{
    margin-top: 10px;
  }

  #container {
    width: 100%;
    height: calc(100vh - 100px);
  }
  .location-icon{
    width: 20px;
    line-height: 36px;
    margin-top: 8px;
    margin-right: 12px;
  }

  .address-wrapper{
    margin: 8px;
    background: #ffffff;
    width: calc(100vw - 16px);
    position: fixed;
    bottom: 0;
    padding: 12px;
    box-shadow:0 6px 8px 0 rgba(228,230,233,1);
    .address{
      padding: 12px 0;
      border-bottom:1px solid #ebedf0;
      display: flex;
      &:nth-child(1){
        padding-top: 0;
      }
      &:last-child{
        border-bottom: 0;
      }
    }
  }

  .company-name{
    font-size: 16px;
    margin-bottom: 4px;
  }

  .company-address{
    font-size: 12px;
    color:rgba(110,115,125,1);
  }

  .location{
    font-size: 10px;
    color: #9FA4AD;
    text-align: right;
    width: 50px;
  }
</style>
