<template>
    <div
        class="MyCircle"
        :style="{backgroundColor: mybackcolor, borderColor: mybordercolor}">
    </div>
</template>

<script>
export default {
    name: "MyCircle",
    components: {},
    props: ['mybackcolor', 'mybordercolor'],
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
  margin: 3px;
  background-color: blue;
  border-style: solid;
  border-width: 6px;
  border-color: red;
  border-radius: 50%;
}
</style>