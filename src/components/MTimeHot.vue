<template>
    <div class="tablist">
        <MTimeTab v-for="(item, index) in list"
                  :key="index"
                  :object="item"></MTimeTab>
    </div>
</template>
<script>
import MTimeTab from './MTimeTab.vue';
import { getVideoRcmdTopList } from '@/api/index'
export default {
    components: { MTimeTab },
    data() {
        return {
            list: []
        }
    },
    mounted() {
        this.fetchTopList()
    },
    methods: {
        fetchTopList() {
            getVideoRcmdTopList().then((result) => {
                const { list } = result.data.data
                this.list = list
            }).catch((err) => {
                console.log(err)
            });
        }
    },
}
</script>
<style>
.tablist {
    display: flex;
    flex-direction: column;
}
</style>
