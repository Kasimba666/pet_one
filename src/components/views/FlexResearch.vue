<template>
  <div class="FlexResearch">
    <div class="grid">
        <MyBar barbackcolor='azure' barbordercolor='black'>
            бля

            <template v-slot:title><b>Один</b></template>
                <div class="square-container ctr-1">
                    <div class="square type1" style="background-color: hsl(271,100%,43%)"></div>
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
            <template v-slot:title><b>Два</b></template>
            <template v-slot:setofsquares>
                <div class="square-container">
                    <div class="square type2"  style="background-color: hsl(91,100%,43%)"></div>
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
            </template>
        </MyBar>

        <MyBar barbackcolor='azure' barbordercolor='black'>
            <template v-slot:title><b>Три</b></template>
            <template v-slot:setofsquares>
                <div class="square-container">
                    <div class="square type3" style="background-color: hsl(151,100%,43%)"></div>
                    <div class="square" style="background-color: hsl(151,95%,53%)"></div>
                    <div class="square" style="background-color: hsl(151,90%,63%)"></div>
                    <div class="square" style="background-color: hsl(151,85%,73%)"></div>
                    <div class="square" style="background-color: hsl(151,80%,83%)"></div>
                    <div class="square" style="background-color: hsl(151,75%,93%)"></div>
                    <div class="square" style="background-color: hsl(151,70%,83%)"></div>
                    <div class="square" style="background-color: hsl(151,65%,73%)"></div>
                    <div class="square" style="background-color: hsl(151,60%,63%)"></div>
                    <div class="square" style="background-color: hsl(151,55%,53%)"></div>
                </div>
            </template>
        </MyBar>

        <MyBar barbackcolor='azure' barbordercolor='black'>
            <template v-slot:title><b>Четыре</b></template>
            <template v-slot:setofsquares>
                <div class="square-container">
                    <div class="square type4" style="background-color: hsl(331,100%,43%)"></div>
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
            </template>
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
      //border-style: solid;
      //border-color: gray;
      //border-radius: 10px;
      //margin: 3px 3px 3px;

  }
  .ctr-1 {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      justify-content: space-between;
  }
  .square {
      width: 30px;
      height: 30px;
      border-style: solid;
      //border-color: black;
      border-radius: 10%;

      &.type1 {
          border-color: hsl(271,100%,10%);
      }

      &.type2 {
          border-color: green;
      }

      &.type3 {
          border-color: blue;
      }

      &.type4 {
          border-color: black;
      }
  }

}
</style>