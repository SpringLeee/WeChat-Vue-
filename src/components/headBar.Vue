<template>

<div style="margin-bottom:16px">
 <mu-appbar style="background-color:#373b3e;text-align:center;font-size:16px" title="微信（14）">

      <mu-icon-menu  icon="more_vert" slot="right" style="">

          <mu-menu-item title="发起群聊"  />
          <mu-menu-item title="添加朋友" />
          <mu-menu-item title="扫一扫" />
          <mu-menu-item title="收付款" />


      </mu-icon-menu>

    </mu-appbar>

    <div style="margin-bottom:5px;background-color:#FFF">
      <mu-text-field style="padding-bottom:0;padding-top:10px;margin-left:4%"  class="appbar-search-field" slot="right" hintText="请输入搜索内容" />
    </div>
</div>

</template>


<script>
export default {

  data() {
    return {

    }
  },
  created() {

  },

  methods: {


  }

};
</script>

<style type="text/css">
  .mu-text-field-content {
    padding-bottom:0;
  }
</style>
