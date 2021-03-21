<template>
  <div>
    <gift-lists-page-header  @gift-list-created="updateGiftLists"/>

    <div v-for="giftList in this.giftLists">
      <gift-list-item  @gift-list-deleted="onGiftListDeleted" :gift-list="giftList"></gift-list-item>
    </div>

  </div>
</template>

<script lang="ts">
import GiftListsPageHeader from "../components/giftlists/GiftListsPageHeader";
import GiftListItem from "../components/giftlists/GiftListItem";
import {GiftListManager} from "../managers/GiftListManager";
import Vue from "vue";

export default Vue.extend({
  components: {GiftListsPageHeader, GiftListItem},
  mounted() {
    this.updateGiftLists();
  },
  created () {
    this.$on('gift-list-created', this.updateGiftLists);
  },
  data() {
    return {
      giftLists: []
    };
  },
  methods: {
    onGiftListDeleted(giftListId){

      console.log(giftListId)

      // Remove it from the displayed array
      const removeIndex = this.giftLists.map(giftList => giftList._id)
          .indexOf(giftListId);

      if(removeIndex >= 0){
        this.giftLists.splice(removeIndex, 1);
      }
    },
    updateGiftLists() {
      GiftListManager.getInstance().getGiftLists((giftLists => this.giftLists = giftLists));
    }
  }
});
</script>