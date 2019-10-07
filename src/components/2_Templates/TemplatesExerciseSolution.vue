<template>
	<div class="root">
		TODO: Create a component that shows the two range limits and shows a random number from the given range.
		<br/>
		<br/>
		The lower limit is {{ min }}.
		<br/>
		The upper limit is {{ max }}.
		<br/>
		From this range the random number {{ Math.random() * (max - min) + min }} was chosen.
	</div>
</template>

<script>
export default {
	name: 'TemplatesExerciseSolution',
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
