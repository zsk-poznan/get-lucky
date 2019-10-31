<template>
    <div class="terminal">
        <div class="code">
            <h4 style="color: #DE3131;">{{start}}</h4>
            <h4> {{rest}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Terminal',
    props: {
        start: String,
        rest: String
    }
}
</script>

<style lang="scss" scoped>
.terminal {
    background-color: #03303F;
    width: 40%;
    border-radius: 0.5rem;
    color: white;
    padding: 1rem 1.5rem;
    text-align: left;
    white-space: nowrap;
    overflow-x: auto;
    .code {
      h4 {
      display: inline;
      font-weight: 300;
      }
    }
  }
</style>