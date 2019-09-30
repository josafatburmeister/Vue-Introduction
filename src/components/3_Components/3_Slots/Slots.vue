<template>
<div class="root">
	<h3>Slots</h3>

	<Document>
		<!-- use template and v-slot to access named slots -->
		<template v-slot:heading>First example</template>
		<!-- shorthand, does the same thing as line before -->
		<template #heading>First example</template>

		<!-- use 'default' to access unnamed default slot -->
		<template #default>Default content.</template>

		<!-- you can bind slot names to a variable -->
		<template #[chosenSlot]>Default content.</template>

		<!-- you can access slot context via slotProps -->
		<template #footer="slotProps">The body contains {{slotProps.wordCount}} words.</template>
		<!-- you can also use destructuring suntax for that -->
		<template #footer="{wordCount}">The body contains {{wordCount}} words.</template>
	</Document>
</div>
</template>

<script>
import Document from './Document'

export default {
	name: 'Slots',
	components: { Document },
	props: {
		chosenSlot: {
			type: String,
			default: 'footer',
		}
	}
}
</script>

<style scoped>
</style>
