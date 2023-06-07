<template>
    <div class="CSSResearch">
        <div class="grid">
            <MyBar barbackcolor='azure' barbordercolor='black'>
                <template v-slot:title><b>Один</b></template>
                <div class="block-1">
                    <button class="btn-primary btn-main">Кнопка</button>
                    <div class="menu">
                        <button class="btn-menu">Кнопка</button>
                        <button class="btn-menu">Кнопка</button>
                        <button class="btn-menu">Кнопка</button>
                    </div>
                </div>


            </MyBar>
            <MyBar barbackcolor='azure' barbordercolor='black'>
                <template v-slot:title><b>Два</b></template>

            </MyBar>

            <MyBar barbackcolor='azure' barbordercolor='black'>
                <template v-slot:title><b>Три</b></template>

            </MyBar>

            <MyBar barbackcolor='azure' barbordercolor='black'>
                <template v-slot:title><b>Четыре</b></template>

            </MyBar>

        </div>
    </div>
</template>

<script>
import MyBar from "@/components/common/MyBar.vue";

export default {
    name: "CSSResearch",
    components: {MyBar},
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
/****  CSSResearch  ****/
.CSSResearch {
    width: 100%;
    height: auto;

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        grid-template-rows: 1fr 1fr;
        row-gap: 10px;
    }
    .block-1 {
        position: relative;
        width: 100%;
        height: auto;
        background-color: lightyellow;
        //display: flex;
        //flex-flow: row wrap;

    }
    .btn-main {
        background-color: white;
    }
    .btn-menu {

    }
    .menu {
        position: absolute;
        top: 20px;
        left: 10px;
        width: auto;
        height: auto;
        background-color: powderblue;
        display: none;
        flex-flow: column;
        justify-content: left;
    }
    .btn-main:hover {
        background-color: chartreuse;

    }
   .block-1:hover .menu{
       display: flex;


    }

}
</style>