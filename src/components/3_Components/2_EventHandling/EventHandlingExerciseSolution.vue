<template>
<div class="root">
	TODO1: Provide that lets the user to choose one of the answers below.
	<br/>
	TODO2: Show the chosen answer as soon as one was selected.

	<div v-for="option in options" :key="option">
		<input
			type="radio"
			v-model="choice"
			:value="option"
			:name="option"
			v-on:input="showResult = true"
		/>
		{{ option }}
	</div>

	<div v-if="showResult">
		You chose {{ choice }}.
	</div>
	
</div>
</template>

<script>
import CustomInput from './CustomInput'

export default {
	name: 'EventHandlingExercise',
	components: { CustomInput },
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
