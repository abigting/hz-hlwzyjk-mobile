<template>
  <div class="wrapper">
    <div class="user-info" @click="jump">
      <div class="name">
        <div class="profile">
          <img src="../../assets/imgs/profile.png" alt="">
        </div>
        <div>
          <p style="margin-bottom: 4px">Hi,{{userInfo.userName}}</p>
          <p class="address">{{userInfo.zone}}</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="menu">
        <div
          v-for="item in menuList"
          :key="item.icon"
          @click="showDetail(item.link)"
          class="module-fun">
          <p class="icon">
            <img :src="item.icon" alt="">
          </p>
          <p>{{item.text}}</p>
        </div>
      </div>
      <div class="statistics-data">
        <p class="subtitle">申报企业数：2562家</p>
        <div class="data-panel">
          <div class="purple-panel">
            <p>#7171CE</p>
            <p>24901 (85%)</p>
            <div>未检测</div>
            <p>392 (15%)</p>
          </div>
          <div class="orange-panel">
            <p>#7171CE</p>
            <p>24901 (85%)</p>
            <div>未检测</div>
            <p>392 (15%)</p>
          </div>
          <div class="green-panel">
            <p>#7171CE</p>
            <p>24901 (85%)</p>
            <div>未检测</div>
            <p>392 (15%)</p>
          </div>
        </div>
        <p class="subtitle">接害人数：12873</p>
        <div class="data-panel">
          <div class="green-panel">
            <p>未检测</p>
            <p>392 (15%)</p>
          </div>
          <div class="red-panel">
            <p>未检测</p>
            <p>392 (15%)</p>
          </div>
          <div class="gray-panel">
            <p>未检测</p>
            <p>392 (15%)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="map-box">
      <div id="main" style="width: 100%;height: 300px;"></div>
    </div>
    <div class="address-wrapper">

    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import { getUserInfo } from '~/utils/common'

  export default {
    name: 'index',
    data () {
      return {
        menuList: [
          {
            text: '周边',
            icon: require('../../assets/imgs/surroundings.png'),
            link: 'surroundings'
          }, {
            text: '搜单位',
            icon: require('../../assets/imgs/company.png'),
            link: 'company'
          }, {
            text: '搜人员',
            icon: require('../../assets/imgs/person.png'),
            link: 'person'
          }, {
            text: '统计',
            icon: require('../../assets/imgs/statistics.png'),
            link: 'statistics'
          }
        ],
        userInfo: getUserInfo() || {},
        charts: '',
        opinion: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        opinionData: [
          {
            value: 335,
            name: '直接访问'
          },
          {
            value: 310,
            name: '邮件营销'
          },
          {
            value: 234,
            name: '联盟广告'
          },
          {
            value: 135,
            name: '视频广告'
          },
          {
            value: 1548,
            name: '搜索引擎'
          }
        ]
      }
    },
    //调用
    mounted () {
      this.$nextTick(function () {
        this.drawPie('main')
      })
    },
    methods: {
      drawPie (id) {
        let colorList = ['#3F5275', '#FA8B47', '#FFC741', '#4B8CEC', '#00C284']
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          // backgroundColor:'#060b16',
          backgroundColor: 'transparent',
          title: {
            text: '企业健康度',
            x: 'center',
            y: 'center',
            textStyle: {
              fontSize: 14,
              color: '#2E2F31',
              fontFamily: '微软雅黑',
              fontWeight: 600,
            }
          },
          // toolbox: {
          //   left: 'center',
          //   feature: {
          //     dataZoom: {
          //       yAxisIndex: 'none'
          //     },
          //     restore: {},
          //     saveAsImage: {}
          //   }
          // },
          // tooltip: {
          //   trigger: 'item'
          // },
          series: [{
            type: 'pie',
            // center: ['50%', '50%'],
            radius: ['25%', '35%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              }
            },
            label: {
              show: true,
              position: 'outside',
              // formatter: '{a|{b}：{d}%}\n{hr|}',
              formatter: '{a|{b}：{d}}\n{hr|}',
              fontSize: 12,
              fontFamily: '微软雅黑',
              rich: {
                hr: {
                  backgroundColor: 't',
                  borderRadius: 3,
                  width: 3,
                  height: 3,
                  padding: [3, 3, 0, -12]
                },
                a: {
                  padding: [-30, 15, -20, 15]
                }
              }
            },
            labelLine: {
              normal: {
                length: 8,
                length2: 12,
                lineStyle: {
                  width: 1
                }
              }
            },
            data: [{
              'name': '严重警告',
              'value': 823
            }, {
              'name': '健康',
              'value': 241

            }, {
              'name': '警告',
              'value': 823
            }, {
              'name': '提醒',
              'value': 823
            }, {
              'name': '粮油副食',
              'value': 266
            }],
          }]
        })
        this.charts.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
        this.charts.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: 0
        })
      },
      jump () {
        this.$router.push(`/home/userInfo`)
      },
      showDetail (link) {
        this.$router.push(`/${link}`)
      }
    },
  }
