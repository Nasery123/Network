<template>
    <i>{{ AddProp.title }}</i>
    <img :src="AddProp.linkUrl" alt="">
    <img class="square img-fluid" :src="AddProp.tall" alt="">

    <img class="square add img-fluid elevation-5" :src="AddProp.square" alt="">

    <!-- {{ Addprop. }} -->
</template>


<script>
import { computed } from '@vue/reactivity';
import { Add } from '../models/Add.js';
import { AppState } from '../AppState.js';

export default {
    props: {
        AddProp: { type: Add, required: true }
    },
    setup() {
        return {

            add: computed(() => AppState.add)
        }
    }
}
</script>


<style lang="scss" scoped>
.add {
    border-radius: 10px;
}
</style>
