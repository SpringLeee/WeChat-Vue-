<template>
  <div>

    <mu-paper style='position:fixed;bottom:0px;width:100%'>

      <mu-bottom-nav v-bind:value="nav">
        <mu-bottom-nav-item href="#/" value="微信" title="微信" icon="chat bubble" />
        <mu-bottom-nav-item href="#/Gays" value="通讯录" title="通讯录" icon="people outline" />
        <mu-bottom-nav-item href="#/Find" value="发现" title="发现" icon="explore" />
        <mu-bottom-nav-item href="#/Users" value="我" title="我" icon="face" />
      </mu-bottom-nav>

    </mu-paper>

  </div>
</template>

<script>


export default {
  props: {nav: String  }
}

</script>

