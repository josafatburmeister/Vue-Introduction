<template>
	<div class="root">
		<h3>Dynamic Components</h3>

		<!-- you can use :is on component elements to insert different components dynamically -->
		<component :is="type" v-bind=props></component>
	</div>
</template>

<script>
import TestComponent from '../../TestComponent'
import Student from '../1_Properties/Student'

export default {
	name: 'DynamicComponents',
	components: { TestComponent, Student },
	props: {
		type: {
			type: String,
			validator: function(value) {
				return ['TestComponent'].includes(value);
			},
			default: 'TestComponent',
		},
		props: {
			type: Object,
			default: function() {
				return { msg: 'Hello World.' }
			}
		}
	}
}
</script>

<style scoped>
</style>
