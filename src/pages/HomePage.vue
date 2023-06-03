<template>
 <div class="container-fluid">


  <div class="row">
    <div class="col-3">
      <SearchBar />

    </div>

<!-- I should make a row for creating post text area and another row for posts to draw  -->
<!-- <img :src="Account.picture" alt=""> -->
<div class="col-6">
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
</div>
  <!-- </card> -->
    <!-- <div class="col-3">
      i will put the adds here
    </div> -->
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

export default {
  setup() {
    const editable = ref({})
    async function getPosts(){
      try {
        await postsService.getPosts()

      } catch (error) {
        Pop.error(error)
        logger.log(error)
      }
    }

    // async function like(){

    // }
    onMounted(() => {
      getPosts()

    })

    return {
      editable,
      posts: computed(() => AppState.posts),

      async createPost(){
        try {
          const formData = editable.value
          window.event.preventDefault()
          await postsService.createPost(formData)
          editable.value = {}


        } catch (error) {
          Pop.error(error)
          logger.log(error)
        }
      }
    }
  }
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
