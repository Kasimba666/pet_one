<template>
    <div class="InlineTagsResearch">
        <h2>Inline Tags Research</h2>

        <button class="my-btn" @click="inc(5)" >Increment</button>
        <button class="my-btn" @click="inc(-3)" >Decrement</button>
        <div class="part">
            <span class="one">{{ count }}</span>
        </div>
        <br>
<!--        <button class="my-btn">показать значения</button>-->
<!--        <button class="my-btn">скрыть значения</button>-->

<!--        <div class="colormassive" v-for="onecolor in somecolors1">-->
<!--            <div>{{onecolor.name}}</div>-->
<!--        </div>-->
<!--        <div class="colormassive">-->
<!--            <div>{{somecolors2}}</div>-->

<!--        </div>-->


    </div>
</template>

<script>
export default {
    name: "InlineTagsResearch",
    components: {},
    props: ['msg'],
    data() {
        return {
            count: 0,
            somecolors1: [
                {name: 'cyan'},
                {name: 'magenta'},
                {name: 'yellow'},
                {name: 'black'}
            ],
            somecolors2: [
                'cyan',
                'magenta',
                'yellow',
                'black'
            ],

        }
    },
    computed: {

    },
    methods: {
        inc(d = 1) {
            this.count += d;
        }
    },
    mounted() {
    },
}
</script>

<style lang="scss">
/****  InlineTagsResearch  ****/
.InlineTagsResearch {
  width: 100%;
  height: auto;

  .my-btn {
    margin: 5px 15px 20px;
    background-color: floralwhite;
  }
  .my-btn:hover {
    background-color: cornflowerblue;
  }
  .colormassive {
    color: black;
  }

}
</style>