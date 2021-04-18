<template>
  <div>
	  <a-carousel arrows autoplay effect="fade" >
	      <div
	        slot="prevArrow"
	        slot-scope="props"
	        class="custom-slick-arrow"
	        style="left: 10px;zIndex: 1"
	      >
	        <a-icon type="left" />
	      </div>
	      <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
	        <a-icon type="right" />
	      </div>
		  <div class="carousel-item" v-for="item in imglist">
			<img :src="item.url" @click="golink(item.path)" />
		  </div>
	    </a-carousel>
  </div>
</template>
<script>
    export default {
		name: 'Banner',
        data() {
            return {
               "imglist": [
               	{ 
               		url: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
               		path: '/',
               	},
				{
					url: 'https://img0.baidu.com/it/u=1645026686,2788114478&fm=26&fmt=auto&gp=0.jpg',
					path: '/',
				},
				{
					url: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
					path: '/',
				},
				{
					url: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
					path: '/',
				},
               ], 
            }
        },
        components: {
            
        },
        methods: {
            golink:function(path){
				if(!path){return}
				this.$router.push({path:path});
			},
        }
    }
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  background: #999;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.15);
  opacity: 0.8;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

</style>
<style scoped lang="less">
	.carousel-item{
		height: 200px;
		width: 100%;
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>
