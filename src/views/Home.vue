<template>
  <div id="box">
	  <Banner/>
    我是首页
  </div>
</template>

<script>
	import Banner from '@/components/Banner.vue'
export default {
  name: 'home',
  components: {
	  Banner
  },
  methods: {
    /**
     * [loadData axios示例]
     * @return
     */
    loadData () {
      login({
        uid: 1233
      })
        .then(res => { if (res.code === 200) { } }).catch(err => { if (err) { } })
    }
  }
}
</script>

<style lang="less" scoped>
#demo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
