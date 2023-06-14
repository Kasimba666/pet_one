<template>
    <div class="dropdown-menu" >
        <div class="dropdown-menu-item" v-for="item in menuitem.children" @click="itemClick(item, $event)">
            {{ item.title }}
            <DropdownMenu v-if="menuitem?.children?.length"
                          :menuitem="item"
                          :level="level+1"
            @clickItem="(v)=>$emit('clickItem', v)"
            />
        </div>
    </div>
</template>

<script>

export default {
    name: "DropdownMenu",
    components: {},
    props: ['menuitem', 'level'],
    data() {
      return {}
    },
    computed: {},
    methods: {
        itemClick(v, e) {
            // e.stopPropagation();
            if (!v?.children.length) {
                this.$emit('clickItem', v);
                // console.log(v.title);
                // this.closeAll = true;
                // setTimeout(() => {
                //     this.closeAll = false;
                // }, 300);
            }

        },
    },
    mounted() {
    },
}
</script>

<style lang="scss">
/****  dropdownMenu  ****/
.dropdown-menu {
    position: absolute;
    z-index: v-bind('level * 10');
    background-color: hsl(40, 100%, 89%);
    top: 0;
    left: 100%;
    padding: 5px 0 5px;
    display: none;
    flex-flow: column;
    box-shadow: 1px 1px 5px 0 hsla(0, 0%, 0%, 50%);
  }

  //.close-all {
  //  .dropdown-menu-item:hover > .dropdown-menu {
  //    display: none;
  //  }
  //}



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

</style>