<template>
<div class="root">
	<h3>Computed Properties and Watchers</h3>
	<br/>
	firstName: {{ firstName }}
	<br/>
	lastName: {{ lastName }}
	<br/>
	fullName: {{ fullName }}
	<br/>
	fullNameWithSetter: {{ fullNameWithSetter }}
	<br/>
	fullNameCreatedByWatcher: {{ fullNameCreatedByWatcher }}
</div>
</template>

<script>
export default {
  name: 'Watchers',
  props: {
	firstName: {
		type: String,
		default: 'Max'
	},
	lastName: {
		type: String,
		default: 'Mustermann',
	},
	fullNameCreatedByWatcher: String,
  },
  computed: {
	// computed value is returned from cache as long as firstname and lastname don't change
	// when firstname or lastname change fullName is recomputed and all bindings are updated
	fullName: function() {
			return this.firstName + ' ' + this.lastName
	},
	// per default computed properties are read only
	// to make computed properties writable you have to provide a setter
	fullNameWithSetter: {
		get: function() {
			return this.firstName + ' ' + this.lastName
		},
		set: function(newValue) {
			var names = newValue.split(' ');
			this.firstName = names[0];
			this.lastName = names[names.length - 1];
		}
	},
	// function will only be executed on first access as javascript expression stays the same
	date: function() {
		return (new Date()).toLocaleDateString()
	} 
  },
  watch: {
	// method is executed whenever firstName changes
	// should be only used when computed property is not feasible, e.g. to fetch data from server
	firstName: function (newValue) {
		this.fullNameCreatedByWatcher = newValue + ' ' + this.lastName;
	},
	lastName: function (newValue) {
		this.fullNameCreatedByWatcher = this.firstName + ' ' + newValue;
	},
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
