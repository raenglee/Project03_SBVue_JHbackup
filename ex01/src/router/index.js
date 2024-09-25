import { createRouter, createWebHistory } from 'vue-router'
import TheInformationList from '@/views/TheInformationList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/informationlist',
      name: 'informationlist',
      component: TheInformationList
    }
  ]
})

export default router
