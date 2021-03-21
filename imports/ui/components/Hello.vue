<template>
  <div>
    <button @click="increment">Click Me</button>
    <p>You've pressed the button {{counter}} times.</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter += 1
    }
  },
});
</script>

<style scoped>
  p {
    font-family: serif;
  }
</style>
