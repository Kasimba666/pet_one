<template>
    <div>
        <div class="MyCircle" :style="{backgroundColor: mybackcolor, borderStyle: myborderstyle}">
        </div>
    </div>
</template>

<script>
export default {
    name: "MyCircle",
    components: {},
    props: ['mybackcolor', 'myborderstyle'],
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