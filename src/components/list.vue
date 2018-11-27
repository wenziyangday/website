<template>
    <!--递归组件-->
    <div class="list">
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <div class="item-name">
                <span>{{item.name}}</span>
            </div>
            <div class="child-item" v-if="item.children">
                <list :list="item.children"></list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        props: {
            list: Array
        }
    }
</script>

<style>

</style>
