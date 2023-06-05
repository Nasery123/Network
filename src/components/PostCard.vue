<template>
    <!-- <div class="row">
        <div class="col-md-3 post"> -->
            <div v-if="postProp.id" class="post rounded p-4">
                <div class="d-flex">

                <!-- <div class="col-6"> -->
                    <div class="d-flex flex-direction-row justify-content-between">
                        <div>
                    <router-link :to="{name: 'Profile', params: { id: postProp.creatorId }}">

                    <img class="img-fluid rounded-circle post-img" :src="postProp.creator.picture" alt="">

                </router-link>
            </div>
                    <p class="pt-4 px-4">{{ postProp.creator.name }}</p>
                    <p>{{ postProp.creator.email }}</p>
                    <p>{{ postProp.bio }}</p>
                    <!-- <img :src="postProp.creator.coverImg" alt=""> -->
                    <a :href="postProp.creator.socialPlatform"></a>
                    <!-- <p>{{ postProp. }}</p> -->

            </div>
                <button class="btn btn-primay pr-5" @click="editPost(id)" v-if="postProp.creator.id == account.id">EDIT</button>
                <!-- </div> -->
            </div>
            <p>{{ new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }) }}</p>
                <p class="pt-5">{{ postProp.body }}</p>

                <img class="img-fluid rounded photo" :src="postProp.imgUrl" alt="the picture is not available">
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
            async getDat(){
                try {
                    await postsService.getDate()
                } catch (error) {
                    Pop.error(error)
                    logger.log(error)
                }
            },
            async deletPost(id){
                try {

                    const yes = await Pop.confirm("do you want to delet this Post")
                        if (!yes) {
                        return
                    }
                    await postsService.deletPost(id)
                } catch (error) {
                    Pop.error(error)
                    logger.log(error)
                }
            },
            async editPost(id){
                try {
                    debugger

                    await postsService.editPost(id)
                } catch (error) {
                    Pop.error(error)
                    logger.log(error)
                }

            },
            account: computed(() => AppState.account),
            posts: computed(() => AppState.posts),
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
      background-color: antiquewhite;
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
    .post{
        background-color: azure;
    }
    .network{
        background-color:antiquewhite;
    }
</style>
