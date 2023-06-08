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
  width: auto;
  height: auto;
  border-style: solid;
  position: relative;
  display: flex;
  flex-flow: column;

  .bardescription {
    height: 20px;
    background: ghostwhite;
    padding: 3px;
    margin: 3px 3px 3px;
  }

  .barcontent {
    //height: auto;
    //min-height: 200px;
    flex: 1 1 auto;

  }
}
</style>