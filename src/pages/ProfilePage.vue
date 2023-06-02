<template>
<!-- {{ posts }} -->
<!-- the iteration to put posts on the template -->

<div class="row">
    <div class="col-md-6" v-for="p in posts" :key="p.id">
    <PostCard :postProp="p" />
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
        async function getPostsByProfile(){
            try {
                await postsService.getPostsByProfile(route.params.id)

            } catch (error) {
                Pop.error(error)
                logger.log(error)
            }
        }
        onMounted(() => {
            getPostsByProfile()
        })
        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
