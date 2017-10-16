<template>

  

    <div>

     
        <nav-bar nav="微信"></nav-bar>
        <head-bar></head-bar>

        <div>
          <a href="#/Chat/1">
            <div class="chat">
              <div>
                <mu-badge content="4">
                  <img style="height:4em;width:4em;border-radius:6px" src='https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2603009143,2305482958&fm=73&s=7EB83CC7C463050D9C8EECEA03006097'>
                </mu-badge>
              </div>
              <div class="chat-layout">
                <div class="chat-title">
                  <span style="font-size:20px;">马化腾</span>
                  <span style="font-size:12px;color:#b2b2b2">10-07</span>
                </div>
                <p style="color:#888">听说你没充Q币？</p>
              </div>
            </div>
          </a>
          <a href="#/Chat/2">
            <div class="chat">
              <div>
                <mu-badge content="1">
                  <img style="height:4em;width:4em;border-radius:6px" src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2447625017,4290288049&fm=27&gp=0.jpg'>
                </mu-badge>
              </div>
              <div class="chat-layout">
                <div class="chat-title">
                  <span style="font-size:20px;">老王</span>
                  <span style="font-size:12px;color:#b2b2b2">10-07</span>
                </div>
                <p style="color:#888">晚上出来打球?</p>
              </div>
            </div>
          </a>
          <a href="#/Chat/3">
            <div class="chat">
              <div>
                <mu-badge content="99">
                  <img style="height:4em;width:4em;border-radius:6px" src='http://img2.hao661.com/uploads/allimg/c160131/14541W0422A60-1345T.jpg'>
                </mu-badge>
              </div>
              <div class="chat-layout">
                <div class="chat-title">
                  <span style="font-size:20px;">Jams</span>
                  <span style="font-size:12px;color:#b2b2b2">10-07</span>
                </div>
                <p style="color:#888">What The Fuck?</p>
              </div>
            </div>
          </a>
          <a href="#/Chat/4">
            <div class="chat">
              <div>
                <mu-badge content="12">
                  <img style="height:4em;width:4em;border-radius:6px" src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4212705485,2141668227&fm=27&gp=0.jpg'>
                </mu-badge>
              </div>
              <div class="chat-layout">
                <div class="chat-title">
                  <span style="font-size:20px;">小冰</span>
                  <span style="font-size:12px;color:#b2b2b2">10-07</span>
                </div>
                <p style="color:#888">小冰你变了...</p>
              </div>
            </div>
          </a>
        </div>


</div>

    

</template>

<script>

import NavBar from '../components/NavBar'
import headBar from '../components/headBar'

export default {
  name: 'Index',
  components: { NavBar, headBar },
  data() {
    return {
      show: true
    }
  },
  methods: {
   

  }



  }
</script>

<style type="text/css">
.mu-text-field {
  width: 94%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.mu-badge-float {
  border-radius: 50%;
  background-color: #f43531;
  color: #FFF;
  width: 20px;
  height: 20px;
  top: -6px;
  right: -6px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.chat {
  color:#000000;
  background-color:#FFF;
  padding-left: 4%;
  padding-right: 4%;
  align-items: center;
  display: flex;
  width: 100%;
  height: 6em;
  border-bottom: 1px solid #ccc;
}
.chat:hover{
background-color: rgba(204, 204, 204, 0.3);
}

.chat-layout {

  padding-left: 10px;
  width: 80%;
}

.chat-title {
  padding-top: 6px;

  display: flex;
  justify-content: space-between;
}






</style>
