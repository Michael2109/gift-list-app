<template>

  <div>
    <div v-if="this.giftList !== undefined">

      <gift-list-page-header @gift-created="updateGiftList" :gift-list="giftList"/>

      <div v-for="gift in this.giftList.gifts" ><gift-item :gift="gift"></gift-item></div>
    </div>

  <div v-if="this.giftList === undefined">
    No Gift List found
  </div></div>
</template>

<script lang="ts">
import GiftListPageHeader from "../components/giftlist/GiftListPageHeader";
import {GiftListManager} from "../managers/GiftListManager";
import GiftItem from "../components/giftlist/GiftItem";
import Vue from "vue";

export default Vue.extend({
  components: {GiftItem, GiftListPageHeader},
  props: ['giftListId'],
  created() {
    console.log(this.giftListId)
  },
  mounted() {
    this.updateGiftList();
  },
  data() {
    return {
      giftList: undefined
    };
  },
  methods: {
    updateGiftList() {
      GiftListManager.getInstance().getGiftListById(this.giftListId, giftList => {
        this.giftList = giftList;
      });

    }
  }

});
</script>