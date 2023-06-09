<template>
    <div class="HorMenu">
        <div class="main-menu-item" v-for="mainmenuItem in menuItems">
            {{ mainmenuItem.title }}
            <div class="dropdown-menu" v-if="mainmenuItem.children.length">
                <div class="dropdown-menu-item" v-for="menuItem in mainmenuItem.children"
                     @click="">
                    {{ menuItem.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HorMenu",
    components: {},
    props: ['menuItems'],
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
/****  HorMenu  ****/
.HorMenu {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  gap: 10px;

  .main-menu-item {
    position: relative;
    height: 15px;
    width: auto;
    padding: 3px 20px;
    //background-color: #ffce95;
    //border-style: solid;
    //border-radius: 5px;
    //border-width: 1px;
    //border-color: darkgrey;
    overflow: visible;
    cursor: pointer;

    &:hover {
      background-color: cornflowerblue;

      .dropdown-menu {
        display: flex;
      }
    }

  }

  .dropdown-menu {
    position: absolute;
    background-color: hsl(40, 100%, 89%);
    top: 100%;
    left: 0px;
    padding: 5px 0px 5px;
    display: none;
    flex-flow: column;
box-shadow: 1px 1px 5px 0px hsla(0, 0%, 0%, 50%);
  }

  .dropdown-menu-item {
    height: 25px;
    width: auto;
    color: black;
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1px 20px;

    &:hover {
      background-color: cornflowerblue;
    }
  }
}
</style>