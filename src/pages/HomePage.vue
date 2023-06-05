<template>
 <div class="container-fluid">


  <div class="row network">
    <div class="col-md-3 search first">
      <SearchBar />

    </div>

<!-- I should make a row for creating post text area and another row for posts to draw  -->
<!-- <img :src="Account.picture" alt=""> -->
<div class="col-6 second">
  <div class="row">
    <div class="col-">
<textarea name="body" type="text" class="form-control mt-2" id="body" cols="20" rows="5" placeholder="whats new!" v-model="editable.body"></textarea>
<div class="d-flex justify-content-between"></div>
<form @submit="createPost" >
  <div class="d-flex justify-content-between">
    <div>
  <i class="mdi mdi-file-multiple"></i>Photo/Video
  <input type="url" class="rounded" v-model="editable.imgUrl">
</div>
  <button class="rounded-top mx-3 btn btn-primary">POST</button>
</div>
</form>
</div>
</div>

<div class="row">
<div class="col- py-1 px-2 " v-for="p in posts" :key="p.id">
  <div>

    <!-- <card class="post"> -->
    <PostCard :postProp="p" />
  </div>
</div>
</div>
<div class="d-flex justify-content-between">
<button :disabled="!newer" @click="changePage(newer)" class="btn btn-primary">NEWER</button>
 <button :disabled="!older" @click="changePage(older)" class="btn btn-primary">OLDER</button>
</div>
</div>
  <!-- </card> -->
  <div class="col-3 third">
    Adds:
    <div class="" v-for="a in add" :key="a.title">
      <div>
      <AddsCard :AddProp="a" />
    </div>
  </div>
    </div>
</div>
 </div>

</template>

<script>
import { onMounted, ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import {postsService} from '../services/PostsService.js'
import { Account } from '../models/Account.js';
import AddsCard from '../components/AddsCard.vue';

export default {
    setup() {
        const editable = ref({});
        async function getAdds() {
            try {
                await postsService.getAdds();
            }
            catch (error) {
                Pop.error(error);
                logger.log(error);
            }
        }
        async function getPosts() {
            try {
                await postsService.getPosts();
            }
            catch (error) {
                Pop.error(error);
                logger.log(error);
            }
        }
        // async function like(){
        // }
        onMounted(() => {
            getPosts();
            getAdds();
        });
        return {
            editable,
            posts: computed(() => AppState.posts),
            newer: computed(() => AppState.newerPage),
            older: computed(() => AppState.olderPage),
            add: computed(() => AppState.add),
            async createPost() {
                try {
                    const formData = editable.value;
                    window.event.preventDefault();
                    await postsService.createPost(formData);
                    editable.value = {};
                }
                catch (error) {
                    Pop.error(error);
                    logger.log(error);
                }
            },
            async changePage(url) {
                try {
                    await postsService.changePage(url);
                }
                catch (error) {
                    Pop.error(error);
                    logger.log(error);
                }
            }
        };
    },
    components: { AddsCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;


  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }

  }


}
</style>
