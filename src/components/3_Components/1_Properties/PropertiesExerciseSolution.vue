<template>
	<div class="root">
		TODO1: This component should accept a street name, street number, postal code  as mandatory properties.
		<br/>
		TODO2: Provide default values for all properties.
		<br/>
		TODO3: Street number has to be an positive integer, postal code should have five digits.
		<br/>
		TODO4: From this components the full postal address string should be computed.
		<br/>
		<br/>
		Postal address: {{ postalAddress }}
	</div>
</template>

<script>

export default {
	name: 'PropertiesExercise',
	props: {
		streetName: {
			type: String,
			default: 'Prof.-Dr.-Helmert-Straße'
		},
		streetNumber: {
			type: Number,
			default: 2,
			validator: function(value) {
				return value > 0 && Number.isInteger(value);
			}
		},
		postalCode: {
			type: Number,
			default: 14482,
			validator: function(value) {
				return Number.isInteger(value) && value >= 10000 && value <= 99999;
			}
		},
		townName: {
			type: String,
			default: 'Potsdam'
		},
		countryName: {
			type: String,
			default: 'Germany'
		},
	},
	computed: {
		postalAddress: function() {
			return `${this.streetName} ${this.streetNumber.toString()}, ` + 
				`${this.postalCode.toString()} ${this.townName}, ` +
				`${this.countryName}`;
		}
	},
}
</script>

<style scoped>
</style>
