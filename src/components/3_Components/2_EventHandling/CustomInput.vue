<template>
	<div>
		<div v-if="type === 'custom-event'">
			<!-- you can emit cutom events to the parent component -->
			<button v-on:click="$emit('custom-event')">Emit custom event</button> <br/>

			<!-- you can emit cutom events with values to the parent component -->
			<button v-on:click="$emit('custom-event', Math.random(0, 10))">Emit custom event with value</button> <br/>

			<!-- you can use event modifiers e.g. .once  -->
			<button v-on:click.once="$emit('custom-event')">Event is only fired once</button>
		</div>

		<div v-if="type === 'listeners'">
			<!-- $listeners property provides access to all listeners of the component -->
			<button v-on=$listeners>Emit event for $listeners</button> <br/>
		</div>

		<!-- the value of an input element can be bound with v-model -->
		<input v-model="value" type="text" placeholder="Type in something!" style="display:none">
		<!-- the following code would do the same -->
		<input :value="value" v-on:input="value=$event.target.value" type="text" placeholder="Type in something!" style="display:none">

		<!-- if the parent component uses v-model the child component has to emit input events -->
		<input v-on:input="$emit('input', $event.target.value)" placeholder="Type in something!" v-if="type === 'v-model'">

	</div>
</template>

<script>
export default {
	name: 'CustomInput',
	props: {
		type: {
			type: String,
			validator: function (value) {
				return ['custom-event', 'v-model', 'listeners'].includes(value);
			}
		}
	},
	data: function() {
		return {
			value: '',
		}
	}
}
</script>

<style scoped>
</style>
