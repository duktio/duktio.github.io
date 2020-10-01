
import { authGuard } from '../auth/authGuard'

const routes = [
  {
    path: '/',
    component: () => import('layouts/PublicLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'me',
        component: () => import('layouts/MainLayout.vue'),
        children: [
          { path: '', component: () => import('pages/Profile.vue') },
          { path: 'namespaces/:ns', name: 'namespace', component: () => import('pages/Namespace.vue') },
          { path: 'namespaces/:ns/flows/:fk', component: () => import('pages/Flow.vue') },
          { path: 'namespaces/:ns/flows/:fk/instances/:ik', component: () => import('pages/Instance.vue') }
        ],
        beforeEnter: authGuard
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
