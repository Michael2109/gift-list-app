<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import GiftListsPage from "./pages/GiftListsPage";

export default {
  name: 'app',
  components: {GiftListsPage}
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>