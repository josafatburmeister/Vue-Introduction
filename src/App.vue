<template>
	<div id="app">
		<div id="header">
			<img src='./assets/logo.png'/>
			<h1>An introdution to Vue</h1>
			Josafat-Mattias Burmeister, 7.10.2019
		</div>
		<br/>
		<div id="table-of-contents">
			<a href="/directives">1 Directives</a>
			<br/>
			<a href="/templates">2 Templates</a>
			<br/>
			<a href="/components">3 Components</a>
			<br/>
			<a href="/classbindings">4 Class and style bindings</a>

		</div>
	</div>
</template>

<script>

export default {
	name: 'app',
}
</script>

<style>
@import '../static/styles/styles.css';

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}

#header {
	text-align: center;
}

#table-of-contents {
	text-align: left;
	margin-left: 450px;
}
</style>
