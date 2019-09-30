<template>
	<div class="root">
		<h2>Class and style bindings</h2>

		<!-- classes can be toggled dynamically by binding boolean variables -->
		<div :class="{error: isError, success: !isError}">Text styled with toggleable classes</div>

		<!-- classes can be changed dynamically by binding string variables -->
		<div :class="[textClass]">Text styled by binding string variable to class attribute</div>

		<!-- you can combine both -->
		<div :class="[textClass, {error: isError}]">Text styled with combination of both</div>

		<!-- static and dynamic class attribute can be combined -->
		<div class="staticClass" :class="[textClass, {error: isError}]">Text with static and dynamic classes</div>

		<!-- when applying a class to vue component it will be added to the component's root element -->
		<TestComponent class="staticClass" msg="Component styled with class applied to its root element"/>

		<!-- style attribute can be bound to dynamic objects -->
		<div :style="{ color: activeColor, 'font-weight': fontWeight }">Text styled with bound style object</div>
	</div>
</template>

<script>
import TestComponent from '../TestComponent'

export default {
	name: 'ClassBindings',
	components: { TestComponent },
	props: {
		isError: Boolean,
		textClass: String,
		activeColor: {
			type: String,
			default: 'red',
		},
		fontWeight: {
			type: String, 
			default: 'bold',
		}
	},
}
</script>

<style scoped>

.success {
	color: green;
}

.error {
		color: red;
}

.staticClass {
	font-weight:bold;
}
</style>
