<template>
<form @submit.prevent="searchPosts()">
<input class="w-150px" type="text" v-model="search" placeholder="serach here">
<button type="submit">Search</button>
</form>
</template>


<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import { postsService } from '../services/PostsService.js';

export default {
    setup(){
        const search = ref('')
        return {
            search,
            async searchPosts(){
                try {
                    const searchTerm = search.value
                    await postsService.searchPosts(searchTerm)

                } catch (error) {
                    logger.log(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
