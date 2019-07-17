<template>
    <div :class="`sidebar ${$store.state.onOffSide ? 'active-side' : ''}`">
        <div :class="`logo-single ${$store.state.onOffSide ? 'active-side' : ''}`">
            <div>w</div>
            <div v-if="!$store.state.onOffSide">Logo</div>
        </div>
        <div class="column-sidebar">
            <wen-menu :data="sideTree"></wen-menu>
        </div>
    </div>
</template>

<script>
    import side from '../../router/side';
    import WenMenu from '../components/wenMenu';
    import {mapGetters} from 'vuex';

    export default {
        name: 'sidebar',
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['sideTree'])
        },
        components: {
            WenMenu
        },
        methods: {
            getRouteTitle: function () {
                let route = this.$route;
                this.$store.commit('SET_CUR_ROUTE', route);
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.$api.column.fetch().then(res => {
                    let others = side;
                    let newCols = [...others, ...res.data];
                    newCols.map(x => {
                        if (!x.is_id) {
                            x.id = `columnManage?_id=${x._id}`;
                        } else {
                            x.id = x._id;
                        }
                        x.name = x.columnName;
                    });
                    this.$store.commit('SET_SIDEBAR', newCols);
                    this.getRouteTitle();
                })
            });
        },
        watch: {
            '$route': 'getRouteTitle'
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
