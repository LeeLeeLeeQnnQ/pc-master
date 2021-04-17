<template>
	<div class="basic-box">
		<div class="header">
			<header-nav/>
		</div>
<!-- 		<transition name="fade">
			<router-view/>
		</transition> -->
		
		<div class="content">
			<router-view/>
		</div>
		<div class="footer">
			我是底部
		</div>
	</div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
export default {
  components: {
    HeaderNav
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

<style lang="less">
	// 路由切换效果
	.fade-enter-active, .fade-leave-avtive {
	    transition: opacity 1s
	}
	.fade-enter, .fade-leave-to {
	    opacity: 0
	}
	// 样式
	.basic-box{
		width: 1200px;
		height: 100%;
		margin: 0 auto;
	}
	.header{
		width: 100%;
	}
	.content{
		min-height: 100%;
		margin-bottom: -50px;
	}
	.footer{
		height: 50px;
		background-color: red;
	}
</style>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>一行固定宽度且居中</title>
		<style type="text/css">
			*{
				margin:0px;
				padding: 0px;
				
			}
			.container{
				width: 1200px;
				margin: 0 auto;
			}
			div .top{
				background-color: rgb(152,252,254);
				
				height: 100px;
				margin-bottom: 10px;
				
			}
			div .banner{
				background-color: rgb(152,252,254);
				
				height: 300px;
				margin-bottom: 10px;
				
			}
			div .main{
				background-color: rgb(152,252,254);
				height: 400px;
				margin-bottom: 10px;
			}
			
			div .footer{
				background-color: rgb(152,252,254);
				height: 80px;
				
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="top"></div>
			<div class="banner"></div>
			<div class="main"></div>
			<div class="footer"></div>
		</div>
	</body>
</html>


