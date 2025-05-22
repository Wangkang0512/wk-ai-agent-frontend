import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '首页 - 王康AI超级智能体应用平台',
      description: '王康AI超级智能体应用平台提供AI心理咨询和AI超级智能体服务，满足您的各种AI对话需求'
    }
  },
  {
    path: '/counseling',
    name: 'CounselingApp',
    component: () => import('../views/CounselingApp.vue'),
    meta: {
      title: 'AI心理咨询 - 王康AI超级智能体应用平台',
      description: 'AI心理咨询是王康AI超级智能体应用平台的专业心理咨询顾问，帮你解答各种心理问题，提供专业建议'
    }
  },
  {
    path: '/super-agent',
    name: 'SuperAgent',
    component: () => import('../views/SuperAgent.vue'),
    meta: {
      title: 'AI超级智能体 - 王康AI超级智能体应用平台',
      description: 'AI超级智能体是王康AI超级智能体应用平台的全能助手，能解答各类专业问题，提供精准建议和解决方案'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局导航守卫，设置文档标题
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router 