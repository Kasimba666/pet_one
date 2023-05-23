<template>
    <div>
        <div class="MyCircle" :style="{backgroundColor: mycolor}">
        </div>
    </div>
</template>

<script>
export default {
    name: "MyCircle",
    components: {},
    props: ['mycolor'],
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
/****  MyCircle  ****/
.MyCircle {
  width: 50px;
  height: 50px;
  background-color: blue;
  border-style: solid;
  border-width: 2px;
  border-color: red;
  border-radius: 50%;
}
</style>