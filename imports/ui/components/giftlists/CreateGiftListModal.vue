<template>
  <div>
    <b-button @click="modalShow = !modalShow">+</b-button>

    <b-modal  id="create-gift-list-modal" title="Create Gift List"  v-model="modalShow" @show="resetModal"
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
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {GiftListManager} from "../../managers/GiftListManager";
import {GiftList} from "../../../objects/giftlist/GiftList";

export default {
name: "CreateGiftListModal",
  data() {
    return {
      modalShow: false,
      name: "",
      nameState: null
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

        this.createGiftList();

        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('create-gift-list-modal');
        })
      }
    },

    async createGiftList(){
      const giftList = new GiftList();
      giftList.personName = this.name;
      giftList.userId = Meteor.userId();

      const externalThis = this;

      GiftListManager.getInstance().addGiftList(giftList, () => {
        console.log("Gift list added")
        externalThis.$emit('gift-list-created');
      });
    }

  }
}
</script>

<style scoped>

</style>