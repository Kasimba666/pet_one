<template>
    <div class="MyBar"
    :style="{backgroundColor: barbackcolor, borderColor: barbordercolor, height: barheight}">
        <div class="component-bardescription">{{ bartitle }}</div>
        <div class="component-barcontent">
          <div style="width: 20px; height: 20px; background-color: brown"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyBar",
    components: {},
    props: ['barbackcolor', 'barbordercolor', 'bartitle'],
    data() {
        return {}
    },
    computed: {},
    methods: {},
    mounted() {
    },
}
</script>

<style lang="scss">
/****  MyBar  ****/
.MyBar {
  width: 100%;
  height: auto;
  border-style: solid;
  //position: relative;
  .component-bardescription {
     background: ghostwhite;
     border-style: solid;
     border-color: grey;
     padding: 3px;
     margin: 3px 3px 3px;
  }
  .component-barcontent {
      border-style: solid;
      border-color: grey;
      height: 350px;
      margin: 3px 3px 3px;
  }
}
</style>