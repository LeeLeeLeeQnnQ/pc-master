import Vue from 'vue'
import Router from 'vue-router'

// 按模块管理引用路由
// import routes from './routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/404',
      name: 'nofind',
      component: () => import('@/views/common/404'),
      meta: {
        title: '找不到页面'
      }
    },
	{
	  path: '/user',
	  name: 'user',
	  component:  () => import('@/layouts/UserLayout'),
	  meta: {},
		children: [
			{
				path: '/login',
				name: 'login',
				component: () => import('@/views/login'),
				meta: {
				  title: '首页'
				}
			}
		]
	},
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: '主页'
      },
	  component: () => import('@/layouts/BasicLayout'),
      children: [
		  {
		    path: '/home',
		    name: 'home',
		    component: () => import('@/views/Home'),
		    meta: {
		      title: '首页'
		    }
		  },
		  {
		    path: '/about',
		    name: 'about',
		    component: () => import('@/views/About'),
		    meta: {
		      title: '关于'
		    }
		  },
		]
    },
  ]
})
