<template>
  <div class="row align-items-center border">

    <div class="col">
      <div class="row align-items-center">
        <div class="col-4">
          {{ gift.name.name }}
        </div>
        <div class="col-4">
          {{ gift.description }}
        </div>
        <div class="col-4">
          {{ gift.cost }}
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
  methods: {
  }
});
</script>

<style scoped>

</style>