<template>
  <div>
    <p v-show="pageList.length==0" style="margin:30px 0;">还没有日志！</p>
    <ul>
      <li
        class="item"
        v-for="(item,index) in pageList"
        :key="index"
        @click="choose(index)"
        :class="{actives:index==current && current !==''}"
      >
        <div class="title">
          <span>{{item.title}}</span>
          <span><img class="delIcon" @click="delInfo(index)" v-if="index==current && current !==''" src="../assets/del5.png" ></span>
        </div>
        <div class="con">{{item.content}}</div>
        <div class="date clearfix">
          <span class="time">{{item.date}}</span>
          <span class="infomation" v-if="index==current && current !==''" @click="info()">查看详情》》</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import store from "@/store";
export default {
  store,
  name: "list",
  data() {
    return {
      listLength: "",
      current: "",
      date:"",
      user:''
    };
  },
  mounted() {
    this.listLength = store.state.list.length;
    // console.log(this.listLength);
    this.user=store.state.user;
  },
  computed: {
    pageList() {
      return store.state.list;
    }
  },
  methods: {
    choose(index) {
      this.current = index;
      // console.log(this.current);
    },
    info(index) {
      this.$router.push({ path: "/info", query: { index: this.current } });
    },
    delInfo(index){
      if (!confirm("您确定要删除吗？")) return false;
      store.commit("delOne",index);
      localStorage.removeItem(this.user);
      localStorage.setItem(this.user, JSON.stringify(store.state.list));
      alert('本地已同步')
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  margin-top: 10px;
  display: flex;
  flex-flow: column;
  margin-bottom: 100px;
  .item {
    flex: 1;
    padding: 10px;
    height: 80px;
    border: 1px solid #999;
    margin: 10px;
    border-radius: 5px;
    text-align: left;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
    .title {
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #666;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .delIcon{
        height: 30px;
        float: right;
      }
    }
    .con {
      height: 20px;
      line-height: 20px;
      margin-top: 5px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .date {
      margin-top: 5px;
      .time {
        float: left;
      }
      .infomation {
        float: right;
        font-size: 13px;
      }
    }
    &.actives {
      background: #42b983;
      color: #fff;
      .title {
        border-bottom: 1px solid #fff;
      }
    }
  }
}
</style>