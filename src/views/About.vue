<template>
  <div class="about">
    <img class="a" src="../assets/a.png">
    <h1>{{ msg }}</h1>
    <h2>如果你无法简洁表达你的想法，那只能说明你还不够了解它。</h2>
    <h3>—————阿尔伯特·爱因斯坦</h3>
    <div>
      <ul>
        <router-link tag="li" to="/login"><a>加入我们</a></router-link>
        <router-link tag="li" to="/community"><a>逛逛社区</a></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      msg: '关 于 猫 的 公 益',
    };
  },
};
</script>


<style lang="less" scoped>
  .a {
    width: 200px;
    height: 50px;
    margin-top: 180px;
  }
  .about {
    background-color: #ffddce;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
  }
  h1 {
    font-weight: normal;
    font-size: 60px;
    color: #333333;
  }
  h2 {
    font-weight: normal;
    font-size: 20px;
    color: #333333;
  }
  h3 {
    margin-left: 500px;
    font-size: 22px;
    color: #333333;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
    width: 200px;
    height: 60px;
    background-color: #fc8d59;
    border-radius: 5px;
    font-size: 18px;
    line-height: 60px;
  }
  a {
    color: #ffffff;
    text-decoration: none;
  }
</style>
