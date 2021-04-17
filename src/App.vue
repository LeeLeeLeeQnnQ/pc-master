<template>
  <div id="app">
	<transition name="fade">
		<router-view/>
	</transition>
  </div>
</template>

<style lang="less">
#app {
  // color: @colorF;
  height: 100%;
}
.fade-enter-active, .fade-leave-avtive {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>