<template>
<div class="root">

	<h3>v-for</h3>

	<ul>
		<!-- v-for can be used to render elements of an array -->
		<li v-for="item in itemsArray" :key="item.id">{{item.name}}</li>

		<br/>

		<!-- v-for can be used to render properties of an object -->
		<li v-for="item in itemsObject" :key="item.id">{{item}}</li>
		<li v-for="(value, name) in itemsObject" :key="name">{{name}}: {{value}}</li>

		<br/>

		<!-- v-for can be used to render numbers in a range -->
		<li v-for="i in 3" :key="i">{{i}}</li>
	</ul>

	<!-- v-for can be used on components -->
	<TestComponent v-for="item in itemsArray" :key="item.id" :msg="item.name"/>

</div>
</template>

<script>
import TestComponent from '../TestComponent'

export default {
	name: 'VForExample',
	components: { TestComponent },
	data: function() {
		return {
			itemsArray: [
				{
					id: 1,
					name: 'Todo 1'
				},
				{
					id: 2,
					name: 'Todo 2'
				},
				{
					id: 3,
					name: 'Todo 3'
				},
			],
			itemsObject: {
				'Todo 4': 'Learn vue',
				'Todo 5': 'Use vue' 
			},
		}
	},
}
</script>

<style scoped>
</style>
