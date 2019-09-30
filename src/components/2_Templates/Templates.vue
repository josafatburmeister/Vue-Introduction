<template>
	<div class="root">
		<!-- use v-html for raw html insertion -->
		<span v-html="heading"></span>

		<!-- use mustache syntax for content insertion -->	
		{{ body }}

		<br/><br/>

		<!-- mustaches also supports javascript expressions, but no javascript stamenets or nested expressions -->	
		This date is displayed using javascript insertion: {{ (new Date()).toLocaleDateString() }}	

	</div>
</template>

<script>
export default {
	name: 'Templates',
	props: {
		heading: {
			type: String,
			default: '<h1>This heading was created using raw html insertion</h1>',
		},
		body: {
			type: String,
			default: 'This body was created using string insertion',
		},
	}
}
</script>

<style scoped>
</style>
