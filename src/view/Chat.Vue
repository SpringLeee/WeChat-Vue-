<template>



  <div>
    <div class="topbar" >
      <span onclick="window.history.go(-1)" style="font-size:30px;color:#FFF;width:60px;" class="glyphicon glyphicon-circle-arrow-left"></span>
      <span style="font-size:18px;color:#FFF;width:70%;">和王老板聊天</span>
      <span style="font-size:24px;color:#FFF;" class="glyphicon glyphicon-user"></span>
    </div>

    

      <div id="chatboxs" style="width:100%;margin-top:5em;margin-bottom:5em; ">

        <div v-html="chats">


        </div>
      </div>

    

      <div class="chattext">

        <input v-model="message" v-on:keyup.enter="send()" type="text" class="form-control inout">

        <button v-on:click="send()" type="button" class="btn btn-success" style="margin-left:10px;padding:5px 10px">发 送</button>

      </div>
   

</div>


</template>


<style type="text/css">
  .chatme {
   display:inline-block;
    width:100%;
    padding-left:20px;
    padding-right:20px;
    justify-content:flex-end;
    margin-top:14px;
  }



  .inout{
    background-color:none;

  }
  
  .inout:focus {
    border: 1px solid #ccc;
    -moz-box-shadow: inherit;
    -webkit-box-shadow: inherit;
    box-shadow: inherit;
  }
  
  .chattext {
    position: fixed;
    bottom: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 6px 10px;
    background-color: #f3f3f3;
    border-top: 1px solid #CCC;
  }
  
  .topbar {
    z-index:999;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 3em;
    background-color: #373b3e;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 7% 8%;
  }
</style>


<style type="text/css">

  .fold-enter-active, .fold-leave-active {
    transition: all .5s;
  }

  .fold-enter, .fold-leave-active {
    transform: translate3d(0, 0, 0);
  }

</style>

<script>


  var msgs = '<div class="chatme">'

    + '<img style="width:60px;height:60px;border-radius:6px;margin-right:20px;float:left" src="https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2603009143,2305482958&fm=73&s=7EB83CC7C463050D9C8EECEA03006097" />'

    + ' <div style="word-break:break-all; min-width:20%;max-width:60%;background-color:#9fe658;border-radius:8px;padding:10px;float:left; position:relative">'
    + ' <span style="border-width: 8px;  border-style: solid; transform:rotate(270deg); border-color:transparent transparent#9fe658;position:absolute;left:-16px;top:10px">'
    + ' </span>'
    + '  <p style="padding:0;margin:0;font-size:14px">'
    + '听说你不充Q币？'
    + ' </p>'
    + '  </div>'


    + ' </div>'


  export default {
    name: 'Index',
    data() {
      return {
        message: "",
        chats: msgs
      
      }
    },
    created() {

      var id = this.$route.params.id;
  
     
    },
    updated() {
      window.scrollTo(0, document.getElementById("chatboxs").scrollHeight)
    },
    
    watch: {
      chats() {

      

      }
    },
    methods: {

      
      send() {


        if (this.message == "") {
          return
        }


        var text = ' <div class="chatme">'

          + '<img style="width:60px;height:60px;border-radius:6px;margin-left:20px;float:right" src=" https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2764132475,723642490&fm=111&gp=0.jpg" />'

          +'<div style="word-break:break-all; min-width:20%;max-width:60%;background-color:#9fe658;border-radius:8px;padding:10px;float:right; position:relative">'
           +' <span style="border-width: 8px;  border-style: solid; border-color: transparent transparent transparent #9fe658;position:absolute;right:-16px;top:10px">'

          + ' </span>'
          + ' <p style="padding:0;margin:0;font-size:14px">' + this.message + '</p>'
          +'</div>'

        +'</div>'

        this.chats = this.chats + text

        this.$http.get("http://www.tuling123.com/openapi/api?key=34a72472b7ab435eb28ecf0b6936be30&info=" + this.message).then((res) => {


          var recivemsg = res.body.text;

          var recetext = '<div class="chatme">'

            +'<img style="width:60px;height:60px;border-radius:6px;margin-right:20px;float:left" src="https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2603009143,2305482958&fm=73&s=7EB83CC7C463050D9C8EECEA03006097" />'

           +' <div style="word-break:break-all; min-width:20%;max-width:60%;background-color:#9fe658;border-radius:8px;padding:10px;float:left; position:relative">'
             +' <span style="border-width: 8px;  border-style: solid; transform:rotate(270deg); border-color:transparent transparent#9fe658;position:absolute;left:-16px;top:10px">'
            + ' </span>'
            +'  <p style="padding:0;margin:0;font-size:14px">'
            + recivemsg
           +' </p>'
          +'  </div>'


            + ' </div>'


          var This = this


          setTimeout(function () {

            This.chats = This.chats + recetext

            This.message = "";

          },800);

        });


      }

    }

  }


</script>