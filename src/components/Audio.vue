<template>
	<div id="app1">
			Recording
			<audio-recorder
				upload-url="some url"
				:attempts="3"
				:time="2"
				:start-record="callback"
				:stop-record="callback"
				:start-upload="callback"
				:successful-upload="callback"
				:failed-upload="callback"/>
		</div>
</template>

<script>
	export default {
		methods: {
			callback (msg) {
				console.debug('Event: ', msg)
			}
		}
	}
</script>
