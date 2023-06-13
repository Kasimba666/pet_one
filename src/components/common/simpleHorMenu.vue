<template>
    <div class="simpleHorMenu dropdown-menu">
        <div class="dropdown-menu-item" v-for="item in menuitem.children" @click="itemClick(item, $event)">
            {{ item.title }}
            <simpleHorMenu v-if="menuitem?.children?.length" :menuitem="item" :level="level+1"/>
        </div>
    </div>
</template>

<script>

export default {
    name: "simpleHorMenu",
    components: {},
    props: ['menuitem', 'level'],
    data() {
        return {
            closeAll: false,
        }
    },
    computed: {},
    methods: {
        itemClick(v, e) {
            // e.stopPropagation();
            if (!v.children.length) {
                this.$emit('currentItem', v);
                console.log(v.title);
                this.closeAll = true;
                setTimeout(() => {
                    this.closeAll = false;
                }, 300);
            }

        },
    },
    mounted() {
    },
}
</script>

<style lang="scss">
/****  HorMenu  ****/
.simpleHorMenu {
  //position: relative;
  //width: 100%;
  //height: 100%;
  background-color: transparent;
  color: black;
  //display: flex;
  //flex-flow: row;
  //justify-content: space-around;
  gap: 10px;


  //&.close-all {
  //  .main-menu-item:hover .dropdown1-menu {
  //    display: none;
  //  }
  //}

  &.dropdown-menu {
    position: absolute;
      z-index: v-bind('level * 10');
    background-color: hsl(40, 100%, 89%);
    top: 0;
    left: 100%;
    padding: 5px 0 5px;
    //display: flex;
    display: none;
    flex-flow: column;
    box-shadow: 1px 1px 5px 0 hsla(0, 0%, 0%, 50%);
  }

  .dropdown-menu-item {
      position: relative;
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

      & > .dropdown-menu {
        display: flex;
      }
    ;
    }
  }

}
</style>