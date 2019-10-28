<template>
  <div id="app">
    <a href="https://github.com/pniedzwiedzinski/get-lucky" class="GitHub">
      <img src="../assets/GitHub.png" alt="GitHub">
    </a>
    <div class="container">
      <h1>Szczęśliwy Numerek</h1>
      <h2>{{number}}</h2>
      <h4>{{error}}</h4>
      <div class="curl">
        <h4 style="color: #DE3131;">curl </h4>
        <h4>https://get-lucky.netlify.com/.netlify/functions/get</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      number: null,
      error: null
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

*,*::after,*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #03303F;
  background-color: #FCFCF1;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 12rem;
    margin: 3rem 0 8rem 0;
    font-weight: 700;
  }

  .curl {
    background-color: #03303F;
    border-radius: 0.5rem;
    color: white;
    padding: 1rem 1.5rem;
    text-align: left;
    h4 {
      display: inline;
      font-weight: 300;
    }
  }
}

.GitHub {
    position: fixed;
    right: 5%;
    top: 5%;
  }

@media only screen and (max-width: 1340px) {
  .container {
    h1 {
      font-size: 3rem;
    }
  }
}

@media only screen and (max-width: 680px) {
  .container {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 8rem;
      margin: 1rem 0 4rem 0;
    }
    h4 {
      font-size: 0.85rem;
    }
  }
}

@media only screen and (max-width: 360px) {
  .container {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      margin: 1rem 0 2rem 0;
    }
  }
}

</style>
