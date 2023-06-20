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
        <div class="collection-images">
        <img class="my-image image-1" :src="imgsrc" v-for="imgsrc in sourceImgThombstones"/>
      </div>
      </MyBar>

      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Три</b></template>
        <div class="form">
          <div id="dog_name" class="properties">

          </div>
          <div id="dog_age" class="properties"></div>
          <div id="dog_size" class="properties"></div>
          <div id="dog_color" class="properties"></div>
          <div id="dog_breed" class="properties"></div>
          <div id="dog_result" class="result"></div>

        </div>
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
      sourceImgThombstones: [
          require('@/assets/img/aldermysh_tombstone.png'),
          require('@/assets/img/nizhmeteski_tombstone_2.png'),
          require('@/assets/img/tuktamysh_tombstone_1.png'),
          require('@/assets/img/tuktamysh_tombstone_2.png'),
      ],
      dog: {name, age, weight, color, breed},
      type_breed: ['unknown', 'pinscher', 'pomeranian spitz', 'fox'],
      type_size: ['xs', 's', 'm', 'l', 'xl'],
      type_color: ['gray', 'white', 'brown', 'mixed', 'transparent'],
      type_hair: ['short', 'middle', 'long'],
      dog_pride: [],
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
    background-color: lightyellow;
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
    background-color: lightyellow;
  }

  .collection-background-images {

    position: relative;
    height: 50%;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    gap: 10px;
  }

  .my-background-image {
    flex: 1 1 auto;
    width: 100px;
    height: 200px;
    min-width: 20px;
    min-height: 60px;
    border-style: solid;
    border-color: gray;
    border-radius: 20px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    align-self: center;

    &.background-image-1 {
      background-image: url("@/assets/img/aldermysh_tombstone.png");
      &:hover {
        box-shadow: 0 0 10px 3px rgba(0, 140, 186, 0.5);
      }
    }

    &.background-image-2 {
      background-image: url("@/assets/img/nizhmeteski_tombstone_2.png");
      &:hover {
        box-shadow: 0 0 10px 3px rgba(0, 140, 186, 0.5);
      }
    }

    &.background-image-3 {
      background-image: url("@/assets/img/tuktamysh_tombstone_1.png");
      &:hover {
        box-shadow: 0 0 10px 3px rgba(0, 140, 186, 0.5);
      }
    }

    &.background-image-4 {
      background-image: url("@/assets/img/tuktamysh_tombstone_2.png");
      &:hover {
        box-shadow: 0 0 10px 3px rgba(0, 140, 186, 0.5);
      }
    }
  }

  .collection-images {
    position: relative;
    height: 50%;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    //justify-content: center;
    gap: 10px;

  }

  .my-image {
    flex: 0 0 auto;
    width: 100px;
    height: 200px;
    min-width: 20px;
    min-height: 60px;
    border-style: solid;
    border-color: gray;
    border-radius: 20px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;

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
  .form {
    height: 100%;
    display: flex;
    flex-flow: column;

    .properties {
      border-style: solid;
      border-color: gray;
    }
  }

}
</style>