</script>

<style scoped lang="less">
  .wrapper {
    background: #f3f5f9;
  }

  .user-info {
    background: url("../../assets/imgs/banner.png") #ffffff center;
    background-size: cover;
    color: #ffffff;
    height: 164px;
    padding: 64px 12px 0 12px;
  }

  .name {
    display: flex;
  }

  .profile {
    width: 45px;
    height: 45px;
    margin-right: 12px;

    > img {
      width: 100%;
    }
  }

  .address {
    font-size: 10px;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 8px 16px 0 rgba(189, 198, 218, 0.5);
    border-radius: 8px;
    padding: 12px 24px 14px 24px;
    position: relative;
    top: -32px;
  }

  .module-fun {
    width: 50px;

    .icon {
      > img {
        width: 100%;
      }
    }

    > p {
      text-align: center;
      margin-bottom: 0;
    }
  }

  .content {
    padding: 20px 12px;
    background: #ffffff;
  }

  .subtitle {
    font-size: 16px;
    font-weight: 600;
    color: rgba(46, 47, 49, 1);
    margin: 8px 0;
  }

  .data-panel {
    display: flex;
    justify-content: space-between;

    > div {
      width: 30%;
      border-radius: 8px;
      padding: 12px 6px;
      text-align: center;

      > p {
        margin-bottom: 6px;
      }
    }

    .purple-panel {
      background: linear-gradient(207deg, rgba(244, 240, 255, 1) 0%, rgba(211, 211, 255, 1) 100%);
      color: #7171CE;

      > div {
        background: linear-gradient(270deg, rgba(141, 141, 238, 1) 0%, rgba(178, 176, 249, 1) 100%);
        border-radius: 23px;
        padding: 4px 18px;
        margin: 6px 0 12px 0;
        font-size: 12px;
        display: inline-block;
        color: #ffffff;
      }
    }

    .orange-panel {
      background: linear-gradient(207deg, rgba(255, 241, 213, 1) 0%, rgba(250, 220, 181, 1) 100%);
      color: #D77F24;

      > div {
        background: linear-gradient(270deg, rgba(248, 181, 78, 1) 0%, rgba(255, 206, 109, 1) 100%);
        border-radius: 23px;
        padding: 4px 18px;
        margin: 6px 0 12px 0;
        font-size: 12px;
        display: inline-block;
        color: #ffffff;
      }
    }

    .green-panel {
      background: linear-gradient(207deg, rgba(220, 247, 238, 1) 0%, rgba(191, 238, 220, 1) 100%);
      color: #08B67F;

      > div {
        background: linear-gradient(270deg, rgba(37, 205, 148, 1) 0%, rgba(69, 225, 178, 1) 100%);
        border-radius: 23px;
        padding: 4px 18px;
        margin: 6px 0 12px 0;
        font-size: 12px;
        display: inline-block;
        color: #ffffff;
      }
    }

    .red-panel {
      background: linear-gradient(207deg, rgba(254, 238, 227, 1) 0%, rgba(253, 215, 211, 1) 100%);
      color: #CE7C7B;
    }

    .gray-panel {
      background: linear-gradient(27deg, rgba(212, 227, 246, 1) 0%, rgba(233, 243, 254, 1) 100%);
      color: #6B8BAF;
    }

    .line {
      height: 10px;
      background: #f3f5f9;
    }
  }

  .map-box {
    background: #ffffff;
    margin-top: 10px;
  }
</style>
