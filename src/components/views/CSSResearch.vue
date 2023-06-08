<template>
    <div class="CSSResearch">
        <div class="grid">
            <MyBar barbackcolor='azure' barbordercolor='black'>
                <template v-slot:title><b>Один</b></template>
              <div class="block-1">
                <div class="top">
                  <button class="btn-primary btn-main">Кнопка</button>
                  <div class="menu">
                    <button class="btn-menu">Кнопка</button>
                    <button class="btn-menu">Кнопка</button>
                    <button class="btn-menu">Кнопка</button>
                  </div>
                </div>
                <div class="content">

                </div>
                <div class="bottom"></div>
              </div>

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
    name: "CSSResearch",
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
/****  CSSResearch  ****/
.CSSResearch {
    width: 100%;
    height: auto;

  .grid {
    position: relative;
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  .block-1 {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: lightyellow;
    display: flex;
    flex-flow: column nowrap;
    gap: 2px;

  }

  .top {
    height: 30px;
    border-style: solid;
    border-color: darkgray;
    position: relative;

  }

  .content {
    flex: 1 1 auto;
    min-height: 100px;
    border-style: solid;
    border-color: darkgray;
  }

  .bottom {
    height: 30px;
    border-style: solid;
    border-color: darkgray;
  }

  .btn-main {
    position: relative;
    background-color: white;
    height: 25px;
    vertical-align: middle;


  }

  .btn-menu {

  }

  .menu {
    position: absolute;
    top: 20px;
    left: 10px;
    width: auto;
    height: auto;
    background-color: powderblue;
    display: none;
    flex-flow: column;
    justify-content: left;
  }

  .btn-main:hover {
    background-color: chartreuse;
  }

  .top:hover .menu {
    display: flex;
  }

}
</style>