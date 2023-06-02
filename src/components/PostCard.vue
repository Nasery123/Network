<template>
    <!-- <div class="row">
        <div class="col-md-3 post"> -->
            <div v-if="postProp.id" class="post p-4">

                <div class="col-6 d-flex">
                    <router-link :to="{name: 'Profile', params: { id: postProp.creatorId }}">
                    <img class="img-fluid rounded-circle post-img" :src="postProp.creator.picture" alt="">
                </router-link>
                    <p class="px-4 py-5">{{ postProp.creator.name }}</p>
                </div>
                <p>{{ postProp.body }}</p>

                <img class="img-fluid" :src="postProp.imgUrl" alt="">
                <div class="d-flex justify-content-between">
                <p @click="postLikes(postProp.id)" class="fs-1">👍<span id="like">{{ postProp.likeIds.length }}</span></p>
                <p @click="deletPost(postProp.id)" v-if="postProp.creator.id == account.id" class="fs-2 align-items-end"><i class="mdi mdi-delete-outline"></i></p>
            </div>
            </div>
        <!-- </div>
    </div> -->

</template>


<script>
import { computed } from '@vue/reactivity';
import { Post } from '../models/Post.js';
import { postsService } from '../services/PostsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

export default {
    props:{
        postProp:{ type: Post, required:true}

    },
    setup(){
        return {
            async deletPost(id){
                try {
                    await postsService.deletPost(id)
                } catch (error) {
                    Pop.error(error)
                    logger.log(error)
                }
            },
            account: computed(() => AppState.account),
            async postLikes(id){
      try {
        await postsService.postLikes(id)

      } catch (error) {
        Pop.error(error)
        logger.log(error)
      }
    }
        }

    }
}
</script>


<style lang="scss" scoped>
 .post{
      background-color: aliceblue;
      border:1px 2px 0 0 black;
    //   height: 400px;

    }
    .post-img{
        height: 100px;
        aspect-ratio: 1/1;
        padding-top:3px;
    }
</style>
