<template>
  <div id="app">
    <a href="https://github.com/pniedzwiedzinski/get-lucky" class="GitHub">
      <img src="../assets/GitHub.png" alt="GitHub">
    </a>
    <div class="container">
      <h1>Szczęśliwy Numerek</h1>
      <div class="loading">
        <span class="dot dot1"></span>
        <span class="dot dot2"></span>
        <span class="dot dot3"></span>
        <h2>{{number}}</h2>
      </div>
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
  el: '#loading',
  data() {
    return {
      number: null,
      error: null,
    }
  },
  mounted () {
    this.getLuckyNumber();
  },
  methods: {
    getLuckyNumber() {
      axios.get('https://get-lucky.netlify.com/.netlify/functions/get')
      .then(response => {
        this.number = response.data.data;
        const dot = document.querySelectorAll(".dot");
        dot.forEach(item => {
          item.style.display = "none";
        });
      })
      .catch(error => {
        this.error = error;
      })
    }
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

[v-cloak] > * {
  display: none;
}

[v-cloak]::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;
  height: 1rem;
  background-color: black;
  z-index: 1;
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
    margin-bottom: 1rem;
  }

  .loading {
    h2 {
      margin: 3rem 0 8rem 0;
      font-size: 12rem;
      font-weight: 700;
    }
    .dot{
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #03303F;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .dot1 {
      left: 47%;
      animation: loading 1s linear infinite;
    }
    .dot2 {
      animation: loading 1s linear .25s infinite;
    }
    .dot3 {
      left: 53%;
      animation: loading 1s linear .5s infinite;
    }
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

@keyframes loading {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@media only screen and (max-width: 1340px) {
  .container {
    h1 {
      font-size: 3rem;
    }
    .loading {
      .dot1 {
        left: 46%;
      }
      .dot3 {
        left: 54%;
      }
    }
  }
}

@media only screen and (max-width: 680px) {
  .container {
    h1 {
      font-size: 3rem;
    }
    h4 {
      font-size: 0.85rem;
    }
    .loading {
      h2 {
        font-size: 8rem;
        margin: 1rem 0 4rem 0;
      }
      .dot1 {
        left: 44%;
      }
      .dot3 {
        left: 56%;
      }
    }
  }
}

@media only screen and (max-width: 360px) {
  .container {
    h1 {
      font-size: 2.5rem;
    }
    .loading {
      h2 {
        margin: 1rem 0 2rem 0;
      }
    }
  }
}

</style>
