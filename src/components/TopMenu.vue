<template>
  <div id="top">
    <div class="top">
      <ul class="nav-list">
        <router-link tag="li" to="/index">首页</router-link>
        <router-link tag="li" to="community">社区</router-link >
        <router-link tag="li" to="diary">日记</router-link >
        <router-link tag="li" to="push">发布</router-link >
        <router-link tag="li" to="profile">我的</router-link >
      </ul>
      <div class="user-area">
        <router-link :to="{ name: 'login', params: { action: 'LOGIN' }}" class="yi">登录</router-link>
        <router-link :to="{ name: 'login', params: { action: 'SIGNUP'}}" class="yi">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
  .nav-list {
    margin-right: 100px;
    li {
      display: inline-block;
      margin: -3px;
      width: 60px;
      height: 30px;
      background-color: #fc8d59;
      font-size: 14px;
      line-height: 30px;
    }
  }
  .user-area {
    margin-left: 900px;
    margin-top: -35px;
  }
  .yi {
    display: inline-block;
    width: 45px;
    height: 25px;
    background-color: #fc8d59;
    font-size: 10px;
    line-height: 25px;
    border-radius: 10px;
  }
  a {
    color: #ffffff;
    text-decoration: none;
  }
</style>
