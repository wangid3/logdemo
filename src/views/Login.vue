<template>
  <div>
    <h3 style="margin:30px 0;">{{title}}</h3>
    <form action class="login" v-if="isReg">
      <label for="user">
        <span>用户名：</span>
        <input type="text" name="name" v-model="name">
      </label>
      <label for="password">
        <span>密&#12288;码：</span>
        <input type="password" name="password" v-model="password">
      </label>
      <p class="buttonBox">
        <button type="button" @click="reg()">登录</button>
        <button type="button" @click="res()">注册</button>
      </p>
    </form>
    <form action class="reset" v-else>
      <label for="user">
        <span>用户名：</span>
        <input type="text" name="name" v-model="name">
      </label>
      <label for="password">
        <span>密&#12288;码：</span>
        <input type="password" name="password" v-model="password">
      </label>
      <label for="password">
        <span>密&#12288;码：</span>
        <input type="password" name="password" v-model="repeatPassword">
      </label>
      <p class="buttonBox">
        <button type="button" @click="addUser()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </p>
    </form>
  </div>
</template>
<script>
import store from "@/store";
export default {
  store,
  name: "login",
  data() {
    return {
      isReg: true,
      name: "",
      password: "",
      repeatPassword: "",
      title: "欢迎登录"
    };
  },
  mounted() {
    console.log(this.title);
  },
  methods: {
    reg() {
      if(window.localStorage.userArr){//判断是否存在
		      var array = JSON.parse(window.localStorage.userArr);
	        }else{
		      array = [];//创建一个新数组
          }
      var index = 0 ; //定义一个下标确定用户
      var isHad = false;//定义一个开关变量
      for(var i =0;i<array.length;i++){
			  if(this.name==array[i].name){//有这个账号
				isHad=true;
				index=i;
			  }
		  }
      if(isHad){//如果存在
			  if(this.password==array[index].password){
          store.commit("setUser", this.name);
          if (localStorage.getItem(this.name) != null) {
             console.log("成功加载已有内容")
             //arr = JSON.parse(window.localStorage.getItem(this.name));
             store.commit("setList",JSON.parse(window.localStorage.getItem(this.name)));
             console.log(JSON.parse(window.localStorage.getItem(this.name)));
          }else{
            store.commit("setListNull");
          }
          this.name = "";
          this.password = "";
          this.$router.push("/home/list");
			  } else{
				alert("密码错误");
			  }
		  }else{//账号不存在或输入错误
			  alert('账号不存在或输入错误');
		  }
    },
    res() {
      this.isReg = false;
      console.log(this.isReg);
      this.title = "欢迎注册";
      this.name = "";
      this.password = "";
    },
    addUser() {
      if(window.localStorage.userArr){//判断是否存在
		      var array = JSON.parse(window.localStorage.userArr);
	        }else{
		      array = [];//创建一个新数组
	        }
      if (this.password == "" && this.repeatPassword == "" && this.name == "") {
        alert("不能为空");
      for(var i =0;i<array.length;i++){
			//判断是否有相同账号
			  if(this.name==array[i].name){
				alert("该账号已存在");
				return;
			  }
      }
      }else if (this.password !== this.repeatPassword) {
        alert("两次密码输入不一致");
        this.password = "";
        this.repeatPassword = "";
      }
      else {
        var obj = {name:this.name,password:this.password}
		    array.push(obj);
		    window.localStorage.userArr=JSON.stringify(array);
        alert("用户创建成功");
        this.isReg = true;
        this.name = "";
        this.password = "";
        this.repeatPassword = "";
      }
    },
    cancel() {
      this.isReg = true;
      this.title = "欢迎登录";
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 auto;
  label {
    flex: 1;
    margin: auto;
    margin-bottom: 30px;
    display: flex;
    span {
      width: 90px;
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
  }
  .buttonBox {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    button {
      width: 100px;
      border: none;
      margin-left: 10px;
      outline: none;
      border-radius: 5px;
      background: none;
      &:first-of-type {
        border: 1px solid #42b983;
        background: #42b983;
        color: #fff;
      }
      &:last-of-type {
        border: 1px solid #42b983;
        background: #fff;
        color: #42b983;
      }
    }
  }
}
.reset {
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 auto;
  label {
    flex: 1;
    margin: auto;
    margin-bottom: 30px;
    display: flex;
    span {
      width: 129px;
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
  }
  .buttonBox {
    width: 100%;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 30px;
    button {
      width: 100px;
      border: none;
      margin-left: 10px;
      outline: none;
      border-radius: 5px;
      background: none;
      &:first-of-type {
        border: 1px solid #42b983;
        background: #42b983;
        color: #fff;
      }
      &:last-of-type {
        border: 1px solid #f82b2b;
        background: #f82b2b;
        color: #fff;
      }
    }
  }
}
</style>

