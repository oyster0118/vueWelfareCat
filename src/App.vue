<template>
  <div id="app">
    <Nav v-show="navShow" />
    <router-view/>
    <Footer v-show="navShow" />
  </div>
</template>

<script>
import Nav from '@/components/TopMenu.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'app',
  components: {
    Nav,
    Footer,
  },
  computed: {
    navShow() {
      return this.$route.meta.navShow;
    },
  },
};
</script>
<style lang="less">
html, body {
  margin:0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
