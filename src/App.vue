<template>
	<div id="app">
		<!-- <test></test> -->
		<!-- <users></users> -->
	</div>
</template>

<script>
import Test from './components/test'
import Users from './components/users'
import Audio from './components/audio'
import Udemy from './components/udemy'
import Design from './components/design'

export default {
	name: 'App',
	components: {
		Test, Users, Audio, Udemy, Design
	}
}
</script>

<style>
	#app {
		text-align: center;
		margin-top: 100px;
	}
</style>
