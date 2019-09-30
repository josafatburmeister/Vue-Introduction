<template>
	<div class="root">
		TODO: Create a component that accets and shows two range limits and shows a random number from the given range.
	</div>
</template>

<script>
export default {
	name: 'TemplatesExercise',
	props: {
		min: {
			type: Number,
			default: 0,
		},
		max: {
			type: Number,
			default: 10,
		}
	}
}
</script>

<style scoped>
</style>
