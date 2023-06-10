<template>
    <div class="HorMenu" :class="{'close-all':closeAll}">
        <div class="main-menu-item" v-for="mainmenuItem in menuItems"
             @click="itemClick(mainmenuItem, $event)">
            {{ mainmenuItem.title }}
            <div class="dropdown1-menu" v-if="mainmenuItem.children.length">
                <div class="dropdown1-menu-item" v-for="dropdown1menuItem in mainmenuItem.children"
                     @click="itemClick(dropdown1menuItem, $event)">
                    {{ dropdown1menuItem.title }}
                    <div class="dropdown2-menu" v-if="dropdown1menuItem.children.length">
                        <div class="dropdown2-menu-item" v-for="dropdown2menuItem in dropdown1menuItem.children"
                             @click="itemClick(dropdown2menuItem, $event)">
                            {{ dropdown2menuItem.title }}
                        </div>
                    </div>
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
        return {
            closeAll: false,
        }
    },
    computed: {},
    methods: {
        itemClick(v, e) {
            e.stopPropagation();
            this.$emit('showItem', v);
            console.log(v, e);
            this.closeAll=true;
            setTimeout(()=>{this.closeAll=false;}, 300);
            // this.$nextTick(()=>{this.closeAll=false;});
        },
    },
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
    white-space: nowrap;
    padding: 3px 20px;
    cursor: pointer;

    &:hover {
      background-color: cornflowerblue;

      .dropdown1-menu {
        display: flex;
      }
    }
  }

  &.close-all {
    .main-menu-item:hover .dropdown1-menu {
      display: none;
    }
  }

  .dropdown1-menu {
    position: absolute;
    background-color: hsl(40, 100%, 89%);
    top: 100%;
    left: 0px;
    padding: 5px 0px 5px;
    display: none;
    flex-flow: column;
    box-shadow: 1px 1px 5px 0px hsla(0, 0%, 0%, 50%);
  }

  .dropdown1-menu-item {
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

      .dropdown2-menu {
        display: flex;
      }
    }
  }

  .dropdown2-menu {
    position: absolute;
    background-color: hsl(40, 100%, 89%);
    top: 0px;
    left: 100%;
    padding: 5px 0px 5px;
    display: none;
    flex-flow: column;
    box-shadow: 1px 1px 5px 0px hsla(0, 0%, 0%, 50%);
  }

  .dropdown2-menu-item {
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