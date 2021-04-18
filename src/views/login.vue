<template>
	<div>
		注册
	</div>
</template>

<script>
// 引用api
import { login } from 'api/user'
export default {
  name: 'login',
  components: {
  },
  methods: {
	/**
	 * [loadData axios示例]
	 * @return
	 */
	loadData () {
	  login({ data:'111' })
		.then(res => { if (res.code === 200) { } }).catch(err => { if (err) { } })
	}
  }
	}
</script>

<style>
</style>
