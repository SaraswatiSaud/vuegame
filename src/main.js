// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import AudioRecorder from 'vue-audio-recorder'
import App from './App'
import Users from './components/Users'
import Test from './components/Test'
import Audio from './components/Audio'
import Udemy from './components/Udemy'
import Design from './components/Design'

Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(AudioRecorder)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component: Users},
		{path: '/test', component: Test},
		{path: '/audio', component: Audio},
		{path: '/udemy', component: Udemy},
		{path: '/design', component: Design}
	]
})

new Vue({
	router,
	template: `
		<div id="app">
			<ul>
				<li><router-link to="/">Users</router-link></li>
				<li><router-link to="/test">Test</router-link></li>
				<li><router-link to="/audio">Audio</router-link></li>
				<li><router-link to="/udemy">Udemy</router-link></li>
				<li><router-link to="/design">Design</router-link></li>
			</ul>
			<router-view></router-view>
		</div>
	`,
}).$mount('#app')
