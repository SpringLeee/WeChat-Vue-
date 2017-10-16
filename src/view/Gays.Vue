<template>
  <div style="padding-bottom:100px;">
    <nav-bar nav="通讯录"></nav-bar>
    <head-bar></head-bar>


   
    <div style="background-color:#FFF">

      <div class="toplist" >

        <img style="width:40px;height:40px;margin-right:4px" src="../assets/newfriend.jpg" />
        <p style="font-size:16px;line-height:40px">新的朋友</p>

      </div>

      <div class="toplist">
        <img style="width:40px;height:40px;margin-right:4px" src="../assets/groupchat.jpg" />
        <p style="font-size:16px;line-height:40px">群聊</p>
      </div>

      <div class="toplist">
        <img style="width:40px;height:40px;margin-right:4px" src="../assets/tag.jpg" />
        <p style="font-size:16px;line-height:40px">标签</p>
      </div>

      <div class="toplist">
        <img style="width:40px;height:40px;margin-right:4px" src="../assets/news.jpg" />
        <p style="font-size:16px;line-height:40px">公众号</p>
      </div>

    </div>

    <div style="width:100%;padding:0 5%;background-color:#FFF">

      
       <p style="background-color:rgba(204, 204, 204, 0.13); margin:0">A</p>
      
      <div class="manlist" v-on:click="chats" data_id="23333">

        <img style="width:50px;height:50px" src="https://avatars1.githubusercontent.com/u/26320639?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">小 冰</span>


      </div>

      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars1.githubusercontent.com/u/1390554?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">小 王</span>

      </div>

      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars1.githubusercontent.com/u/17685540?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">老 王</span>

      </div>

    </div>

    <div style="width:100%;padding:0 5%;background-color:#FFF">

      <p style="background-color:rgba(204, 204, 204, 0.13); margin:0">B</p>

      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars3.githubusercontent.com/u/6508763?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">小 张</span>

      </div>
      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars3.githubusercontent.com/u/31086948?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">Darker</span>

      </div>
      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars1.githubusercontent.com/u/17685540?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">老 王</span>

      </div>

      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars1.githubusercontent.com/u/30720377?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">金三胖</span>

      </div>
      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars0.githubusercontent.com/u/7702529?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">加多宝</span>

      </div>
    </div>

    <div style="width:100%;padding:0 5%;background-color:#FFF">

      <p style="background-color:rgba(204, 204, 204, 0.13); margin:0">C</p>

      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars1.githubusercontent.com/u/26320639?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">小 冰</span>

      </div>
      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars1.githubusercontent.com/u/1390554?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">小 王</span>

      </div>
      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars1.githubusercontent.com/u/3379261?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">王老吉</span>

      </div>
      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars0.githubusercontent.com/u/30238285?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">炫迈</span>

      </div>
      <div class="manlist">
        <img style="width:50px;height:50px" src="https://avatars1.githubusercontent.com/u/17685540?v=4&s=100" />
        <span style="font-size:16px;margin-left:8px">老 王</span>

      </div>
    </div>

  </div>
</template>

<script>

import NavBar from '../components/NavBar'
import headBar from '../components/headBar'

export default {
  name: 'Gays',
  components: { NavBar, headBar },
  methods: {

    chats(item) {
      console.log(item.target.attributes.data_id.value)
    }

  }
 
}
</script>

<style type="text/css">

  .toplist {
    width: 90%;
    margin: 0 auto;
    display: flex;
    border-bottom:1px solid rgba(204, 204, 204, 0.59);
    align-items:center;
    vertical-align:central;
  
  }
  .manlist {
    
    display:flex;
    align-content:center;
    align-items:center;
    vertical-align:central;
    padding-bottom:6px;
    padding-top:6px;
    border-bottom:1px solid rgba(204, 204, 204, 0.5);
  }
  .manlist:hover {
    background-color:rgba(204, 204, 204, 0.39);
  }

 
</style>
