<template>
    <div class="col-3">
        <div class="card">
    <div class="card-body">
      <div class="profile-card mb-2 text-center">
        <p class="text-center mb-0">
          <img class="rounded-circle profile-picture" :src="profile.picture" :alt="profile.name">
        </p>
      </div>
      <p> <i class="mdi mdi-account"></i> <b>{{ profile.name }}</b></p>
      <p v-if="profile.socialPlatform">

        <a :href="profile.socialPlatform" target="_blank" rel="noopener">
          <i class="mdi mdi-social-distance-6-feet"></i>
        </a>

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
    setup(prop){
        // const route = useRoute()


        return {

            coverImg:computed(() =>`url(${props.profile?.coverImg})`)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
