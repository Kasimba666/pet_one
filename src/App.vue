<template>
  <div id="app">
    <nav>
      <router-link :to="{name: 'HomeView'}">Home</router-link> |
      <router-link :to="{name: 'JSResearch'}">JS</router-link>  |
      <router-link :to="{name: 'CSSResearch'}">CSS</router-link>  |
      <router-link :to="{name: 'FlexResearch'}">Flex</router-link> |
      <router-link :to="{name: 'BlockTagsResearch'}">Block</router-link> |
      <router-link :to="{name: 'InlineTagsResearch'}">Inline</router-link>  |
      <router-link :to="{name: 'AnimationResearch'}">Animation</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script setup>
</script>
