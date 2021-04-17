<template>
	<div class="header-box">
		<div>
			
		</div>
		<!-- nav部分 -->
		<ul>
		  <li v-for="(item,index) in links" @click="changePath(index)" :key="index" :class="{ active:index==current}">
			<router-link :to="{ path: item.path }">
			    {{item.name}}
			</router-link>
		  </li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HeaderNav',
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
					path: '/home',
				},
				{
					name: '产权转让',
					path: '/home',
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
			changePath: function (index) {
				this.current = index;
			},
		}
	}
</script>

<style scoped lang="less">
	ul{
		width: 100%;
		li{
			float: left;
			width: 80px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			margin-left: 1px;
			cursor: pointer;
		}
		li:hover,.active{
			background-color: royalblue;
			color: #fff;
			.router-link-active{
			    color: #fff;
			}
		}
		.router-link-active{
		    color: #000;
		}
	}
</style>
