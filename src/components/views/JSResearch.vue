<template>
  <div class="JSResearch">
    <div class="grid">
      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Один</b></template>
          {{ numbers}}<br>
          {{ mappedNums}}<br>
          {{reducedNums}}<br>
          {{ mapNums(numbers) }}<br>
          {{ reduceNums(numbers) }}<br>
          {{ reduceNums(mapNums(numbers)) }} <br>
          {{ unsortedNums }} <br>
          {{ sortNums(unsortedNums) }}
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
    return {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
    computed: {
        mappedNums() {
            return this.numbers.map((v, i, a) => {
                return v + (a[i - 1] || 1);
            });
        },
        reducedNums() {
            return this.numbers.reduce((s, v, i, a) => {
                return s + v;
            }, 0);
        },

        unsortedNums() {
            let arr = [];
            for (let i = 0; i < 10; i++) {
                arr.push(Math.round(Math.random()*100));
            };
            return arr;
        },

    },
  methods: {
      mapNums: function(arr) {
          return arr.map((v, i, a) => {
              return v + (a[i - 1] || 1)
          })
      },
      reduceNums: function(arr) {
          return arr.reduce((s, v, i, a)=>{
              return s + v;
          }, 0);
      },
      sortNums: function(arr) {
        return arr.sort((a,b)=>{return a-b})
      },
  },
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

      justify-content: space-between;
    }

    &.ctr-2 {
      display: flex;
      flex-flow: row wrap;
      gap: 20px 10px;
      justify-content: space-around;
      align-items: start;
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
