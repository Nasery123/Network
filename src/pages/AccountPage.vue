<template>
  <div class="about text-center">
   <div class="container-fluid">
    <div class="col-md-3">

      <ProfileCard :profile="account" />


    </div>
    <div class="col-md-3 m-auto">
      <AccountForm />
    </div>
    </div>
   </div>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>

</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import AccountForm from '../components/AccountForm.vue';
export default {
    setup() {
        return {
            account: computed(() => AppState.account)
        };
    },
    components: { AccountForm }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
