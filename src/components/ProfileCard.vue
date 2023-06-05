<template>
    <div class="col-8">
        <div class="card">
    <div class="card-body">
      <div class="profile-card mb-2 text-center">
        <p class="text-center mb-0">
          <img class="rounded-circle img-fluid profile-picture" :src="profile?.picture" :alt="profile?.name">
          <img class="rounded-circle img-fluid profile-picture" :src="profile?.coverImg" :alt="profile?.name">
          <p>{{ profile?.email }}</p>
          <p>{{ profile?.bio }}</p>
          <p>{{ profile?.status }}</p>
          <a :href="profile?.socialPlatform"></a>
        </p>
      </div>
      <p> <i class="mdi mdi-account"></i> <b>{{ profile?.name }}</b></p>




      <p v-if="profile?.socialPlatform">
        {{ profile?.socialPlatform }}
        <i class="mdi mdi-github"></i>
        <!-- <a :href="profile.socialPlatform" target="_blank" rel="noopener"> -->
        <!-- </a> -->

          <div class="col-7">
        <PostCard  :postProp="p"/>
      </div>

      </p>
    </div>
  </div>
  <div class="col-3 third">
    Adds:
    <div class="" v-for="a in add" :key="a.title">
      <div>
      <AddsCard :AddProp="a" />
    </div>
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
        profile: {type:Object, required:true}
    },
    setup(props){
        // const route = useRoute()


        return {

            coverImg:computed(() =>`url(${props.Profile?.coverImg})`),
            add: computed(() => AppState.add)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
