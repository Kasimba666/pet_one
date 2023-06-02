<template>
  <div class="FlexResearch">
    <div class="grid">
        <MyBar barbackcolor='azure' barbordercolor='black'>
          <template v-slot:title><b>flex-flow: row wrap; justify-content: center; justify-content: space-between;</b></template>
                <div class="square-container ctr-1">
                    <div class="square type1" style="background-color: hsl(271,95%,53%)"></div>
                    <div class="square type1" style="background-color: hsl(271,95%,53%)"></div>
                    <div class="square type1" style="background-color: hsl(271,90%,63%)"></div>
                    <div class="square type1" style="background-color: hsl(271,85%,73%)"></div>
                    <div class="square type1" style="background-color: hsl(271,80%,83%)"></div>
                    <div class="square type1" style="background-color: hsl(271,75%,93%)"></div>
                    <div class="square type1" style="background-color: hsl(271,70%,83%)"></div>
                    <div class="square type1" style="background-color: hsl(271,65%,73%)"></div>
                    <div class="square type1" style="background-color: hsl(271,60%,63%)"></div>
                    <div class="square type1" style="background-color: hsl(271,55%,53%)"></div>
                </div>
        </MyBar>
        <MyBar barbackcolor='azure' barbordercolor='black'>
            <template v-slot:title><b>flex-flow: row wrap; justify-content: space-around;</b></template>
                <div class="square-container ctr-2">
                    <div class="square" style="background-color: hsl(91,100%,43%)"></div>
                    <div class="square" style="background-color: hsl(91,95%,53%)"></div>
                    <div class="square" style="background-color: hsl(91,90%,63%)"></div>
                    <div class="square" style="background-color: hsl(91,85%,73%)"></div>
                    <div class="square" style="background-color: hsl(91,80%,83%)"></div>
                    <div class="square" style="background-color: hsl(91,75%,93%)"></div>
                    <div class="square" style="background-color: hsl(91,70%,83%)"></div>
                    <div class="square" style="background-color: hsl(91,65%,73%)"></div>
                    <div class="square" style="background-color: hsl(91,60%,63%)"></div>
                    <div class="square" style="background-color: hsl(91,55%,53%)"></div>
                </div>
            </MyBar>

        <MyBar barbackcolor='azure' barbordercolor='black'>
            <template v-slot:title><b>div:first-child {align-self: center} div:last-child {align-self: flex-end}</b></template>
                    <div class="square-container ctr-3">
                    <div class="square" style="background-color: hsl(151,100%,43%)"></div>
                    <div class="square" style="background-color: hsl(151,95%,53%)"></div>
                    <div class="square" style="background-color: hsl(151,90%,63%)"></div>
                    <div class="square" style="background-color: hsl(151,85%,73%)"></div>
                    <div class="square" style="background-color: hsl(151,80%,83%)"></div>
                    <div class="square" style="background-color: hsl(151,75%,93%)"></div>
<!--                    <div class="square" style="background-color: hsl(151,70%,83%)"></div>-->
<!--                    <div class="square" style="background-color: hsl(151,65%,73%)"></div>-->
<!--                    <div class="square" style="background-color: hsl(151,60%,63%)"></div>-->
<!--                    <div class="square" style="background-color: hsl(151,55%,53%)"></div>-->
                </div>
        </MyBar>

        <MyBar barbackcolor='azure' barbordercolor='black'>
            <template v-slot:title><b>nth-child(even){ align-self: flex-end }</b></template>
                <div class="square-container ctr-4">
                    <div class="square" style="background-color: hsl(331,100%,43%)"></div>
                    <div class="square" style="background-color: hsl(331,95%,53%)"></div>
                    <div class="square" style="background-color: hsl(331,90%,63%)"></div>
                    <div class="square" style="background-color: hsl(331,85%,73%)"></div>
                    <div class="square" style="background-color: hsl(331,80%,83%)"></div>
                    <div class="square" style="background-color: hsl(331,75%,93%)"></div>
                    <div class="square" style="background-color: hsl(331,70%,83%)"></div>
                    <div class="square" style="background-color: hsl(331,65%,73%)"></div>
                    <div class="square" style="background-color: hsl(331,60%,63%)"></div>
                    <div class="square" style="background-color: hsl(331,55%,53%)"></div>
                </div>
        </MyBar>

    </div>

<!--      <div style="width: 20px; height: 20px; background-color: brown"></div>-->
  </div>
</template>

<script>
import MyBar from "@/components/common/MyBar.vue";

export default {
    name: "FlexResearch",
    components: {MyBar},
    props: [],
    data() {
        return {}
    },
    computed: {},
    methods: {},
    mounted() {
    },
}
</script>

<style lang="scss">
/****  FlexResearch  ****/
.FlexResearch {
  width: 100%;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    grid-template-rows: 400px 400px;
    row-gap: 20px;
  }
  .square-container {
      width: 100%;
      height: 100%;

    &.ctr-1 {
      display: flex ;
      flex-flow: row wrap;
      justify-content: center;
      justify-content: space-between;
    }
    &.ctr-2 {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
    &.ctr-3 {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      div:first-child {
        align-self: center;
      }
      div:last-child {
        align-self: flex-end;
      }
    }
    &.ctr-4 {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      div:nth-child(even){
        align-self: flex-end;
      }

    }
  }

  .square {
      width: 60px;
      height: 60px;
      border-style: solid;
      //border-color: black;
      border-radius: 10%;
  }

}
</style>