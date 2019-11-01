<template>
    <div class="terminal">
        <div class="code">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Terminal',
}
</script>

<style lang="scss">
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