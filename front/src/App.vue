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
      </div>
      <h2>{{number}}</h2>
      <div v-if="error" class="error">
        <h4>{{error}}</h4>
      </div>
      <Terminal>
        <h4 style='color: #DE3131;'>curl </h4><h4>https://get-lucky.netlify.app/.netlify/functions/get</h4>
      </Terminal>
    </div>
  </div>
</template>

<script>
import Terminal from './components/Terminal.vue';
import axios from 'axios';

export default {
  components: {
    Terminal,
  },
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
      axios.get('https://get-lucky.netlify.app/.netlify/functions/get')
      .then(response => {
        this.number = response.data.data.luckyNumber;
        document.querySelector('.loading').style.display = "none";
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

@mixin animation($delay: 0s) {
  animation: loading 1s linear $delay infinite;
}

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 3.5rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  h2 {
      margin: 3rem 0 8rem 0;
      font-size: 12rem;
      font-weight: 700;
  }

  .loading {
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
      left: 49%;
      @include animation();
    }
    .dot2 {
      @include animation(.25s);
    }
    .dot3 {
      left: 51%;
      @include animation(.5s);
    }
  }

  .error {
    color: red;
    margin-bottom: 1rem;
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
    .terminal {
      width: 60%;
    }
    .loading {
      .dot1 {
        left: 48%;
      }
      .dot3 {
        left: 52%;
      }
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
    .terminal {
      width: 80%;
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
