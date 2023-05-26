<template>
    <div class="BlockTagsResearch">

        <button @click="print($event)">Принт</button>

        <!--    <select name="" id=""></select>-->
        <input type="text" v-model.number="maxhorizontal">
        <input type="text" v-model.number="maxvertical">
        <div
            class="container"
            :class="{large}"

            @click="large^=1"
            v-for="vertical in maxvertical">
<!--            <div v-for="horizontal in maxhorizontal">-->
<!--                {{ makeHSL(vertical / maxvertical, horizontal / maxhorizontal) }}-->
<!--            </div>-->
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
            maxvertical: 16,
            maxhorizontal: 16,
        }
    },
    computed: {
        backgroundcolors_size: function () {
            return this.backgroundcolors.length
        },
        bordercolors_size: function () {
            return this.backgroundcolors.length
        },
    },
    methods: {
        print(e) {
            console.log(e)
        },
        makeHSL: function(h, s) {
            return 'hsl(' + Math.round(h*360) + ', ' + Math.round(s*100) + '%, 50%)'
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

  .container {

    --circleSize: 80px;
    display: flex;

    justify-content: center;
    //justify-content: space-around;
    align-items: center;

    &.large {
      --circleSize: 180px;
    }
  }

  //.container div {
  //  background: beige;
  //  color: hsl(34, 78%, 91%);
  //  color: red;
  //  padding: 10px;
  //}
  .MyCircle {
    box-shadow:
        //112px 2px 10px -1px hsl(28, 100%, 57%), 12px 32px 10px -1px currentColor,
    inset 2px 2px 5px 0px hsl(240, 100%, 57%);
    flex: 0 0 auto;
  }

}
</style>