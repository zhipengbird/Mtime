<template>
    <div class="body-container">
        <MtimeLive></MtimeLive>
        <MTimeTed></MTimeTed>
        <MTimeHot></MTimeHot>
        <!-- <MtimeWonderVodList></MtimeWonderVodList> -->
        <!-- <MtimeMovieSearch></MtimeMovieSearch> -->
        <!-- <MTimeVideoPlay></MTimeVideoPlay> -->
    </div>
</template>
<script>
import MtimeWonderVodList from './MtimeWonderVodList.vue';
import MTimeHot from './MTimeHot.vue';
import MTimeTed from './MTimeTed.vue';
import MTimeVideoPlay from './MTimeVideoPlay.vue';
import MtimeLive from './MtimeLive.vue';
import MtimeMovieSearch from './MtimeMovieSearch.vue';
export default {

    components: { MtimeLive, MTimeTed, MTimeHot, MtimeWonderVodList, MtimeMovieSearch, MTimeVideoPlay }
}
</script>
<style lang="less" scoped >
.body-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
</style>
