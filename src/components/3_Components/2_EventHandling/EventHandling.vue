<template>
<div class="root">
	<h3>Event Handling</h3>

	<!-- with v-on you can also listen to custom events -->
	<!-- event listeners are automatically converted to lowercase -->
	<!-- therefore you should use use kebab-case for event names -->
	<CustomInput v-on:custom-event="handleEvent" type="custom-event"/>

	<!-- should be avoided as it creates dependencies on implementation of the child component -->
	<CustomInput v-on:click="handleEvent" type="listeners"/>

	<br/>

	Input: {{ input }}
	<!-- you can use v-model to bind the input value of an component -->
	<CustomInput v-model="input" type="v-model"/>

</div>
</template>

<script>
import CustomInput from './CustomInput'

export default {
	name: 'EventHandling',
	components: { CustomInput },
	data: function() {
		return {
			input: '',
		}
	},
	methods: {
		handleEvent(value) {
			if (value){
				alert(`An custom event with the value ${value} occured`);
			}
			else{
				alert('An custom event occured.');
			}
		}
	}
}
</script>

<style scoped>
</style>
