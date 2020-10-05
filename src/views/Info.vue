<template>
  <div>
    <h3 style="margin:30px 0;">{{title}}</h3>
    <p>{{content}}</p>
     <p style="color:#666;margin-top:20px;">发布时间：{{date}}</p>
    <p class="back" @click="goBack()">返回</p>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "info",
  data() {
    return {
      indexD: "",
      title: "",
      content: "",
      date:""
    };
  },
  computed: {
    pageList() {
      return store.state.list;
    }
  },
  created() {
    this.indexD = this.$route.query.index;
    // console.log(store.state.list[this.indexD].content);
    this.title = store.state.list[this.indexD].title;
    this.content = store.state.list[this.indexD].content;
    this.date = store.state.list[this.indexD].date;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
p {
  width: 90%;
  margin: 0 auto;
  text-align: left;
  text-indent: 1rem;
}
.back {
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #42b983;
  color: #fff;
  text-align: center;
  text-indent: 0;
  border-radius: 5px;
  margin-top: 30px;
}
</style>