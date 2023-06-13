<template>
  <div class="CSSResearch">
    <div class="grid">
      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Один</b></template>
        <div class="block">
          <div class="top">
            <HorMenu :menuItems="petMenu.children" @currentItem="showCurrentItemTitle"/>
          </div>
          <div class="middle"></div>
          <div class="bottom">
            {{ currentItemTitle }}
          </div>
        </div>
      </MyBar>

      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Два</b></template>
        <div class="block">
          <div class="top">
            <simpleHorMenu :menuitem="petMenu" @currentItem="showCurrentItemTitle"/>
          </div>
          <div class="middle"></div>
          <div class="bottom">
            {{ currentItemTitle }}
          </div>
        </div>
      </MyBar>

      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Три</b></template>
      </MyBar>

      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Четыре</b></template>

      </MyBar>

    </div>
  </div>
</template>

<script>
import MyBar from "@/components/common/MyBar.vue";
import HorMenu from "@/components/common/HorMenu.vue";
import simpleHorMenu from "@/components/common/simpleHorMenu.vue";
import {treeItems} from "@/data/data.js";

export default {
  name: "CSSResearch",
  components: {MyBar, HorMenu, simpleHorMenu},
  props: [],
  data() {
    return {
      petMenu: treeItems,
      currentItemTitle: '',
    }
  },
  computed: {},
  methods: {
    showCurrentItemTitle: function(v) {
     return this.currentItemTitle = v.title
    },
  },
  mounted() {
  },
}
</script>

<style lang="scss">
/****  CSSResearch  ****/
.CSSResearch {
  width: 100%;
  height: auto;

  .grid {
    position: relative;
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  .block {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: lightyellow;
    display: flex;
    flex-flow: column nowrap;
    gap: 2px;

  }

  .top {
    position: relative;
    height: 20px;
    border-style: solid;
    border-color: darkgray;
    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
  }

  .middle {
    flex: 1 1 auto;
    min-height: 200px;
    border-style: solid;
    border-color: darkgray;
  }

  .bottom {
    height: 20px;
    border-style: solid;
    border-color: darkgray;
  }

}
</style>