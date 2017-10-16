<template>

  <div>

    <nav-bar nav="通讯录"></nav-bar>

    <h3>我是登陆页面</h3>

<div>
<img v-if="imgs" src="../assets/loading.gif">
</div>

  </div>
</template>



<script>

  import NavBar from '../components/NavBar'

  export default {
    name: 'Login',
    components: { NavBar },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        imgs:true
      }
    },
    beforeCreate() {
      console.log("beforeCreate")
    },
    created(){

      console.log("created")

      var T=this
      setTimeout(function() {
       T.imgs=false;
      }, 2000);

        this.$http.jsonp("https://api.douban.com/v2/book/1220562").then((res)=>{
         
        });

    },
    beforeMount(){
      console.log("beforeMount")
    },
    mounted(){
      console.log("mounted")
    },
    beforeUpdate(){
      console.log("beforeUpdate")
    },
    updated(){
      console.log("updated")
    },
    activated(){
      console.log("activated")
    },
    deactivated(){
      console.log("deactivated")
    },
    beforeDestroy(){
      console.log("beforeDestroy")
    },
    destroyed(){
      console.log("destroyed")
    },
    destroyed(){
      console.log("destroyed")
    }

  }
</script>
