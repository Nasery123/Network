<template>

</template>


<script>
import { onMounted } from 'vue';
import { postsService } from '../services/PostsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { addsService } from '../services/AddsService.js';

export default {
    setup(){
        // const route = useRoute()
        async function getAdds(){
            try {
                // logger.log('hello from addPage')

                await addsService.getAdds()

            } catch (error) {
                Pop.error(error)
                logger.log(error)
            }
        }
        onMounted(()=>{
            getAdds()
        })
        return {
            add: computed(() => AppState.add)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
