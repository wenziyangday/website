<template>
    <div :class="`sidebar ${$store.state.onOffSide ? 'active-side' : ''}`">
        <div :class="`logo-single ${$store.state.onOffSide ? 'active-side' : ''}`">
            <div>w</div>
            <div v-if="!$store.state.onOffSide">Logo</div>
        </div>
        <div class="column-sidebar">
            <SidebarItem></SidebarItem>
        </div>
    </div>
</template>

<script>
    import SidebarItem from './sidebarItem';

    export default {
        name: 'sidebar',
        components: {
            SidebarItem
        }
    }
</script>

<style lang="stylus" type="text/stylus">

    .sidebar
        position fixed
        left 0
        width 15rem
        height 100%
        background #000000
        color #ffffff
        overflow-y auto
        .logo-single
            position fixed
            top 0
            width 15rem
            height 3.2rem
            line-height 3.2rem
            background #000
            z-index 9
            div
                display inline-block
                &:first-child
                    width 3.2rem
                    text-align center
            img
                vertical-align middle
        .column-sidebar
            padding-top 3.2rem

    .active-side
        width 3.2rem !important
        transition-duration .5s
        overflow-x hidden
</style>
