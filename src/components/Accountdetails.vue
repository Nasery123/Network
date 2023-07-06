<template>
    <div class="container-fluid">
        <div class="row">
            {{ account.name }}
        </div>
    </div>
</template>


<script>
export default {
    setup() {
        return {
            account: computed(() => AppState.account)
        }
    }
    // components: { accountdetails }
}
</script>


<style lang="scss" scoped>
</style>
