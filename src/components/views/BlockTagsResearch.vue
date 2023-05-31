<template>
  <div class="BlockTagsResearch">
    <!--        <button @click="print($event)">Принт</button>-->
    <div class="inputblock-color-bar">
      <input type="text" v-model.number="maxhorizontal">
      x
      <input type="text" v-model.number="maxvertical">
      <label> = {{ fieldsize }}</label>
    </div>
    <div
        class="container-color-bar"
        :class="{large}"
        @click="large^=1"
        v-for="vertical in maxvertical">
      <MyCircle
          :mybackcolor="makeHSL(vertical / maxvertical, horizontal / maxhorizontal)"
          mybordercolor='black'
          :mysize="calcSize(horizontal, vertical)"
          myleft='0px'
          mytop='0px'
          myposition='relative'

          v-for="horizontal in maxhorizontal">
      </MyCircle>
    </div>

    <div class="inputblock-color-circle">
      <label>Количество кругов: </label> <input type="text" v-model.number="circlesquantity">
    </div>

    <div class="container-color-circle">
      <MyCircle
          :mybackcolor="makeHSL((circlenumber - 1)/circlesquantity, 1)"
          mybordercolor='black'
          :mysize="( mainsegment * qsize)+'px'"
          :myleft="NumberToStrWithPX(XfromPolar(maincircleradius, (theta * (circlenumber - 1))) + Math.round(windowsize/2 - mainsegment/2))"
          :mytop="NumberToStrWithPX(YfromPolar(maincircleradius, (theta * (circlenumber - 1))) + Math.round(windowsize/2 - mainsegment/2))"
          myposition='absolute'
          v-for="circlenumber in circlesquantity"
      >
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
      vertical: 1, horizontal: 1,
      maxvertical: 3, maxhorizontal: 3,
      minsize: 20, maxsize: 60,

      // circlenumber: 1,
      circlesquantity: 6,
      qsize: 0.9, //уменьшение размера цветового круга, чтобы не касаться соседей
      windowsize: 500,//должно быть согласовано с div
      X: 0, Y: 0,

    }
  },
  computed: {
    fieldsize: function () {
      return this.maxvertical * this.maxhorizontal
    },

    theta: function () {
      return (2 * Math.PI/this.circlesquantity)
    },
    maincircleradius: function () {
      return Math.round(this.windowsize / (2 * (1 + Math.sin(this.theta /2))))
    },

    mainsegment: function () {
      return Math.round(2 * this.maincircleradius * Math.sin(this.theta/2))
    },

  },
  methods: {
    print(e) {
      console.log(e)
    },
    makeHSL: function (h, s) {
      return 'hsl(' + Math.round(h * 360) + ', ' + Math.round(s * 100) + '%, 50%)'
    },
    calcSize: function (x, y) {
      let resx = 0;
      let resy = 0;
      let delta = this.maxsize - this.minsize;
      let averagex = this.maxhorizontal / 2;
      let averagey = this.maxvertical / 2;

      if (x < averagex) {
        resx = Math.round(this.minsize + delta * ((x - 0.5) / this.maxhorizontal));
      } else {
        resx = Math.round(this.maxsize - delta * ((x - 0.5) / this.maxhorizontal));
      }
      if (y < averagey) {
        resy = Math.round(this.minsize + delta * ((y - 0.5) / this.maxvertical));
      } else {
        resy = Math.round(this.maxsize - delta * ((y - 0.5) / this.maxvertical));
      }
      // return Math.min(resx, resy) + 'px'
      return Math.round((resx + resy) / 2) + 'px'
    },

    XfromPolar: function(radius, angle) {
      return Math.round(radius * Math.sin(angle))
    },
    YfromPolar: function(radius, angle) {
      return Math.round(radius * Math.cos(angle))
    },
    NumberToStrWithPX: function (number) {
      return (number) + 'px'
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
  //position: relative;
  .container-color-bar {
    --circleSize: 60px;
    display: flex;
    justify-content: center;
    //justify-content: space-around;
    align-items: center;
    &.large {
      --circleSize: 100px;
    }
  }
  .MyCircle {
    //box-shadow: 112px 2px 10px -1px hsl(28, 100%, 57%), 12px 32px 10px -1px currentColor,
    //    inset 2px 2px 5px 0px hsl(240, 100%, 57%);
    flex: 0 0 auto;
  }
  .inputblock-color-bar {
    //    opacity: 50%;
    position: relative;
    padding: 8px 8px 8px;
    background: azure;
  }
  .inputblock-color-bar input {
    width: 20px;
    background: azure;
  }
  .inputblock-color-bar input:hover {
    background-color: white;
  }

  .container-color-circle {
    position: relative;
    margin: auto;
    height: 500px;
    width: 500px;
    background-color: white;

  }
  .inputblock-color-circle {
    position: relative;
    padding: 8px 8px 8px;
    background: azure;
  }
  .inputblock-color-circle input {
    width: 20px;
    background: azure;
  }
  .inputblock-color-circle input:hover {
    background-color: white;
  }

}
</style>