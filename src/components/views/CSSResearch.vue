<template>
    <div class="CSSResearch">
        <div class="grid">

            <MyBar barbackcolor='azure' barbordercolor='black'>
                <template v-slot:title><b>Меню</b></template>
                <div class="block">
                    <div class="top">
                        <HorizontalMenu
                                :menuitem="petMenu"
                                @currentItem="showCurrentItemTitle"/>
                    </div>
                    <div class="middle"></div>
                    <div class="bottom">
                        {{ currentItemTitle }}
                    </div>
                </div>
            </MyBar>

            <MyBar barbackcolor='azure' barbordercolor='black'>
                <template v-slot:title><b>Два</b></template>
                <div class="collection-images">
                    <div class="my-image" :class="`image-${i}`" v-for="i of 4"/>

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
import HorizontalMenu from "@/components/common/HorizontalMenu.vue";
import {treeItems} from "@/data/data.js";

export default {
    name: "CSSResearch",
    components: {MyBar, HorizontalMenu},
    props: [],
    data() {
        return {
            petMenu: treeItems,
            currentItemTitle: '',
        }
    },
    computed: {},
    methods: {
        showCurrentItemTitle: function (v) {
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

    & > * {
      z-index: 0;
    }

    & > *:hover {
      z-index: 10;
    }
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

  .collection-images {

    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    //justify-content: center;
    gap: 10px;

  }

  .my-image {
    flex: 1 1 auto;
    width: 150px;
    height: 300px;
    min-width: 20px;
    min-height: 60px;
    border-style: solid;
    border-color: gray;
    background-size: contain;
    background-position: center;
      background-repeat: no-repeat;


    &.image-1 {
      background-image: url("@/assets/img/aldermysh_tombstone.png");
      //background-image: url("/img/aldermysh_tombstone.png");
    }

    &.image-2 {
      background-image: url("@/assets/img/nizhmeteski_tombstone_2.png");
    }

    &.image-3 {
      background-image: url("@/assets/img/tuktamysh_tombstone_1.png");
    }

    &.image-4 {
      background-image: url("@/assets/img/tuktamysh_tombstone_2.png");
    }
  }

}
</style>