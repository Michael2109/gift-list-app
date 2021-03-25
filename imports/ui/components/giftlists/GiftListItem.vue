<template>
  <transition name="fade">
  <div class="row align-items-center border" v-on:click="onContainerClicked">
    <div class="col-2">
      <div>Profile</div>
    </div>
    <div class="col">
      <div class="row align-items-center">
        <div class="col-8">
          {{ giftList.personName }}
        </div>
        <div class="col-2">
          {{ giftList.gifts.length }} gifts
        </div>
        <div class="col-2">
          <delete-gift-list-modal :gift-list="giftList" v-on="$listeners"/>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script lang="ts">

import DeleteGiftListModal from "./DeleteGiftListModal";
import Vue from "vue";

export default Vue.extend( {
  components: {DeleteGiftListModal},
  props: {
    giftList: {
      type: Object
    }
  },
  methods: {

    onContainerClicked() {

      this.$router.push({
        name: 'GiftList',
        params: {
          giftListId: this.giftList._id
        }
      });
    }
  }
});
</script>

<style scoped>
</style>