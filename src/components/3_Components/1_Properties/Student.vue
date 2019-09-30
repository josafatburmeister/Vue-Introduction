<template>
	<div class="root">
		<div v-if="grade && school">
			{{ fullName.firstName }} is a {{ age }} years old {{ grade }}th-grader and goes to {{ school }}.
		</div>
		<div v-else>
			{{ fullName.firstName }} is {{ age }} years old.
		</div>
	</div>
</template>

<script>

import Name from './types.js'

export default {
	name: 'Student',
	// props allow one-way data flow from parent to child
	// props should not be mutated directly
	// everytime the parent is updated the child props are updated
	props: {
		age: {
			type: Number, // wrong type will issue console warning
			required: true,
			validator: function(value) {
				return value > 6;
			}
		},
		fullName: {
			type: Name, // type check will do instanceof check
			default: function() { return new Name('Max', 'Mustermann') },
		},
		school: String,
		grade: Number,
	},
}
</script>

<style scoped>
</style>
