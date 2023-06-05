<template>
    <div class="col-8">
        <div class="card">
    <div class="card-body">
      <div class="profile-card mb-2 text-center">
        <p class="text-center mb-0">
          <img class="rounded-circle img-fluid profile-picture" :src="profile.picture" :alt="profile.name">
          <img class="rounded-circle img-fluid profile-picture" :src="profile.coverImg" :alt="profile.name">
        </p>
      </div>
      <p> <i class="mdi mdi-account"></i> <b>{{ profile.name }}</b></p>




      <p v-if="profile.socialPlatform">
        {{ profile.socialPlatform }}
        <i class="mdi mdi-github"></i>
        <!-- <a :href="profile.socialPlatform" target="_blank" rel="noopener"> -->
        <!-- </a> -->

      </p>
    </div>
  </div>

        <!-- <rout-link >

        </rout-link> -->


        <!-- {{ postProp.creator.name }} -->
    </div>
</template>


<script>
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import { useRoute } from 'vue-router';
import { Profile } from '../models/Profile.js';
import { Account } from '../models/Account.js';

export default {
    props:{
        profile: {type:[Profile, Account], required:true}
    },
    setup(props){
        // const route = useRoute()


        return {

            coverImg:computed(() =>`url(${props.Profile?.coverImg})`)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
