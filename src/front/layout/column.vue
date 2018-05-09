<template>
    <div class="column">
        <HomeList :data="columnData"></HomeList>
    </div>
</template>

<script>
    import HomeList from '../homeDefault/homeList';

    export default {
        name: 'column',
        data() {
            return {
                columnData: []
            }
        },
        components: {
            HomeList
        },
        methods: {
            getColumnData() {
                const _this = this;
                _this.$axios.get('http://rap2api.taobao.org/app/mock/8797//home/column/name').then(res => {
                    _this.columnData = res.data.data || [];
                })
            }
        },
        mounted() {
            this.getColumnData();
            console.log(this.$route)
        }
    }
</script>

<style lang="stylus" type="text/stylus">

</style>
