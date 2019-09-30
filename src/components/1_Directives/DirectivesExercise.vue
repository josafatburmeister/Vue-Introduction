<template>
	<div class="root">
		TODO: Provide a button that shows a list of the fruit names below when it is clicked.
	</div>
</template>

<script>
export default {
	name: 'DirectivesExercise',
	data: function() {
		return {
			fruits: [
				{
					name: 'Banana',
					color: 'yellow',
					},
				{
					name: 'Apple',
					color: 'red',
				},
				{
					name: 'Orange',
					color: 'orange',
				},
				{
					name: 'Blueberry',
					color: 'blue'
				}
			]
		}
	}
}
</script>

<style scoped>
</style>
