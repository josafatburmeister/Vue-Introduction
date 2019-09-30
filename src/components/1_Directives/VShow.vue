<template>
	<div class="root">

		<h3>v-show</h3>

		<!-- elements using v-show are always rendered, v-show only toggles css display property -->
		<!-- v-show has higher initial render costs, but lower toggle costs compared to v-if -->

		<button v-on:click="toggle = !toggle">v-show</button>

		<!-- element is only shown if firstToggle is true -->
		<div v-show="toggle">With v-show an element's visibility can be toggled.</div>

	</div>
</template>

<script>

export default {
	name: 'VShow',
	data: function() {
		return {
			toggle: true,
		}
	},
}
</script>

<style scoped>
</style>
