<template>
    <div class="FlexResearch">
<!--        <h2>FlexResearch</h2>-->
        <MyBar
            mybackcolor='azure'
            mybordercolor='black'
            mywidth='250px'
            myheight='250px'>
        </MyBar>
        <MyBar
            mybackcolor='azure'
            mybordercolor='black'
            mywidth='250px'
            myheight='250px'>
        </MyBar>
        <MyBar
            mybackcolor='azure'
            mybordercolor='black'
            mywidth='250px'
            myheight='250px'>
        </MyBar>
        <MyBar
            mybackcolor='azure'
            mybordercolor='black'
            mywidth='250px'
            myheight='250px'>
        </MyBar>


    </div>
</template>

<script>
import MyBar from "@/components/common/MyBar.vue";
import MyCircle from "@/components/common/MyCircle.vue";

export default {
    name: "FlexResearch",
    components: {MyCircle, MyBar},
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
/****  FlexResearch  ****/
.FlexResearch {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;


    .container {
        height: 800px;
        width: 600px;
        margin: auto;
        background-color: aliceblue;
        border-style: solid;
        border-color: gray;
    }
}
</style>