<template>
	<div>
		<nav-bar nav="我"></nav-bar>
		<head-bar></head-bar>
		

		<div style="background-color:#FFF;padding:8px 8%;display:flex;justify-content: flex-start;align-items:center">
			<img style="width:70px;height:70px;margin-right:16px" src="../assets/ashen.jpg" />
			<div style="width:60%;;padding-top:6px">
				<p style="font-size:16px">隔壁老王</p>
				<p>微信号:123456789</p>
			</div>
			<img style="width:52px;height:52px;" src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/code.png" />
		</div>





		<div style="background:#FFF;padding:8px 8%;margin-top:20px">
			<div>
				<img style="width:32px;height:32px" src="../assets/scan2D.jpg" />
				<span style="font-size:16px;width:70%;margin-left:6px">相册</span>
			</div>

			<hr style="padding:0;margin:5px;background-color:rgba(204, 204, 204, 0.13);height:1px" />
			<div>
				<img style="width:32px;height:32px" src="../assets/shake.jpg" />
				<span style="font-size:16px;width:70%;margin-left:6px">收藏</span>
			</div>
		</div>

		<div style="background:#FFF;padding:8px 8%;margin-top:20px">
			<div>
				<img style="width:30px;height:30px" src="../assets/mls.jpg" />
				<span style="font-size:16px;width:70%;margin-left:6px">钱包</span>
			</div>

		</div>
		<div style="background:#FFF;padding:8px 8%;margin-top:20px">
			<div>
				<img style="width:32px;height:32px" src="../assets/shopping.jpg" />
				<span style="font-size:16px;width:70%;margin-left:6px">卡包</span>
			</div>

			<hr style="padding:0;margin:5px;background-color:rgba(204, 204, 204, 0.13);height:1px" />
			<div>
				<img style="width:32px;height:32px" src="../assets/shoucang.jpg" />
				<span style="font-size:16px;width:70%;margin-left:6px">表情</span>
			</div>
		</div>
		<div style="background:#FFF;padding:8px 8%;margin-top:20px">
			<div>
				<img style="width:30px;height:30px" src="../assets/shezhi.jpg" />
				<span style="font-size:16px;width:70%;margin-left:6px">设置</span>
			</div>

		</div>



	</div>
</template>


<script>

  import NavBar from '../components/NavBar'
  import headBar from '../components/headBar'

  export default {
    name: 'Users',
    components: { NavBar, headBar }
  }
</script>