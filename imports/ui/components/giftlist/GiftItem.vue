<template>
  <div class="row align-items-center border">

    <div class="col">
      <div class="row align-items-center">
        <div class="col-4">
          {{ gift._name }}
        </div>
        <div class="col-4">
          {{ gift._description }}
        </div>
        <div class="col-4">
          {{ gift._cost }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({
  props: {
    gift: {
      type: Object
    }
  },
  mounted() {
    console.log("Mounted");
    console.log(this.gift);
  },
  methods: {}
});
</script>

<style scoped>

</style>