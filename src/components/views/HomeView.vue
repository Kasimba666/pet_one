<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../../assets/logo.png">-->
    <router-view msg="Welcome to Your Vue.js Pet App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import JSResearch from '@/components/views/JSResearch.vue'

export default {
  name: 'HomeView',
  components: {
    JSResearch
  }
}
</script>
