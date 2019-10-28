<template>
  <div id="app">
    <h1>Number</h1>
    <h2>{{number}}</h2>
    <h4>{{error}}</h4>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      number: null,
      error: ''
    }
  },
  mounted () {
    axios.get('https://get-lucky.netlify.com/.netlify/functions/get')
    .then((response) => {
      this.number = response.data.data;
    })
    .catch((error) => {
      this.error = error;
    })
  }
}
</script>

<style>

</style>
