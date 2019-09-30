<template>
<div class="root">

	<h3>v-if, v-if-else, v-else</h3>

	<button v-on:click="firstToogle = !firstToogle">v-if</button>
	<button v-on:click="secondToggle = !secondToggle">v-if-else</button>

	<!-- elements using v-if, v-if-else and v-else are conditionally rendered -->

	<!-- element is only rendered if firstToogle is true -->
	<div v-if="firstToogle">Content conditionally rendered with v-if</div>

	<!-- element is only rendered if firstToogle is false and secondToggle is true -->
	<div v-else-if="secondToggle">Content conditionally rendered with v-else-if</div>

	<!-- element is only rendered if firstToogle and secondToogle are false -->
	<div v-else>Content conditionally rendered with v-else</div>

	<br/>

	<!-- elements are reused between v-if and v-else per default -->
	<input v-if="firstToogle" type="text" placeholder="Without key"/>
	<input v-else type="email" placeholder="Without key"/>

	<!-- add keys to prevent this -->
	<input v-if="firstToogle" type="text" key="text" placeholder="With key"/>
	<input v-else type="email" key="email" placeholder="With key"/>


</div>
</template>

<script>

export default {
	name: 'VIf',
	data: function() {
		return {
			firstToogle: true,
			secondToggle: false,
		}
	},
}
</script>

<style scoped>
</style>
