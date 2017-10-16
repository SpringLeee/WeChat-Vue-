<template>
  <div>

    <nav-bar nav="发现"></nav-bar>
    <head-bar></head-bar>
    
    <div style="background-color:#FFF;padding:8px 8%;display:flex;justify-content: flex-start;align-items:center">
      <img style="width:42px;height:42px" src="../assets/friendCircle.jpg" />
      <span style="font-size:16px;width:70%;margin-left:6px">朋友圈</span>
      <img style="width:40px;height:40px;" src="../assets/dcr.jpg" />
    </div>


    <div style="background:#FFF;padding:8px 8%;margin-top:20px">

      <div >
        <img style="width:32px;height:32px" src="../assets/scan2D.jpg" />
        <span style="font-size:16px;width:70%;margin-left:6px">扫一扫</span>
      </div>


      <hr  style="padding:0;margin:5px;background-color:rgba(204, 204, 204, 0.13);height:1px"/>

      <div>
        <img style="width:32px;height:32px" src="../assets/shake.jpg" />
        <span style="font-size:16px;width:70%;margin-left:6px">摇一摇</span>
      </div>

    </div>


    <div style="background:#FFF;padding:8px 8%;margin-top:20px">
      <div>
        <img style="width:30px;height:30px" src="../assets/mls.jpg" />
        <span style="font-size:16px;width:70%;margin-left:6px">附近的人</span>
      </div>
     
    </div>

    <div style="background:#FFF;padding:8px 8%;margin-top:20px">
      <div>
        <img style="width:32px;height:32px" src="../assets/shopping.jpg" />
        <span style="font-size:16px;width:70%;margin-left:6px">购物</span>
      </div>

      <hr style="padding:0;margin:5px;background-color:rgba(204, 204, 204, 0.13);height:1px" />
      <div>
        <img style="width:32px;height:32px" src="../assets/shoucang.jpg" />
        <span style="font-size:16px;width:70%;margin-left:6px">游戏</span>
      </div>
    </div>

    <div style="background:#FFF;padding:8px 8%;margin-top:20px">
      <div>
        <img style="width:30px;height:30px" src="../assets/chwl.jpg" />
        <span style="font-size:16px;width:70%;margin-left:6px">小程序</span>
      </div>

    </div>

  </div>
</template>

<script>

  import NavBar from '../components/NavBar'
  import headBar from '../components/headBar'

  export default {
    name: 'Find',
    components: { NavBar, headBar }
  }
</script>