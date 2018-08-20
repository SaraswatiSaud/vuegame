<template>
  <div class="test">
    <input type="text" v-model="title"><br />
    <!-- <span v-html="title"></span> -->
    <h1>{{title}}</h1>
    <p>{{user.firstName}}</p>
    <p v-text="user.lastName"></p>
    <p v-if="showName" v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }">User is showing</p>
    <p v-else>Nobody is listing</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button v-on:click="greet('Hello World')">click me</button>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit" />
    <br /><br />
    <div v-bind:class="alertObject">
      <label>First Name:</label><input type="text" v-model="user.firstName">
      <br />
      <label>Last Name:</label><input type="text" v-model="user.lastName">
      <h3>{{fullName}}</h3>
      <h2>{{msg}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'Codyssey Web Nepal'
    }
  },
  data () {
    return {
      title: 'This is test message',
      user: {
        firstName: 'Saraswati',
        lastName: 'Saud'
      },
      showName: true,
      items: [
        {title: 'Title One'},
        {title: 'Title Two'},
        {title: 'Title Three'}
      ],
      alertObject: {
        alert: true
      },
      bgColor: '#eee',
      bgWidth: '100%',
      bgHeight: '30px'
    }
  },
  methods: {
    greet: function (parameter) {
      alert(parameter)
    },
    pressKey: function (e) {
      console.log(e.target.value)
    },
    enterHit: function () {
      console.log('You hit enter')
    }
  },
  computed: {
    fullName: function () {
      return this.user.firstName + ' ' + this.user.lastName
    }
  }
}
</script>

<style scoped>
  .alert {
    border: 1px solid black;
  }
</style>
