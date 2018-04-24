import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '../views/Layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      menuShow: false,
      meta: { title: 'Layout' }
    },
    {
      path: '/example',
      name: 'Demo',
      redirect:"/example/form",
      component: Layout,
      meta: { title: 'Demo' },
      menuShow: true,
      hasChild: true,
      children: [
        {
          path: 'form',
          name: 'form',
          meta: { title: '表单' },
          component: () => import('../views/form'),
          menuShow: true
        }, {
          path: 'table',
          name: 'table',
          meta: { title: '表格' },
          component: () => import('../views/table'),
          menuShow: true
        }
      ]
    }, {
      path: '/tree',
      name: '控件',
      menuShow: true,
      hasChild: true,
      component:Layout,
      meta: { title: '树控件' },
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/views/Tree'),
          meta: { title: '树控件', icon: 'form' }
        }
      ]
    }
  ]
})
