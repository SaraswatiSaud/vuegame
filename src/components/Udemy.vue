<template>
	<div>
		<h3 v-once>{{ title }}</h3>
		<input type="text" @keyup.enter.space="keyEnter" />
		<p>{{ sayGreet() }} - <a :href="link">Udemy</a></p>
		<button @click="counter++">Increment</button>
		<button @click="counter--">Decrement</button>
		<button @click="secondCounter++">Second Increment</button>
		<p>{{ counter }} | {{ secondCounter }}</p>
		<p>Result: {{ result() }} | {{ output }}</p>
		<p @mousemove="updateCoordinates">
			Coordinates {{ x }} / {{ y }}
			<span @mousemove.stop>DEAD SPOT</span>
		</p>
		<input type="text" v-model="color" :style="{border: '2px solid color'}" /><br/>
		<div
			class="demo"
			@click="attachRed = !attachRed"
			:class="divClasses"></div>
		<div
			class="demo"
			@click="attachRed = !attachRed"
			:class="{blue: attachRed}"></div>
		<div
			class="demo"
			@click="attachRed = !attachRed"
			:class="color"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '----Vue.js----',
			link: 'https://www.udemy.com/',
			finishedLink: '<a href="https://google.com">Google</a>',
			counter: 0,
			secondCounter: 0,
			x: 0,
			y:0,
			attachRed: false,
			color: 'green'
		}
	},
	computed: {
		output: function () {
			return this.counter > 5 ? 'Greater than 5' : 'Less than 5'
		},
		divClasses: function () {
			return {
				red: this.attachRed,
				yellow: !this.attachRed
			}
		}
	 },
	watch: {
		counter: function (value) {
			var vm = this;
			setTimeout(function() {
				vm.counter = 0;
			}, 2000)
		}
	},
	methods: {
		sayGreet: function () {
			this.title = 'Learn Vue.js from ';
			return this.title;
		},
		clickButton:  function () {
			this.counter--;
		},
		updateCoordinates: function (event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		keyEnter: function () {
			alert('This is alert message!')
		},
		result: function () {
			return this.counter > 5 ? 'Greater than 5' : 'Less than 5'
		}
	}
}
</script>

<style>
	.demo {
		height: 50px;
		width: 50px;
		background-color: #afded4;
		display: inline-block;
		margin: 10px;
	}
	.red {
		background-color: red;
	}
	.blue {
		background-color: blue;
	}
	.green {
		background-color: green;
	}
	.yellow {
		background-color: yellow;
	}
</style>
