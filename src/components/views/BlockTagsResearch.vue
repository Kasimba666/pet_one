<template>
  <div class="BlockTagsResearch">
    <div class="container">
      <div>
        <MyCircle mybackcolor='blue' mybordercolor='black'></MyCircle>
      </div>
      <div>
        <MyCircle mybackcolor='white' mybordercolor='black'></MyCircle>
      </div>
      <div>
        <MyCircle mybackcolor='cyan' mybordercolor='black'></MyCircle>
      </div>
      <div>
        <MyCircle mybackcolor='magenta' mybordercolor='black'></MyCircle>
      </div>
      <div>
        <MyCircle mybackcolor='yellow' smybordercolor='black'></MyCircle>
      </div>
    </div>

    <div class="container">
      <div v-for="backgroundcolor in backgroundcolors">
        <div v-for="bordercolor in bordercolors">
          <MyCircle
              :mybackcolor="backgroundcolor.name"
              :mybordercolor="bordercolor.name">
          </MyCircle>
        </div>
      </div>
    </div>
<!--          <MyCircle :mybackcolor="backgroundcolors[1].name" :mybordercolor="bordercolors[2].name")></MyCircle>-->

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
  methods: {},
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
    display: flex;
    height: 300px;

    justify-content: center;
    justify-content: space-around;
    align-items: center;

  }
  .container div {
    background: beige;
    color: antiquewhite;
    padding: 10px;
  }
}
</style>