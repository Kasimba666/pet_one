<template>
    <div class="CSSResearch">
        <div class="grid">
            <MyBar barbackcolor='azure' barbordercolor='black'>
              <template v-slot:title><b>Один</b></template>
              <div class="block">
                <div class="top">
                  <button class="top-menu-btn btn-primary" v-for="menubtn in menubtns">
                    {{menubtn.title}}
                    <div class="menu-dropdown" v-if="menubtn.children.length" >
                      <button class="btn-menu" v-for="childmenubtn in menubtn.children"
                      @click="menuClick(childmenubtn)">
                        {{childmenubtn.title}}
                      </button>
                    </div>
                  </button>

                </div>
                <div class="middle"></div>
                <div class="bottom"></div>
              </div>
            </MyBar>
            <MyBar barbackcolor='azure' barbordercolor='black'>
                <template v-slot:title><b>Два</b></template>
            </MyBar>

            <MyBar barbackcolor='azure' barbordercolor='black'>
                <template v-slot:title><b>Три</b></template>
                <div class="block">
                    <div class="top">
                      <HorMenu :menuItems="menubtns">

                      </HorMenu>
                    </div>
                    <div class="middle"></div>
                    <div class="bottom"></div>
                </div>
            </MyBar>

            <MyBar barbackcolor='azure' barbordercolor='black'>
                <template v-slot:title><b>Четыре</b></template>

            </MyBar>

        </div>
    </div>
</template>

<script>
import MyBar from "@/components/common/MyBar.vue";
import HorMenu from "@/components/common/HorMenu.vue";

export default {
  name: "CSSResearch",
  components: {MyBar, HorMenu},
  props: [],
  data() {

    return {
      menubtns: [
        {
          id: "1",
          name: "btn1",
          title: "Кнопка 1",
          children:[
            {
              id: "11",
              name: "btn11",
              title: "Кнопка 11",
              children:[]
            },              {
              id: "12",
              name: "btn12",
              title: "Кнопка 12",
              children:[]
            },              {
              id: "13",
              name: "btn13",
              title: "Кнопка 13",
              children:[]
            },              {
              id: "14",
              name: "btn14",
              title: "Кнопка 14",
              children:[]
            }
          ]
        },
        {
          id: "2",
          name: "btn2",
          title: "Кнопка 2",
          children:[]
       },
        {
          id: "3",
          name: "btn3",
          title: "Кнопка 3",
          children:[
            {
              id: "31",
              name: "btn31",
              title: "Кнопка 31",
              children:[]
            },
            {
              id: "32",
              name: "btn32",
              title: "Кнопка 32",
              children:[]
            },
            {
              id: "33",
              name: "btn33",
              title: "Кнопка 33",
              children:[]
            },
            {
              id: "34",
              name: "btn34",
              title: "Кнопка 34",
              children:[]
            }
          ]
       },
        {
          id: "4",
          name: "btn4",
          title: "Кнопка 4",
          children:[]
        }
      ]

  }
  },
    computed: {},
    methods: {
        menuClick(v) {
            console.log('menuClick=>>',v);
        },
    },
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

  .block {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: lightyellow;
    display: flex;
    flex-flow: column nowrap;
    gap: 2px;

  }

  .top {
    position: relative;
    height: 20px;
    border-style: solid;
    border-color: darkgray;
    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
  }

  .middle {
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

  .top-menu-btn {
    position: relative;
    background-color: white;
    height: 25px;
    &:hover .menu-dropdown {
      display: flex;
    }
  }

  .btn-menu {
    background-color:floralwhite;
    border-color: darkgray;
    height: 30px;
    &:hover {
      background-color: cornflowerblue;
    }
  }

  .menu-dropdown {
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    height: auto;
    background-color: powderblue;
    flex-flow: column;
    justify-content: center;
    display: none;
  }

  .btn-primary:hover {
    background-color: chartreuse;
  }


}
</style>