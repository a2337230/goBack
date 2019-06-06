import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
import PageA from './../views/PageA/PageA.vue'
import PageB from './../views/PageB/PageB.vue'
import PageC from './../views/PageC/PageC.vue'
import PageD from './../views/PageD/PageD.vue'

import Page1 from './../components/page1.vue'
import Page2 from './../components/page2.vue'
import Page3 from './../components/page3.vue'
import Page4 from './../components/page4.vue'
import Page5 from './../components/page5.vue'
import Page6 from './../components/page6.vue'
import Page7 from './../components/page7.vue'
import Page8 from './../components/page8.vue'
import Page9 from './../components/page9.vue'
import Page10 from './../components/page10.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/PageA',
      component: PageA
    },
    {
      path: '/PageB',
      component: PageB
    },
    {
      path: '/PageC',
      component: PageC
    },
    {
      path: '/PageD',
      component: PageD
    },
    {
      path: '/Page1',
      component: Page1
    },
    {
      path: '/Page2',
      component: Page2
    },
    {
      path: '/Page3',
      component: Page3
    },
    {
      path: '/Page4',
      component: Page4
    },
    {
      path: '/Page5',
      component: Page5
    },
    {
      path: '/Page6',
      component: Page6
    },
    {
      path: '/Page7',
      component: Page7
    },
    {
      path: '/Page8',
      component: Page8
    },
    {
      path: '/Page9',
      component: Page9
    },
    {
      path: '/Page10',
      component: Page10
    }
  ]
})
