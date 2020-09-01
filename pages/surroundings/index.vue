<template>
  <div>
    <van-nav-bar
      title="周边"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="search-header">
      <div class="search-box">
        <div class="prefix">
          <p><img src="../../assets/imgs/map.png" alt=""></p>
          <p>我的位置</p>
        </div>
        <div style="width:100%">
          <van-search
            v-model="enterprise"
            shape="round"
            placeholder="搜企业"
            @focus="showDataWrapper"
            @blur="closeDataWrapper"
          />
        </div>
      </div>
      <div class="data-shade" v-if="show">
        <div class="data-wrapper">
          <div class="address"
               v-for="item in list"
               :key="item.icon"
               @click="showDetail(item)">
            <div>
              <img src="../../assets/imgs/location1.png" class="location-icon" alt="">
            </div>
            <div style="width:100%">
              <p class="company-name">{{item.text}}</p>
              <p class="company-address">{{item.distance}}|{{item.detail}}</p>
            </div>
            <div class="location" @click="getLocation">
              <p><img src="~/assets/imgs/dw.png" class="dw" alt=""></p>
              <!--          <a href="https://uri.amap.com/marker?position=120.211816,30.20856&name=滨江区">定位到这里</a>-->
              <p>定位这里</p>
            </div>
          </div>
        </div>
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
              <p><img src="~/assets/imgs/dw.png" class="dw" alt=""></p>
    <!--          <a href="https://uri.amap.com/marker?position=120.211816,30.20856&name=滨江区">定位到这里</a>-->
              <p>定位这里</p>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
  import { Toast } from 'vant'

  export default {
    name: 'index',
    data () {
      return {
        myLocation: {},
        enterprise: '',
        show: false,
        list: [
          {
            text: '某某周边企业',
            distance: '315m',
            detail: '吴兴区金盖山路56号某某大酒店后…'
          },
          {
            text: '某某周边企业',
            distance: '315m',
            detail: '吴兴区金盖山路56号某某大酒店后…'
          },
          {
            text: '某某周边企业',
            distance: '315m',
            detail: '吴兴区金盖山路56号某某大酒店后…'
          }
        ],
        location: '你的位置',
        companyList: [
          {
            longitude: 120.194945,
            dimension: 30.187943,
            name: '云狐科技'
          },
          {
            longitude: 120.194166,
            dimension: 30.189746,
            name: '云狐科技'
          }
        ]
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.createMap()
      })
    },
    methods: {
      onSubmit (values) {
        console.log('submit', values)
      },
      showDataWrapper () {
        this.show = true
      },
      closeDataWrapper(){
        setTimeout(()=>this.show = false,500)
      },
      onClickLeft () {
        this.$router.go(-1)
      },
      onClickRight () {

      },
      createMap () {
        let geolocation
        const _this = this
        const map = new window.AMap.Map('container', {
          resizeEnable: true,
        })
        map.plugin('AMap.Geolocation', function () {
          geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition: 'RB'
          })
          map.addControl(geolocation)
          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation, 'complete', _this.onComplete) //返回定位信息
          AMap.event.addListener(geolocation, 'error', _this.onError) //返回定位出错信息
        })

        // 添加标记
        let marker
        const icon = new AMap.Icon({
          image: 'https://vdata.amap.com/icons/b18/1/2.png',
          size: new AMap.Size(24, 24)
        })

        this.companyList.forEach(s => {
          marker = new AMap.Marker({
            icon: icon,
            position: new AMap.LngLat(s.longitude, s.dimension),
            offset: new AMap.Pixel(-12, -12),
            zIndex: 101,
            title: s.name,
            map: map
          })
        })

        // markers.push(marker);
        // map.setFitView();
      },
      onComplete (data) {
        var str = []
        str.push(data.position.getLat())
        str.push(data.position.getLng())
        this.location = str
      },
      onError (data) {
        this.location = '定位失败'
      },
      getLocation () {

      },
      showDetail(){
        this.$router.push('/surroundings/detail')
      }
    },
  }
</script>

<style scoped lang="less">
  .search-box {
    display: flex;
    padding: 0 12px;
    box-shadow: 0 6px 8px 0 rgba(228, 230, 233, 1);
  }

  .prefix {
    width: 58px;
    font-size: 10px;
    padding: 4px 0;

    > p {
      text-align: center;
      margin: 0;

      > img {
        width: 18px;
      }
    }
  }

  .info {
    margin-top: 10px;
  }

  #container {
    width: 100%;
    height: calc(100vh - 100px);
  }

  .location-icon {
    width: 20px;
    line-height: 36px;
    margin-top: 8px;
    margin-right: 12px;
  }

  .address-wrapper {
    margin: 8px;
    background: #ffffff;
    width: calc(100vw - 16px);
    position: fixed;
    bottom: 0;
    padding: 12px;
    box-shadow: 0 6px 8px 0 rgba(228, 230, 233, 1);

    .address {
      padding: 12px 0;
      border-bottom: 1px solid #ebedf0;
      display: flex;

      &:nth-child(1) {
        padding-top: 0;
      }

      &:last-child {
        border-bottom: 0;
      }
    }

    .dw{
      width: 26px;
    }
  }

  .company-name {
    font-size: 16px;
    margin-bottom: 6px;
  }

  .company-address {
    font-size: 12px;
    color: rgba(110, 115, 125, 1);
  }

  .location {
    font-size: 10px;
    color: #9FA4AD;
    width: 64px;
    text-align: center;
  }

  .search-header {
    position: relative;
  }

  .data-shade {
    position: absolute;
    z-index: 999;
    height: calc(100vh - 100px);

    background: rgba(255,255,255,0.85);
  }

  .data-wrapper {

    background: #ffffff;
    margin: 8px;
    width: calc(100vw - 16px);
    padding: 12px;
    box-shadow: 0 6px 8px 0 rgba(228, 230, 233, 1);

    .address {
      padding: 12px 0;
      border-bottom: 1px solid #ebedf0;
      display: flex;

      &:nth-child(1) {
        padding-top: 0;
      }

      &:last-child {
        border-bottom: 0;
      }
    }

    .dw{
      width: 26px;
    }
  }
</style>
