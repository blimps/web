import Vue from 'vue'
import Router from 'vue-router'

// dashboard
import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout.vue'

// general
import NotFound from '@/components/GeneralViews/NotFoundPage.vue'

// admin pages
import Overview from '@/components/Dashboard/Views/Overview.vue'
import UserProfile from '@/components/Dashboard/Views/UserProfile.vue'
import Notifications from '@/components/Dashboard/Views/Notifications.vue'
import Icons from '@/components/Dashboard/Views/Icons.vue'
import Maps from '@/components/Dashboard/Views/Maps.vue'
import Typography from '@/components/Dashboard/Views/Typography.vue'
import TableList from '@/components/Dashboard/Views/TableList.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: DashboardLayout,
      redirect: '/admin/overview'
    },
    {
      path: '/admin',
      component: DashboardLayout,
      redirect: '/admin/stats',
      children: [{
          path: 'overview',
          name: 'overview',
          component: Overview
        },
        {
          path: 'stats',
          name: 'stats',
          component: UserProfile
        },
        {
          path: 'notifications',
          name: 'notifications',
          component: Notifications
        },
        {
          path: 'icons',
          name: 'icons',
          component: Icons
        },
        {
          path: 'maps',
          name: 'maps',
          component: Maps
        },
        {
          path: 'typography',
          name: 'typography',
          component: Typography
        },
        {
          path: 'table-list',
          name: 'table-list',
          component: TableList
        }
      ]
    },
    { path: '*', component: NotFound }
  ]
})
