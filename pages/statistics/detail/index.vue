<template>
  <div class="box">
    <van-nav-bar
      title="统计"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell is-link @click="showFilterPanel">
      按行政区划统计
    </van-cell>
    <div class="custom-table">
      <p class="table-title">申报信息统计</p>
      <table>
        <thead>
        <tr>
          <th>行政 区划</th>
          <th>申报 企业</th>
          <th>已审核 企业</th>
          <th>在职 员工</th>
          <th>接害 人数</th>
          <th>职业病 人数</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in list"
             :key="item.id">
          <th class="area-code">{{item.addrsss}}</th>
          <th>{{item.num0}}</th>
          <th>{{item.num0}}</th>
          <th>{{item.num0}}</th>
          <th>{{item.num0}}</th>
          <th>{{item.num0}}</th>
        </tr>
        </tbody>
      </table>
    </div>
    <van-popup v-model="show" position="right" :style="{ height: '100vh', width:'100%' }" >
       <div class="filter-box">
         <p class="com-subtitle">
           统计方式
         </p>
         <div class="condition-box">
           <span :class="conditionClass(item.value)" v-for="item in ways" :key="item.value">{{item.label}}</span>
         </div>
       </div>
      <div class="filter-box">
        <p class="com-subtitle">
          申报时间
        </p>
        <div class="condition-box">
          <van-cell :value="date" @click="calendarShow = true" >
            开始时间 至 结束时间
          </van-cell>
          <van-calendar type="range" v-model="calendarShow" @confirm="chooseData" />
        </div>
      </div>
      <div class="filter-box">
        <p class="com-subtitle">
          审批状态
        </p>
        <div class="condition-box">
          <span :class="conditionClass(item.value)" v-for="item in ways" :key="item.value">{{item.label}}</span>
        </div>
      </div>
      <div class="filter-box">
        <p class="com-subtitle">
          经济类型
        </p>
        <div class="condition-box">
          <span :class="conditionClass(item.value)" v-for="item in ways" :key="item.value">{{item.label}}</span>
        </div>
      </div>
      <div class="filter-box">
        <p class="com-subtitle">
          行业分类
        </p>
        <div class="condition-box">
          <span :class="conditionClass(item.value)" v-for="item in ways" :key="item.value">{{item.label}}</span>
        </div>
        <van-button type="info" class="com-submit-btn" @click="filter">确定</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'name',
    data () {
      return {
        username: '',
        password: '',
        currentWay:'',
        calendarShow: false,
        date:'',
        show: false,
        list:[
          {
            id:0,
            addrsss:'吴兴区',
            num0:12358
          },
          {
            id:1,
            addrsss:'南浔区',
            num0:12358
          },
          {
            id:2,
            addrsss:'德清县',
            num0:12358
          },
          {
            id:3,
            addrsss:'长兴县',
            num0:12358
          },
          {
            id:4,
            addrsss:'安吉县',
            num0:12358
          }
        ],
        ways:[
          {
            label:'行政区划',
            value:0
          },{
            label:'所属行业',
            value:1
          },{
            label:'企业规模',
            value:2
          }
        ]
      }
    },
    computed: {
      conditionClass(val) {
        return val => {
          return {
            condition: true,
            // conditionActive: val === this.currentWay
            'condition-active': true
          };
        };
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
      showFilterPanel(){
        this.show = true;
      },
      chooseData(date){
        const [start, end] = date;
        this.calendarShow = false;
        this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      },
      formatDate(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      filter(){
        this.show=false;
      }
    },
  }
</script>

<style scoped lang="less">
  .box {
    background: #F3F5F9;
    height: 100vh;
  }

  .info {
    margin-top: 10px;
  }

  .custom-table {
    margin-top: 10px;
    background: #ffffff;
    padding: 8px 12px;
    font-size: 14px;
    .table-title{
      margin-bottom: 8px;
    }
    >table{
      >thead{
        background:rgba(64,135,235,0.6);
        color: #ffffff;
        >tr{
          >th{
            padding: 4px 6px;
            font-weight: 400;
          }
        }
      }
      >tbody{
        >tr{
          border-bottom:1px solid rgba(193,223,255,1) ;
          >th{
            font-weight: 400;
          }
        }
      }
      .area-code{
        background:rgba(218,232,253,1);
        padding: 14px 6px;
        width: 64px;
      }
    }
  }


  /*common*/
  .filter-box{
    margin: 16px 12px;
  }
  .com-subtitle{
    border-left: #2C7CEE 3px solid;
    padding: 0 4px;
    font-weight: 600;
  }

  .condition-box{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .condition{
    min-width:100px;
    height:36px;
    line-height: 36px;
    background:rgba(245,245,245,1);
    border-radius:4px;
    text-align: center;
    display: inline-block;
    margin-bottom: 10px;
  }
  .condition-active{
    background:rgba(231,241,255,1);
    color: #2A7EFB;
  }

  .com-submit-btn{
    width: 100%;
    background:linear-gradient(90deg,rgba(79,184,252,1) 0%,rgba(72,146,253,1) 100%);
  }
</style>
