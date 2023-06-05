<template>
<!-- {{ posts }} -->
<!-- the iteration to put posts on the template -->
<div>
    <ProfileCard  :profile="profile"/>
    <div class="d-flex justify-content-between">


</div>
<div class="row">
    <div class="col-md-6" v-for="p in posts" :key="p.id">
    <PostCard :postProp="p" />
    </div>
</div>
<div class="d-flex justify-content-around">
<button :disabled="!newer" @click="changePage(newer)" class="btn btn-primary">NEWER</button>
 <button :disabled="!older" @click="changePage(older)" class="btn btn-primary">OLDER</button>
</div>
</div>
</template>


<script>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState.js'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
import { computed } from '@vue/reactivity'

export default {
    setup(){
        const route = useRoute()
        async function getProfileById(){
            try {
                await postsService.getProfileById(route.params.id)
            } catch (error) {
                Pop.error(error)
                logger.log(error)
            }

        }
        async function getPostsByProfile(){
            try {
                await postsService.getPostsByProfile(route.params.id)

            } catch (error) {
                Pop.error(error)
                logger.log(error)
            }
        }
        async function getAdds() {
            try {
                await postsService.getAdds();
            }
            catch (error) {
                Pop.error(error);
                logger.log(error);
            }
        }
        onMounted(() => {
            getPostsByProfile()
            getProfileById()
            getAdds()
        })
        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts),
            newer: computed(() => AppState.newerPage),
            older: computed(() => AppState.olderPage),
            async changePage(url) {
                try {
                    await postsService.changePage(url);
                }
                catch (error) {
                    Pop.error(error);
                    logger.log(error);
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
