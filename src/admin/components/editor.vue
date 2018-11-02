<!--编辑器组件-->

<!--接受一个初始化的值，返回一个修改过的值-->

<template>
    <div class="editors">
        <div ref="editor"></div>
    </div>
</template>

<script>
    import E from "wangeditor";

    export default {
        name: "editor",
        data() {
            return {
                editorContent: ''
            }
        },
        props: ['dataEdCon'],
        computed: {
            editorCon() {
                return this.dataEdCon;
            }
        },
        mounted() {
            let editor = new E(this.$refs.editor);
            editor.customConfig.onchange = (html) => {
                this.editorContent = html;
            };
            editor.create();
            editor.txt.html(this.editorCon);
        },
        watch: {
            editorContent(newValue, oldValue) {
                this.$emit('changeEdCon', newValue);
            }
        },
    }
</script>

<style scoped>

</style>
