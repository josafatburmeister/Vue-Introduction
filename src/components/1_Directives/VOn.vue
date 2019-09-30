<template>
<div class="root">

	<h3>v-on</h3>

	<!-- events can be handled using v-on -->
	<button v-on:click="counter++">You clicked me {{ counter }} times</button>

	<br/><br/>
	
	<!-- you can call an event handler in v-on -->
	<button v-on:click="clickHandler">Click me</button>

</div>
</template>

<script>

export default {
	name: 'VOn',
	data: function() {
		return {
			counter: 0,
		}
	},
	methods: {
		clickHandler: function(event) {
			alert(`A ${event.target.tagName.toLowerCase()} was clicked!`);
		}
	}
}
</script>

<style scoped>
</style>
