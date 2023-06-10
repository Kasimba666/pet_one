<template>
  <div class="CSSResearch">
    <div class="grid">
      <MyBar barbackcolor='azure' barbordercolor='black'>
        <template v-slot:title><b>Один</b></template>
        <div class="block">
          <div class="top">
            <HorMenu :menuItems="petMenu" @showItem="showItem"></HorMenu>
          </div>
          <div class="middle"></div>
          <div class="bottom">
            {{ currentItemTitle }}
          </div>
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
import HorMenu from "@/components/common/HorMenu.vue";

export default {
  name: "CSSResearch",
  components: {MyBar, HorMenu},
  props: [],
  data() {

    return {
      petMenu: [
        {
          id: "1",
          name: "btn1",
          title: "Кнопка 1",
          children: [
            {
              id: "11",
              name: "btn11",
              title: "Кнопка 11",
              children: [
                {
                  id: "111",
                  name: "btn111",
                  title: "Кнопка 111",
                  children: []
                }, {
                  id: "112",
                  name: "btn112",
                  title: "Кнопка 112",
                  children: []
                }, {
                  id: "113",
                  name: "btn113",
                  title: "Кнопка 113",
                  children: []
                }, {
                  id: "114",
                  name: "btn114",
                  title: "Кнопка 114",
                  children: []
                }
              ]
            }, {
              id: "12",
              name: "btn12",
              title: "Кнопка 12",
              children: [
                {
                  id: "121",
                  name: "btn121",
                  title: "Кнопка 121",
                  children: []
                }, {
                  id: "122",
                  name: "btn122",
                  title: "Кнопка 122",
                  children: []
                }, {
                  id: "123",
                  name: "btn123",
                  title: "Кнопка 123",
                  children: []
                }, {
                  id: "124",
                  name: "btn124",
                  title: "Кнопка 124",
                  children: []
                }
              ]
            }, {
              id: "13",
              name: "btn13",
              title: "Кнопка 13",
              children: []
            }, {
              id: "14",
              name: "btn14",
              title: "Кнопка 14",
              children: []
            }
          ]
        },
        {
          id: "2",
          name: "btn2",
          title: "Кнопка 2",
          children: []
        },
        {
          id: "3",
          name: "btn3",
          title: "Кнопка 3",
          children: [
            {
              id: "31",
              name: "btn31",
              title: "Кнопка 31",
              children: []
            },
            {
              id: "32",
              name: "btn32",
              title: "Кнопка 32",
              children: []
            },
            {
              id: "33",
              name: "btn33",
              title: "Кнопка 33",
              children: []
            },
            {
              id: "34",
              name: "btn34",
              title: "Кнопка 34",
              children: [{
                id: "341",
                name: "btn341",
                title: "Кнопка 341",
                children: []
              }, {
                id: "342",
                name: "btn342",
                title: "Кнопка 342",
                children: []
              }, {
                id: "343",
                name: "btn343",
                title: "Кнопка 343",
                children: []
              }, {
                id: "344",
                name: "btn344",
                title: "Кнопка 344",
                children: []
              }]
            }
          ]
        },
        {
          id: "4",
          name: "btn4",
          title: "Кнопка 4",
          children: []
        }
      ],
      currentItemTitle: '',
    }
  },
  computed: {},
  methods: {
    showItem(v)
    {
      this.currentItemTitle = v.title;
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
    min-height: 200px;
    border-style: solid;
    border-color: darkgray;
  }

  .bottom {
    height: 20px;
    border-style: solid;
    border-color: darkgray;
  }

}
</style>