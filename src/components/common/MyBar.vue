<template>
    <div class="MyBar"
    :style="{backgroundColor: mybackcolor, borderColor: mybordercolor, width: mywidth, height: myheight}">
        <div class="bardescription">Здесь происходит вот что:</div>
        <div class="barcontent">

        </div>

    </div>
</template>

<script>
export default {
    name: "MyBar",
    components: {},
    props: ['mybackcolor', 'mybordercolor', 'mywidth', 'myheight'],
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
  .bardescription {
     background: ghostwhite;
     border-style: solid;
     border-color: grey;
     padding: 3px;
     margin: 3px 3px 3px;
  }
  .barcontent {
      border-style: solid;
      border-color: grey;
      padding: 3px;
      margin: 3px 3px 3px;
  }
}
</style>