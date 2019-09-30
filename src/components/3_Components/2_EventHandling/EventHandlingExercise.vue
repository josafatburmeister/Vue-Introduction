<template>
<div class="root">
	TODO1: Provide that lets the user to choose one of the answers below.
	<br/>
	TODO2: Show the chosen answer as soon as one was selected.
</div>
</template>

<script>

export default {
	name: 'EventHandlingExercise',
	data: function() {
		return {
			choice: '',
			showResult: false,
			options: ['Answer a)', 'Answer b)', 'Answer c)'],
		}
	},
	methods: {}
}
</script>

<style scoped>
</style>
