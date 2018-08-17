import axios from 'axios';
import router from '@/router';
import { Toast } from 'element-ui';

axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://gym8.wdado.com:8080/' : 'http://gym8.wdado.com:8080/';// TODO: need comfirm

//  http request 拦截器
axios.interceptors.request.use((config) => {
  const params = config;
  const { data } = config;
  params.data = JSON.stringify(data);
  // TODO:这里处理重复请求 取消或者做成队列
  console.log(params);
  return params;
}, err => Promise.reject(err));


// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode === -2) {
      router.push({
        path: '/login',
        querry: { redirect: router.currentRoute.fullPath }, // 从哪个页面跳转
      });
    }
    return response;
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath },
          });
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          Toast({
            message: '登录过期，请重新登录',
            duration: 1000,
            forbidClick: true,
          });
          // 清除token
          // localStorage.removeItem('token');
          // store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath,
              },
            });
          }, 1000);
          break;
        // 404请求不存在
        case 404:
          Toast({
            message: '网络请求不存在',
            duration: 1500,
            forbidClick: true,
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          Toast({
            message: error.response.data.message,
            duration: 1500,
            forbidClick: true,
          });
      }
    }
    return Promise.reject(error.response);
  },
);

export const getData = (url, param = {}) => axios.get(`${url}`, param);

export const postData = (url, param = {}, config = {}) => axios.post(`${url}`, param, config);

