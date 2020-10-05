<template>
  <div>
    <h3 style="margin:30px 0;">添加详情</h3>
    <form action class="add">
      <label for="title">
        <span>标题：</span>
        <input type="text" name="title" v-model="title">
      </label>
      <label for="con">
        <span>内容：</span>
        <textarea name="con" id v-model="content"></textarea>
      </label>
      <div class="addBtn" @click="add()">添加</div>
    </form>
  </div>
</template>
<script>
import store from "@/store";
export default {
  store,
  name: "add",
  data() {
    return {
      title: "",
      content: "",
      date: "",
      user:''
    };
  },
    created() {
    this.user=store.state.user;
  },
  methods: {
    add() {
      var date = new Date();
      this.date =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      if (this.title != "" && this.content != "") {
        store.commit("addItem", {
          title: this.title,
          content: this.content,
          date: this.date
        });
        if (localStorage.getItem(this.user) != null) {
          localStorage.removeItem(this.user);
          localStorage.setItem(this.user, JSON.stringify(store.state.list)); 
	        alert('本地已同步')
	      }else{
          localStorage.setItem(this.user, JSON.stringify(store.state.list)); 
          alert('本地已同步')
	      }
        this.title = "";
        this.content = "";
        this.$router.push("home/list");
      } else {
        alert("请输入标题和内容！");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.add {
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 auto;
  label {
    flex: 1;
    //margin:auto;
    margin-bottom: 30px;
    display: flex;
    span {
      width: 100px;
      text-align: right;
      vertical-align: middle;
    }
    input {
      width: 200px;
      height: 25px;
      border: 1px solid #666;
      text-indent: 1em;
      border-radius: 5px;
      outline: none;
      vertical-align: middle;
    }
    textarea {
      width: 190px;
      padding: 5px;
      height: 150px;
      border: 1px solid #666;
      text-indent: 1em;
      border-radius: 5px;
      outline: none;
      vertical-align: middle;
      resize: none;
    }
  }

  .addBtn {
    width: 100px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    margin: 0 auto 10px;
    border-radius: 5px;
    border: 1px solid #42b983;
    background: #42b983;
    color: #fff;
  }
}
</style>