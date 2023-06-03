<template>
    <div class="MyBar"
    :style="{backgroundColor: barbackcolor, borderColor: barbordercolor}">
        <div class="bardescription">
            <slot name="title">Какой-то заголовок</slot>
        </div>
        <div class="barcontent">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyBar",
    components: {},
    props: ['barbackcolor', 'barbordercolor'],
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
  position: relative;
  .bardescription {
     background: ghostwhite;
     //border-style: solid;
     //border-color: grey;
     padding: 3px;
     margin: 3px 3px 3px;
  }
  .barcontent {
      height: 350px;
      //border-style: solid;
      //border-color: grey;
      //margin: 3px 3px 3px;
      //position: relative;
  }
}
</style>