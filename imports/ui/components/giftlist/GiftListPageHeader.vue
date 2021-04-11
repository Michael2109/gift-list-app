<template>
  <div class="row align-items-center" id="gift-list-page-header">

    <div class="col-2  text-light">
      Profile
    </div>
    <div class="col">
      <div class="row align-items-center">
        <h4 class="col text-light">{{ giftList.personName }}</h4>

        <h5 class="col text-light">{{ giftList.gifts.length }} gifts</h5>
      </div>

    </div>


    <div class="col">
      <div class="col">
        <div class="float-right">
          <div class="row">
            <button v-on:click="console.log(`Unimplemented`)">SHARE</button>
            <create-gift-modal  v-on="$listeners" :gift-list="this.giftList"/>
            <button v-on:click="handleDeleteClicked">DELETE</button>
            <button v-on:click="handleBackClicked">Back</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import CreateGiftModal from "./CreateGiftModal";
import Vue from "vue";
import {GiftListManager} from "../../managers/GiftListManager";

export default Vue.extend( {
  components: {CreateGiftModal},
  props: ['giftList'],
  methods: {
    handleBackClicked(){
      this.$router.push({name: "GiftLists"});
    },
    handleDeleteClicked(){
      GiftListManager.getInstance().deleteGiftList(this.giftList._id, () => {
        this.$router.push({name: "GiftLists"});
      })
    }
  }
});
</script>

<style scoped>

#gift-list-page-header {
  background-color: darkblue;
}
</style>