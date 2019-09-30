<template>
	<div class="root">
		<h3>Properties</h3>

		<!-- use kebab-case to access properties with camelCase names in html -->
		<!-- in templates both can be used -->
		<Student :age="15" :full-name="fullname"/>

		<!-- using v-bind all properties of an object can be passed -->
		<Student v-bind="student"/>

		<!-- using $attrs all attributes that do not match a property of this component can be passed through -->
		<!-- per default they are passed to the template's root element, to disabled this use inheritAttrs: false -->
		<!-- class and style attributes will be merged, all other attributes are replaced -->
		<div class="body" v-bind="$attrs"/>
	</div>
</template>

<script>

import Student from './Student'
import Name from './types.js'

export default {
	name: 'Properties',
	components: { Student },
	inheritAttrs: false, // prevents root element from inheriting the components attributes
	data: function() {
		return {
			fullname: new Name('Moritz', 'Mustermann'),
			student: {
				age: 12,
				school: 'Albert-Schweitzer Gymnasium',
				grade: 6,	
			}
		}
	},
}
</script>

<style scoped>
</style>
