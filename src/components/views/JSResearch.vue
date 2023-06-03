<template>
  <div class="JSResearch">
    <div class="grid">
      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Один</b></template>

      </MyBar>
      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Два</b></template>

      </MyBar>

      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Три</b></template>

      </MyBar>

      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Четыре</b></template>

      </MyBar>

    </div>
  </div>

</template>

<script>
import MyBar from "@/components/common/MyBar.vue";

export default {
  name: 'JSResearch',
  components: {MyBar},
  props: { },
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
.JSResearch {
  width: 100%;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  .square-container {
    width: 100%;
    height: 100%;

    &.ctr-1 {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      justify-content: space-between;
    }

    &.ctr-2 {
      display: flex;
      flex-flow: row wrap;
      gap: 20px 10px;
      justify-content: space-around;
      align-items: start4;
      align-content: center;

      div:nth-child(even) {
        height: 20px;
      }
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

      div:nth-child(even) {
        align-self: flex-end;
      }

    }
  }
  .square {
    flex: 1 1 auto;
    //width: 45px;
    min-width: 40px;
    max-width: 60px;
    height: 60px;
    border-style: solid;
    //border-color: black;
    border-radius: 10%;
  }
}
</style>
