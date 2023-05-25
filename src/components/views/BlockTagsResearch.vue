<template>
    <div class="BlockTagsResearch">

        <div class="container" :class="{large}" @click="largeCircle^=1">
            <MyCircle mybackcolor='olive' mybordercolor='black'></MyCircle>
            <MyCircle mybackcolor='white' mybordercolor='black'></MyCircle>
            <MyCircle mybackcolor='cyan' mybordercolor='black'></MyCircle>
            <MyCircle mybackcolor='magenta' mybordercolor='black'></MyCircle>
            <MyCircle mybackcolor='yellow' mybordercolor='black'></MyCircle>

        </div>

        <!--    <select name="" id=""></select>-->

        <!--    <div class="container">-->
        <!--      <div v-for="backgroundcolor in backgroundcolors">-->
        <!--        <div v-for="bordercolor in bordercolors">-->
        <!--          <MyCircle-->
        <!--              :mybackcolor="backgroundcolor.name"-->
        <!--              :mybordercolor="bordercolor.name">-->
        <!--          </MyCircle>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--    </div>-->
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
            backgroundcolors: [
                {name: 'red'},
                {name: 'green'},
                {name: 'blue'},
                {name: 'white'}
            ],
            bordercolors: [
                {name: 'cyan'},
                {name: 'magenta'},
                {name: 'yellow'},
                {name: 'black'}
            ],
            counter: 10,
            large: false,
        }
    },
    computed: {
        backgroundcolors_size: function () {
            return this.backgroundcolors.length
        },
        bordercolors_size: function () {
            return this.backgroundcolors.length
        }
    },
    methods: {
        dosomething() {

        }
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
    height: 300px;

    justify-content: center;
    justify-content: space-around;
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
    box-shadow: 112px 2px 10px -1px hsl(28, 100%, 57%), 12px 32px 10px -1px currentColor,
    inset 2px 2px 5px 0px hsl(240, 100%, 57%);
  }

}
</style>