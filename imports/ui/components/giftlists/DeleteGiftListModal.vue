<template>
  <div>
    <b-button @click.stop="modalShow = !modalShow">-</b-button>

    <b-modal id="delete-gift-list-modal" title="Delete Gift List" v-model="this.modalShow" ok-title="Delete" @cancel="onCancel" @ok="onConfirm">

      <div class="modal-body">
        <p>Delete gift list "{{ giftList.personName }}"?</p>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import {GiftListManager} from "../../managers/GiftListManager";
import Vue from "vue";


export default Vue.extend( {
  props: {
    giftList: {
      type: Object
    }
  },
  data() {
    return {
      modalShow: false
    }
  },
  methods: {

    onCancel() {
     this. modalShow = false;
    },

    onConfirm() {
      this.deleteGiftList();
      this.modalShow = false;
    },

    async deleteGiftList() {

      GiftListManager.getInstance().deleteGiftList(this.giftList._id, () => {
        this.$emit('gift-list-deleted', this.giftList._id);
      });
    }

  }
});
</script>

<style scoped>

</style>