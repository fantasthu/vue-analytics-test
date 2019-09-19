<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <router-link to="/home">go home</router-link>
    <br />
    <router-link to="/girl">go to see girl</router-link>
    <br />
    <router-link to="/helloWorld">go hello world</router-link>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  watch: {
    $route(to, from) {
      console.log(to.path);
      this.$ga.page(to.path);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
