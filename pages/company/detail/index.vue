<template>
  <div class="com-box">
    <van-search
      v-model="value"
      shape="round"
      placeholder="输入企业名称"
    />
    <div class="detail-box">
      <div class="info">
        <p>姓名1</p>
        <div class="detail-info">
          <div class="left-part">
            <p>男 43岁 某某单位</p>
            <p>危害因素：苯、二甲苯、噪声、苯、二甲苯、噪声苯、二甲苯、噪声。</p>
          </div>
          <div class="right-part" @click="navigate">
            导航
          </div>
        </div>
      </div>
      <div class="history">
        <p class="subtitle">历史记录</p>
        <van-tabs v-model="active" @change="changeTab">
          <van-tab v-for="item in tabList" :title="item.text" :key="item.id">
            <div class="health-check" v-if="active===0">
              <van-cell v-for="item in list" :key="item.id">
                <template #title>
                  <p><span class="custom-title">{{item.type}} </span><span class="time">{{item.time}}</span></p>
                  <p class="custom-title">{{item.result}}</p>
                </template>
              </van-cell>
            </div>
            <div class="diagnose" v-if="active===1">
              <van-cell v-for="item in list" :key="item.id">
                <template #title>
                  <p><span class="custom-title">{{item.type}} | <span
                    class="blue-word">{{item.type}} </span> </span><span class="time">{{item.time}}</span>
                  </p>
                  <p class="custom-title">{{item.result}}</p>
                </template>
              </van-cell>
            </div>
            <div class="diagnose" v-if="active===2">
              <van-cell v-for="item in list" :key="item.id">
                <template #title>
                  <p><span class="custom-title">{{item.type}} | <span
                    class="blue-word">{{item.type}} </span> </span><span class="time">{{item.time}}</span>
                  </p>
                  <p class="custom-title">{{item.result}}</p>
                </template>
              </van-cell>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'name',
    data () {
      return {
        active: 0,
        tabList: [
          {
            id: 0,
            text: '体检'
          },
          {
            id: 1,
            text: '诊断'
          },
          {
            id: 2,
            text: '鉴定'
          }
        ],
        list: [
          {
            id: 0,
            type: '体检类别',
            time: '2020-08-05',
            result: '体检结论：吴兴区金盖山路56号某某大酒店后…'
          },
          {
            id: 1,
            type: '体检类别',
            time: '2020-08-05',
            result: '体检结论：吴兴区金盖山路56号某某大酒店后…'
          },
          {
            id: 2,
            type: '体检类别',
            time: '2020-08-05',
            result: '体检结论：吴兴区金盖山路56号某某大酒店后…'
          }
        ]
      }
    },
    methods: {
      onSubmit (values) {
        console.log('submit', values)
      },
      onClickLeft () {
        this.$router.go(-1)
      },
      onClickRight () {

      },
      changeTab (value) {
        this.active = value
      },
      navigate () {
        this.callMap()
      },
      callMap () {
        const uAgent = navigator.userAgent
        const isAndroid = uAgent.indexOf('Android') > -1 || uAgent.indexOf('Linux') > -1
        const isIos = uAgent.indexOf('iPhone') > -1
        let href
        alert(isAndroid, 'isAndroid')
        setTimeout(() => {
          if (document.hidden || document.webkitHidden) {
            return
          }
          href = 'https://uri.amap.com/marker?position=121.287689,31.234527'
          this.callLink(href)
        }, 3000)

        if (isAndroid) {
          href = 'androidamap://viewMap?sourceApplication=appname&poiname=abc&lat=36.2&lon=116.1&dev=0'
          this.callLink(href)
        }
        if (isIos) {
          href = 'iosamap://viewMap?sourceApplication=applicationName&poiname=A&lat=39.98848272&lon=116.47560823&dev=1'
          this.callLink(href)
        }

      },
      callLink (href) {
        const a = document.createElement('a')
        a.href = href
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
    },
  }
</script>

<style scoped lang="less">

  .subtitle {
    font-size: 16px;
    font-weight: 600;
    color: #1F2022;
    margin: 12px 0;
  }

  .detail-box {
    background: #ffffff;
    padding: 12px;
  }

  .info {
    margin-top: 10px;

  }

  .time {
    color: #61646A;
    float: right;
  }

  .blue-word {
    color: #1875E8;
  }

  .detail-info {

  }

  .left-part {
    display: inline-block;
    width: 80%;
  }

  .right-part {
    display: inline-block;
    width: 18%;
    text-align: right;
  }
</style>
