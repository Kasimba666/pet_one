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
            <div class="card">
              <div class="property">
                <div class="left-part">
                  <label for="dog_name">Имя: </label>
                </div>
                <div class="right-part">
                  <input id="dog_name"
                         v-model="dog.name"
                         placeholder="введите имя собаки">
                </div>
              </div>
              <div class="property">
                <div class="left-part">
                  <label for="dog_password">Пароль: </label>
                </div>
                <div class="right-part">
                  <input id="dog_password"
                         v-model="dog.password"
                         type="password"
                         placeholder="введите пароль от собаки">
                </div>
              </div>

              <div class="property">
                <div class="left-part">
                  <label for="dog_age">Возраст: </label>
                </div>
                <div class="right-part">
                  <input id="dog_age"
                         style="width: 100px"
                         v-model.number="dog.age"
                         type="range"
                         min="0" max="25">
                  {{ dog.age }}
                </div>
              </div>

              <div class="property">
                <div class="left-part">Пол:</div>
                <div class="right-part type-in-columns">
                  <div v-for="sex in type_sex">
                    <input :id="sex" :value="sex"
                           type="radio" v-model="dog.sex">
                    <label for="sex">{{ sex }}</label>
                  </div>
                </div>
              </div>

              <div class="property">
                <div class="left-part">
                  <label for="dog_size">Размер: </label>
                </div>
                <div class="right-part">
                  <select id="dog_size" v-model="dog.size">
                    <option v-for="size in type_size" v-bind:value="size">
                      {{ size }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="property">
                <div class="left-part">
                  <label for="dog_breed">Порода:</label>
                </div>
                <div class="right-part">
                  <select id="dog_breed" v-model="dog.breed">
                    <option v-for="breed in type_breed" v-bind:value="breed">
                      {{ breed }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="property">
                <div class="left-part">Цвет:
                </div>
                <div class="right-part type-in-columns">
                  <div v-for="color in type_color">
                    <input :id="color" :value="color" type="radio" v-model="dog.color">
                    <label for="color">{{ color }}</label>
                  </div>
                </div>
              </div>

              <div class="property">
                <div class="left-part">
                  <label for="dog_have_tail">Имеется хвост: </label>
                </div>
                <div class="right-part">
                  <input id="dog_have_tail"
                         type="checkbox"
                         v-model="dog.have_tail">
                </div>
              </div>
              <div class="property">
                <div class="left-part">
                  <label for="special_sign">Особые приметы: </label>
                </div>
                <div class="right-part">
                <textarea
                    id="special_sign"
                    v-model.lazy="dog.special_signs"
                    placeholder="особые приметы">
                 </textarea>
                </div>
              </div>
            </div>
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
        {{ dog }}
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
      inputed_value: 'nothing',
      type_sex: ['unknown', 'male', 'female', 'other'],
      type_breed: ['unknown', 'pinscher', 'pomeranian spitz', 'fox'],
      type_size: ['unknown', 'xs', 's', 'm', 'l', 'xl'],
      type_color: ['unknown', 'gray', 'white', 'brown', 'black', 'transparent'],
      type_hair: ['unknown', 'short', 'middle', 'long'],
      dog: {
        name: '',
        password: '',
        sex: 'unknown',
        age: '8',
        size: 'unknown',
        color: 'unknown',
        breed: 'unknown',
        have_tail: '',
        special_signs: ''
      },


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

  .card {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;

    .property {
      //padding: 5px;
      margin: 5px 5px;
      width: 100%;
      display: flex;
      flex-flow: row;
      //border-style: solid;
      //border-color: gray

      .left-part {
        display: inline-block;
        text-align: right;
        width: 40%;
        padding: 0px 5px;
        //border-style: solid;
        //border-color: gray;
      }

      .right-part {
        display: inline-block;
        text-align: left;
        width: 60%;
        padding: 0px 5px;
        //border-style: solid;
        //border-color: gray;
      }


      &.type-in-columns {
        display: flex;
        flex-flow: column;
      }
    }


  }

}
</style>