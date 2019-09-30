<template>
	<div class="root">

		<h3>v-bind</h3>

		<!-- use v-bind to bind attribute values -->	
		<!-- as shorthand for v-bind:align we could use	:align -->
		<div :align="alignment">	
			The alignment of this div is bound to the alignment property using v-bind.
		</div>

		<!-- v-bind also supports javascript expressions, but no javascript stamenets or nested expressions -->
		<div v-bind:id="`div-${id}`">
			The id of this div is computed from to the id property using an javascript expression in v-bind.
		</div>

	</div>
</template>

<script>
export default {
	name: 'VBind',
	props: {
		alignment: {
			type: String,
			default: 'left',
		},
		id: {
			type: Number,
			default: 1,
		},
	},
}
</script>

<style scoped>
</style>
