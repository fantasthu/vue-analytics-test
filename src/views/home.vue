<template>
  <div class="hello">
    <h1>Home</h1>
    <Button @click="tryClick">点击一下我试试</Button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    tryClick() {
      this.$ga.event("click", "今天是个好日子,上街去玩耍", "00687824");

      setTimeout(() => {
        this.$ga.exception("我就是出错了,怎么了?");
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
