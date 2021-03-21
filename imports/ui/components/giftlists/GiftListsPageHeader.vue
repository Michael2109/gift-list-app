<template>
  <div class="row app-header d-flex align-items-center" id="gift-lists-page-header">

    <div class="col-2">


      <b-dropdown id="dropdown-menu-items" text="Account" class="m-md-2">
        <b-dropdown-item>Account</b-dropdown-item>
        <b-dropdown-item @click="logout">Logout</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>{{getEmailAddress() }}</b-dropdown-item>
      </b-dropdown>
    </div>

    <h3 class="col text-light">Gift Lists</h3>

    <div class="col-auto">
              <create-gift-list-modal v-on="$listeners"/>
    </div>


  </div>
</template>

<script lang="ts">
import CreateGiftListModal from "./CreateGiftListModal";
import Vue from "vue";

export default Vue.extend( {
  components: {CreateGiftListModal},
  methods: {
    getEmailAddress(){
      const user = Meteor.user();
      if(user){
        return user.emails[0].address;
      } else {
        return "Not logged in";
      }
    },
    logout() {
      Meteor.logout();

      this.$router.push({
        name: 'Login'
      });
    }
  }
});
</script>

<style scoped>
#gift-lists-page-header {
  background-color: darkblue;
}
</style>