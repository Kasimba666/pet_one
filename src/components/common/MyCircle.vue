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
  --size: 50px;
  width: var(--circleSize, var(--size, 10px));
  height: var(--circleSize, var(--size, 10px));
  margin: 3px;
  background-color: blue;
  border-style: solid;
  border-width: 6px;
  border-color: red;
  border-radius: 50%;
}
</style>