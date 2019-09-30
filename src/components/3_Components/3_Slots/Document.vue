<template>
	<div class="root">
		<h1 >
			<!-- You can use names to provide several slots -->
			<slot name="heading"/>
		</h1>
		<div ref="body">
			<slot>
				<!-- Slots can have fallback content -->
				Lorem ipsum dolor.
			</slot>
		</div>
		<div>
			<b>
				<!-- Slots can provide context -->
				<slot name="footer" :wordCount="wordCount"/>
			</b>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Document',
	data: function() {
		return {
			wordCount: 0,
		}
	},
	mounted() { this.computeWordCount() },
	updated() { this.computeWordCount() },
	methods: {
		computeWordCount() {
			this.wordCount = this.$refs.body.innerHTML.split(' ').length;
		} 
	}
}
</script>

<style scoped>
</style>
