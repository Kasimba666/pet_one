<template>
    <div class="BlockTagsResearch">
        <h1 class="paragraph">Block Tags Research</h1>
        <div class="circles">
            <MyCircle mybackcolor="green" myborderstyle="dotted"></MyCircle>
        </div>

    </div>
</template>

<script>
import MyCircle from "@/components/common/MyCircle.vue";

export default {
    name: "BlockTagsResearch",
    components: {MyCircle},
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
/****  BlockTagsResearch  ****/
.BlockTagsResearch {
  width: 100%;
  height: auto;

  .circles {
    height: auto;
    margin: 20px 0;
      display: flex;
      justify-content: center;
  }

}
</style>