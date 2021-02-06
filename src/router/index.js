import { createRouter, createWebHistory } from 'vue-router'

//csharp
const csHome =import('../views/CSharp/CsHome.vue')
const CsHomContent =import('../views/CSharp/CsHomContent.vue')
const CsBeginerContent =import('../views/CSharp/CsBeginerContent.vue')
const CsNormalContetnt =import('../views/CSharp/CsNormalContetnt.vue')
const CsAdvancedContent =import('../views/CSharp/CsAdvancedContent.vue')
const CsRefrenceContetnt =import('../views/CSharp/CsRefrenceContetnt.vue')

//java
const JavaHome =import('../views/Java/JavaHome.vue')

//js
const JsHome =import('../views/JS/JsHome.vue')

//vuejs
const VuejsHome =import('../views/Vuejs/VuejsHome')


const routes = [
  {
    path: '/',
    name: 'csHome',
    component: csHome,
    meta:{transition:"ts-csharp"},
    children:[
      {
        path: '',
        name: 'CsHomContent',
        component: CsHomContent,
        meta:{transition:'ts-cs'}
      },
      {
        path: 'csbeginer',
        name: 'CsBeginerContent',
        component: CsBeginerContent,
        meta:{transition:"anim-cshome"}
      },
      {
        path: 'csnormal',
        name: 'CsNormalContetnt',
        component: CsNormalContetnt,
        meta:{transition:"anim-cshome"}
      },
      {
        path: 'csadvanced',
        name: 'CsAdvancedContent',
        component: CsAdvancedContent,
        meta:{transition:"anim-cshome"}
      },
      {
        path: 'csrefrence',
        name: 'CsRefrenceContetnt',
        component: CsRefrenceContetnt,
        meta:{transition:"anim-cshome"}
      },
    ]
  },
  {
    path: '/java',
    name: 'JavaHome',
    component: JavaHome,
    meta:{transition:"ts-java"}
  },
  {
    path: '/js',
    name: 'JsHome',
    component: JsHome,
    meta:{transition:'ts-js'}
  },
  {
    path: '/vuejs',
    name: 'VuejsHome',
    component: VuejsHome,
    meta:{transition:'ts-vuejs'}
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
