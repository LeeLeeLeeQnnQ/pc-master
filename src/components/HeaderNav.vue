<template>
	<div class="header-box">
		<div>
			logo部分
		</div>
		<!-- nav部分 -->
		<ul>
		  <li v-for="(item,index) in links" @click="changePath(index,item.path)" :key="index" :class="{ active:index==current}">
			<span>
			    {{item.name}}
			</span>
		  </li>
		</ul>
		<div>
			搜索部分
		</div>
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
					path: '/about',
				},
				{
					name: '产权转让',
					path: '/login',
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
			changePath: function (index,path) {
				this.current = index;
				this.$router.push({path:path});
			},
		}
	}
</script>

<style scoped lang="less">
	.header-box{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
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
</style>
