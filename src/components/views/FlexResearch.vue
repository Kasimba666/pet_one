<template>
  <div class="FlexResearch">
    <div class="grid">
      <MyBar
          barbackcolor='azure'
          barbordercolor='black'
          bartitle='Текст 1'>
      </MyBar>
      <MyBar
          barbackcolor='azure'
          barbordercolor='black'
          bartitle='Текст 2'>
      </MyBar>
      <MyBar
          barbackcolor='azure'
          barbordercolor='black'
          bartitle='Текст 3'>
      </MyBar>
      <MyBar
          barbackcolor='azure'
          barbordercolor='black'
          bartitle='Текст 4'>
      </MyBar>
    </div>

    <div class="grid">
      <div class="bar">
        <div class="bardescription">Текст 1</div>
        <div class="barcontent">
        </div>
      </div>
      <div class="bar">
        <div class="bardescription">Текст 2</div>
        <div class="barcontent">
        </div>
      </div>
      <div class="bar">
        <div class="bardescription">Текст 3</div>
        <div class="barcontent">
        </div>
      </div>
      <div class="bar">
        <div class="bardescription">Текст 4</div>
        <div class="barcontent">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import MyBar from "@/components/common/MyBar.vue";
import MyCircle from "@/components/common/MyCircle.vue";

export default {
    name: "FlexResearch",
    components: {MyCircle, MyBar},
    props: [],
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
/****  FlexResearch  ****/
.FlexResearch {
  width: 100%;
  .grid {
    display: grid;
    grid-template-columns: 400px 400px;
    column-gap: 20px;
    grid-template-rows: 400px 400px;
    row-gap: 20px;

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
      height: 350px;
      margin: 3px 3px 3px;
    }
  }
}
</style>