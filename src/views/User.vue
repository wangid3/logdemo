<template>
  <div>
    <img class="logOut" @click="logout(index)"  src="../assets/logout.png" >
    <h2 style="margin-top:30px;">
      {{user}}的个人中心
    </h2>
    <p>
      <button @click="add()">写日志</button>
    </p>
  </div>
</template>

<script>
import store from "@/store";
export default {
  store,
  name: 'User',
  data(){
    return {
      user:''
    };
  },
  created() {
    this.user=store.state.user;
  },
  methods: {
    add() {
      this.$router.push("/add");
    },
    logout(){
      if (!confirm("您确定要退出登录吗？")) return false;
      this.$router.push("/");
    }
  }

}
</script>


<style scoped lang="scss">
.logOut{
  position:absolute; 
  top:0; 
  right:20px;
}
img {
  margin-top: 20px;
}
button {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background: rgba(65, 184, 131, 1);
  color: #fff;
  outline: none;
  margin-top: 30px;
}
</style>
