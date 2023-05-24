<template>
    <div class="BlockTagsResearch">
        <h1 class="paragraph">Block Tags Research</h1>
        <div>
            <div class="divrow" v-for="backgroundcolor in backgroundcolors">
                <div class="divcolumn" v-for="bordercolor in bordercolors">
                    <MyCircle
                        :mybackcolor="backgroundcolor.name"
                        :mybordercolor="bordercolor.name">
                    </MyCircle>
                </div>
            </div>
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
    computed: {},
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
  .paragraph {
    color: blueviolet;
  }
  .circles {
    height: auto;
    margin: 20px 5px;
      display: inline-block;
      justify-content: center;
  }
  table, tr, td {
      border: 1px solid black;
  }
  .divrow {
      display: flex;
      //display: inline-block;
  }
  .divcolumn {
  }
}
</style>