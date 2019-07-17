<template>
    <div class="table">

    </div>
</template>

<script>
    export default {
        name: "table",
        props: ['column', 'pageInfo', 'data', 'section'],
        computed: {
            columns() {
                return this.column;
            }
        },
    }
</script>

<style scoped>

</style>
