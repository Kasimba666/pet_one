<template>
  <div class="horizontal-menu" :class="{'close-all':closeAll}">
    <div class="horizontal-menu-item" v-for="item in menuitem.children" @click="itemClick(item, $event)">
      {{ item.title }}
      <DropdownMenu
          v-if="menuitem?.children?.length"
          style="left: 0; top: 100%"
          :level="0"
          :menuitem="item"
          @clickItem="itemClick"
          />
    </div>
  </div>
</template>

<script>
import DropdownMenu from "@/components/common/DropdownMenu.vue";

export default {
  name: "HorizontalMenu",
  components: {DropdownMenu},
  props: ['menuitem'],
  data() {
    return {
      closeAll: false,
    }
  },
  computed: {},
  methods: {
    itemClick(v, e) {
      // e.stopPropagation();
      if (!v?.children.length) {
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


  .horizontal-menu {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: black;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    gap: 10px;
    z-index: 0;

    &.close-all {
      .horizontal-menu-item:hover > .dropdown-menu {
        display: none;
      }
    }

  }



  .horizontal-menu-item {
    position: relative;
    height: auto;
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
      } ;
    }
  }

</style>