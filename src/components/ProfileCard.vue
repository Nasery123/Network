<template>
    <div class="col-3">

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

export default {
    setup(){
        const route = useRoute()


        return {

            // posts: computed(() => AppState.posts)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
