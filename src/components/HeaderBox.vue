<template>
	<div class="header-box">
		<div class="header-logo-box">
			<img src="@/assets/img/logo.png" @click="logoPath">
			<div class="header-logo-title">
				<h3>航空工业</h3>
				<h3>资产交易服务平台</h3>
			</div>
		</div>
		<!-- nav部分 -->
		<ul>
		  <li v-for="(item,index) in links" @click="changePath(index,item.path)" :key="index" :class="{ active:index==current}">
			<span>
			    {{item.name}}
			</span>
		  </li>
		</ul>
		<div class="srach-box">
			<img src="@/assets/img/sreach.png" @click="showSreachBox">
			<span class="login" @click="goLogin">登录</span>
			<span class="register" @click="goRegister">注册</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HeaderBox',
		props: {
		list: String
		},
		data(){
		  return{
			current: 0,
			"links": [
				{ 
					name: '首页',
					path: '/home',
				},
				{
					name: '企业增资',
					path: '/about',
				},
				{
					name: '产权转让',
					path: '/about',
				},
				{
					name: '资产转让',
					path: '/home',
				},
				{
					name: '地产出租',
					path: '/home',
				},
				{
					name: '混改专区',
					path: '/home',
				},
				{
					name: '专项服务',
					path: '/home',
				},
				{
					name: '典型案例',
					path: '/home',
				},
				{
					name: '政策法规',
					path: '/home',
				},
			],
		  }
		},
		methods: {
			// 点击logo回首页
			logoPath:function(){
				this.current = 0;
				this.$router.push({path:'/home'});
			},
			// nav导航
			changePath:function(index,path) {
				this.current = index;
				this.$router.push({path:path});
			},
			// 显示搜索盒子
			showSreachBox:function() {
				
			},
			// 点击跳转登录
			goLogin:function() {
				this.$router.push({path:'/login'});
			},
			// 点击跳转注册
			goRegister:function() {
				this.$router.push({path:'/register'});
			},
		}
	}
</script>

<style scoped lang="less">
	.header-box{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80px;
	}
	// header-logo-box
	.header-logo-box{
		display: flex;
		align-items: center;
		justify-content: center;
		img{
			width: 40px;
			height: 40px;
			margin-right: 10px;
		}
		.header-logo-title{
			h3{
				font-weight: 900;
				line-height: 18px;
				font-family: "黑体";
			}
		}
	}
	// nav
	ul{
		li{
			float: left;
			width: 80px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			margin-left: 1px;
			cursor: pointer;
			color:#000; 
			span {
				
			    text-decoration: none;
			}
		}
		li:hover,.active{
			background-color: royalblue;
			span{
			    color: #fff;
			}
		}
	}
	// srach-box
	.srach-box{
		display: flex;
		align-items: center;
		justify-content: center;
		img{
			width: 16px;
			height: 16px;
			cursor: pointer;
		}
		.login{
			margin: 0 15px;
			color: #888;
			cursor: pointer;
		}
		.register{
			border: 1px solid #999;
			padding: 5px 10px;
			border-radius: 5px;
			cursor: pointer;
		}
		.register:hover{
			background-color: royalblue;
			color: #fff;
			border: 1px solid transparent;
		}
	}
</style>
