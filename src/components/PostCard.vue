<template>
    <!-- <div class="row">
        <div class="col-md-3 post"> -->
            <div v-if="postProp.id" class="post rounded p-4">

                <!-- <div class="col-6"> -->
                    <div class="d-flex">
                    <router-link :to="{name: 'Profile', params: { id: postProp.creatorId }}">
                    <img class="img-fluid rounded-circle post-img" :src="postProp.creator.picture" alt="">
                </router-link>
                    <p class="pt-4 px-4">{{ postProp.creator.name }}</p>
                </div>
                <!-- </div> -->
                <p class="pt-5">{{ postProp.body }}</p>

                <img class="img-fluid rounded photo" :src="postProp.imgUrl" alt="">
                <div class="d-flex justify-content-between pt-4">
                <p @click="postLikes(postProp.id)" class="fs-1">👍<span class="fs-3 px-2 " id="like">{{ postProp.likeIds.length }}</span></p>
                <p @click="deletPost(postProp.id)" v-if="postProp.creator.id == account.id" class="fs-3 align-items-end "><i class="mdi mdi-delete-outline"></i></p>
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
      border-bottom: 2px solid black;
      border-right: 2px solid black;
      border-top: 1px solid black;
      border-left: 1px solid black;
    //   height: 400px;

    }
    .post-img{
        height: 70px;
        aspect-ratio: 1/1;
        padding-top:3px;
    }
    .photo{
        height: 220px;
        width: 400px;

    }
</style>
