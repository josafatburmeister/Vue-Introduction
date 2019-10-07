<template>
	<div class="root">
		TODO: Provide a button that shows a list of the fruit names below when it is clicked.
		<br/>
		<button v-on:click="listVisibility = !listVisibility">Show fruit list</button>
		<ul v-show="listVisibility">
			<li v-for="fruit in fruits" :key="fruit.name">{{ fruit.name }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'DirectivesExercise',
	data: function() {
		return {
			listVisibility: false,
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
