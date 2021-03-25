<template>
  <div>
    <b-button @click="modalShow = !modalShow">+</b-button>

    <b-modal  id="create-gift-modal" title="Create Gift"  v-model="modalShow" @show="resetModal"
              @hidden="resetModal" @ok="handleOk">

      <div class="modal-body">
        <form ref="form" @submit.stop.prevent="handleSubmit">

          <b-form-group
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
              :state="nameState"
          >
            <b-form-input
                id="name-input"
                v-model="name"
                :state="nameState"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              label="Description"
              label-for="description-input"
              invalid-feedback="Description is required"
              :state="descriptionState"
          >
            <b-form-input
                id="description-input"
                v-model="description"
                :state="descriptionState"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              label="Cost"
              label-for="cost-input"
              invalid-feedback="Cost is required"
              :state="costState"
          >
            <b-form-input
                id="cost-input"
                v-model="cost"
                :state="costState"
                required
            ></b-form-input>
          </b-form-group>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import {GiftListManager} from "../../managers/GiftListManager";
import {GiftList} from "../../../objects/giftlist/GiftList";
import {Gift} from "../../../objects/gift/Gift";
import {findFreeId} from "../../utils/Utils";
import Vue from "vue";

export default Vue.extend( {
  props: {
  giftList : {
    type: GiftList
  }
  },
  data() {
    return {
      modalShow: false,
      name: "",
      nameState: null,
      description: "",
      descriptionState: null,
      cost: "",
      costState: null
    }
  },
  methods: {
    isValid() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = '';
      this.nameState = null;
      this.description = '';
      this.descriptionState = null;
      this.cost = '';
      this.costState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (this.isValid()) {

        this.createGift();

        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('create-gift-list-modal');
        })
      }
    },

    async createGift(){

      // todo This should be done server side
      const freeId =  findFreeId(this.giftList.gifts.map(gift => gift._id));

      const gift = new Gift();
      gift.name = this.name;
      gift.description = this.description;
      gift.cost = this.cost;

      const externalThis = this;

      this.giftList.gifts.push(gift);

      GiftListManager.getInstance().updateGiftList(this.giftList, (success) => {
        console.log("Gift list added")
        externalThis.$emit('gift-list-created');
      });
    }

  }
});
</script>

<style scoped>

</style>