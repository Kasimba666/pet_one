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
          <div class="middle">
              <template v-for="imgsrc in sourceImgThombstones">
                  <img style="height: 500px; width: 50px" :src="imgsrc"/>
              </template>
          </div>
          <div class="bottom">
            {{ currentItemTitle }}
          </div>
        </div>
      </MyBar>

      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Два</b></template>
        <div class="collection-background-images">
          <div class="my-background-image" :class="`background-image-${i}`" v-for="i of 4"/>

        </div>
      </MyBar>

      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Три</b></template>
        <img src="@/assets/img/aldermysh_6000.jpg" class="single-image"/>
      </MyBar>

      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Четыре</b></template>
        <div class="collection-images">
          <img :src="`${fullpathThombstones}`" class="my-image image-1"/>
<!--          <img src="@/assets/img/aldermysh_tombstone.png" class="my-image image-1"/>-->
          <img src="@/assets/img/nizhmeteski_tombstone_2.png" class="my-image"/>
          <img src="@/assets/img/tuktamysh_tombstone_1.png" class="my-image"/>
          <img src="/img/tuktamysh_tombstone_2.png" class="my-image"/>
        </div>
      </MyBar>

    </div>
  </div>
</template>

<script>
import MyBar from "@/components/common/MyBar.vue";
import HorizontalMenu from "@/components/common/HorizontalMenu.vue";
import {treeItems} from "@/data/data.js";
const pathImg = '@/assets/img/';
export default {
  name: "CSSResearch",
  components: {MyBar, HorizontalMenu},
  props: [],
  data() {
    return {
      petMenu: treeItems,
      currentItemTitle: '',
      // pathImg: '@/assets/img/',
      fullpathThombstones: require('@/assets/img/tuktamysh_tombstone_2.png'),
      // sourceImgThombstones: [
      //     'aldermysh_tombstone.png', 'nizhmeteski_tombstone_2.png', 'tuktamysh_tombstone_1.png', 'tuktamysh_tombstone_2.png']
      //     .map(v=>require(pathImg+v)),
      sourceImgThombstones: [
          require('@/assets/img/aldermysh_tombstone.png'),
          require('@/assets/img/nizhmeteski_tombstone_2.png'),
          require('@/assets/img/tuktamysh_tombstone_1.png'),
          require('@/assets/img/tuktamysh_tombstone_2.png'),
      ],
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

  .collection-background-images {

    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    //justify-content: center;
    gap: 10px;

  }

  .my-background-image {
    flex: 0 1 auto;
    width: 150px;
    height: 300px;
    min-width: 20px;
    min-height: 60px;
    border-style: solid;
    border-color: gray;
    border-radius: 20px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    &.background-image-1 {
      background-image: url("@/assets/img/aldermysh_tombstone.png");
      //background-image: url("/img/aldermysh_tombstone.png");
    }

    &.background-image-2 {
      background-image: url("@/assets/img/nizhmeteski_tombstone_2.png");
    }

    &.background-image-3 {
      background-image: url("@/assets/img/tuktamysh_tombstone_1.png");
    }

    &.background-image-4 {
      background-image: url("@/assets/img/tuktamysh_tombstone_2.png");
    }
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
    flex: 0 1 auto;
    width: 150px;
    height: 300px;
    min-width: 20px;
    min-height: 60px;
    border-style: solid;
    border-color: gray;
    border-radius: 20px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    &.image-1 {
      &:hover {
        box-shadow: 0 0 10px 3px rgba(0, 140, 186, 0.5);
      }
    }

    &.image-2 {

    }

    &.image-3 {

    }

    &.image-4 {

    }
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #008CBA;
  }

  .single-image {
    max-width: 100%;
    height: auto;
    opacity: 90%;
    &:hover {
    opacity: 100%;
  }
  }
}
</style>