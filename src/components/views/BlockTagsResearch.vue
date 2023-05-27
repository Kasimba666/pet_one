<template>
  <div class="BlockTagsResearch">

    <!--        <button @click="print($event)">Принт</button>-->

    <div class="inputblock">
      <input type="text" v-model.number="maxhorizontal">
      x
      <input type="text" v-model.number="maxvertical">
      <label> = {{ fieldsize }}</label>
    </div>

    <div
        class="container"
        :class="{large}"

        @click="large^=1"
        v-for="vertical in maxvertical">

      <MyCircle
          :mybackcolor="makeHSL(vertical / maxvertical, horizontal / maxhorizontal)"
          mybordercolor='black'
          v-for="horizontal in maxhorizontal">

      </MyCircle>
    </div>
  </div>


</template>

<script>
import MyCircle from "@/components/common/MyCircle.vue";

export default {
  name: "BlockTagsResearch",
  components: {MyCircle},
  props: [],
  data() {
    return {
      counter: 10,
      large: false,
      vertical: 1,
      horizontal: 1,
      maxvertical: 8,
      maxhorizontal: 8,
    }
  },
  computed: {
    fieldsize: function () {
      return this.maxvertical * this.maxhorizontal
    },
  },
    methods: {
      print(e) {
        console.log(e)
      },
      makeHSL: function (h, s) {
        return 'hsl(' + Math.round(h * 360) + ', ' + Math.round(s * 100) + '%, 50%)'
      },
    },
    mounted() {
    },
  }
</script>

<style lang="scss">
/****  BlockTagsResearch  ****/
.BlockTagsResearch {
  width: 100%;
  height: auto;
  position: relative;

  home {
    position: relative;

  }
  .container {
    --circleSize: 60px;
    display: flex;
    justify-content: center;
    //justify-content: space-around;
    align-items: center;
    &.large {
      --circleSize: 100px;
    }
  }
  //.container div {
  //  background: beige;
  //  color: hsl(34, 78%, 91%);
  //  color: red;
  //  padding: 10px;
  //}
  .MyCircle {
    box-shadow: //112px 2px 10px -1px hsl(28, 100%, 57%), 12px 32px 10px -1px currentColor,
        inset 2px 2px 5px 0px hsl(240, 100%, 57%);
    flex: 0 0 auto;
  }

  .inputblock {
    //    opacity: 50%;
    position: relative;
    padding: 8px 8px 8px;
    background: azure;
  }
  .inputblock input {
    width: 20px;
    background: azure;
  }
  .inputblock input:hover {
    background-color: white;
  }

}
</style>