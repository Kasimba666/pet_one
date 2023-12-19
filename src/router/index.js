import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/components/views/HomeView.vue';
import FlexResearch from '@/components/views/FlexResearch.vue';
import BlockTagsResearch from '@/components/views/BlockTagsResearch.vue';
import InlineTagsResearch from '@/components/views/InlineTagsResearch.vue';
import JSResearch from '@/components/views/JSResearch.vue';
import CSSResearch from '@/components/views/CSSResearch.vue';
import AnimationResearch from '@/components/views/AnimationResearch.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
        redirect: {name: 'JSResearch'},
        children: [
            {
                path: 'flex',
                name: 'FlexResearch',
                component: FlexResearch,
            },
            {
                path: 'block',
                name: 'BlockTagsResearch',
                component: BlockTagsResearch,
            },
            {
                path: 'inline',
                name: 'InlineTagsResearch',
                component: InlineTagsResearch,
            },
            {
                path: 'js',
                name: 'JSResearch',
                component: JSResearch,
            },
            {
                path: 'css',
                name: 'CSSResearch',
                component: CSSResearch,
            },
            {
                path: 'animation',
                name: 'AnimationResearch',
                component: AnimationResearch,
            },

        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
