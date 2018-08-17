import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Community from './views/Community.vue';
import Login from './views/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      navShow: true, // 表示此路由需要显示底部导航栏
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      navShow: false,
    },
  },
  {
    path: '/community',
    name: 'community',
    component: Community,
    meta: {
      navShow: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      navShow: false,
    },
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/Profile.vue'),
    meta: {
      navShow: true,
      requireAuth: true,
    },
  }],
});

/**
 * 登录钩子函数
 * to 即将要进入的目标 路由对象
 * from 当前导航正要离开的路由
 * next 一定要调用该方法来 resolve 这个钩子
 * next() 进行管道中的下一个钩子 如果全部钩子执行完了，则状态就是 confirmed （确认的）
 */
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.getItem('sessionToken')) { // TODO 登录状态怎么保持没确定暂时这样写
      next();
    } else {
      next({
        path: '/login', // 跳转到登录页面
        query: {
          redirect: to.fullPath,
        }, // 将跳转的路由path作为参数，用于登录成功后回到登录前页面
      });
    }
  } else {
    next();
  }
});

export default router;
