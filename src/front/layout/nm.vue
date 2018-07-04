<template>
    <div class="ratings">
        <!--todo just a test-->
        <div :class="{ className: data }"></div>
    </div>
</template>

<script>
    export default {
        name: 'ratings',
        methods: {
            name() {

            }
        },
        data() {
            return {
                key: value
            }
        },
        filters: {
            fnName: function (value) {
                return value;
            }
        },
        watch: {
            data(newValue, oldValue) {

            }
        },
    }
</script>

<style>

</style>
