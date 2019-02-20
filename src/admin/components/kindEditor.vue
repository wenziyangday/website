<template>
    <!--感觉没啥意义-->


    <div class="kind-editor">
        <editor id="editor_id" height="500px" width="100%" :content="editorText"
                pluginsPath="/static/kindeditor/plugins/"
                :loadStyleMode="false"
                @on-content-change="onContentChange"></editor>
    </div>
</template>

<script>
    export default {
        name: 'kindEditor',
        data() {
            return {
                editorText: ''
            }
        },
        methods: {
            onContentChange(val) {
                this.editorText = val;
            },
        }
    }
</script>

<style scoped>

</style>
