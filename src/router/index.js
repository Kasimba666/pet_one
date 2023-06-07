import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/components/views/HomeView.vue';
import FlexResearch from '@/components/views/FlexResearch.vue';
import BlockTagsResearch from '@/components/views/BlockTagsResearch.vue';
import InlineTagsResearch from '@/components/views/InlineTagsResearch.vue';
import JSResearch from '@/components/views/JSResearch.vue';
import CSSResearch from '@/components/views/CSSResearch.vue';

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
    ],
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
