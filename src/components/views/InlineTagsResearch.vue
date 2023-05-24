<template>
    <div class="InlineTagsResearch">
        <h2>Inline Tags Research</h2>

        <button class="my-btn" @click="inc()">Increment</button><button class="my-btn" @click="inc(-1)">Decrement</button>

        <div class="part">
            <span class="one">{{ qwe }}</span>
            <br>
            <span class="one">{{ join }}</span>
            <br>
            <span class="one">{{ count }}</span>
        </div>

    </div>
</template>

<script>
export default {
    name: "InlineTagsResearch",
    components: {},
    props: ['msg'],
    data() {
        return {
            qwe: 'bla-bla!!!!!!!!!!!11111111111111',
            asd: 'quuquu',
            count: 0,
        }
    },
    computed: {
        join() {
            return this.qwe + ' ' + this.msg + ' ' + this.count;
        },
    },
    methods: {
        inc(d = 1) {
            this.count += d;
        }
    },
    mounted() {
    },
}
</script>

<style lang="scss">
/****  InlineTagsResearch  ****/
.InlineTagsResearch {
  width: 100%;
  height: auto;

  .my-btn {
    margin: 5px 15px 20px;
  }
}
</style>