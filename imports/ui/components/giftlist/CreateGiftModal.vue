<template>
  <div>
    <b-button @click="modalShow = !modalShow">+</b-button>

    <b-modal id="create-gift-modal" title="Create Gift" v-model="modalShow" @show="resetModal"
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
import {Gift} from "../../../objects/gift/Gift";
import Vue from "vue";

export default Vue.extend({
  props: ["giftList"],
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
      this.nameState = valid;
      this.descriptionState = valid;
      this.costState = valid;
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
          this.$bvModal.hide('create-gift-modal');
        })
      }
    },

    async createGift() {

      const gift = new Gift().setName(this.name).setDescription(this.description).setCost(this.cost);

      GiftListManager.getInstance().addGift(this.giftList._id, gift, () => {
        this.$emit('gift-created');
      });
    }

  }
});
</script>

<style scoped>

</style>