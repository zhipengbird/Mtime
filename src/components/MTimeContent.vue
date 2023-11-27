<template>
    <div class="container">
        <MtimeLive></MtimeLive>
        <MTimeTed></MTimeTed>
        <MTimeHot></MTimeHot>
    </div>
</template>
<script>
import MTimeHot from './MTimeHot.vue';
import MTimeTed from './MTimeTed.vue';
import MtimeLive from './MtimeLive.vue';

export default {
    components: { MtimeLive, MTimeTed, MTimeHot }
}
</script>

<style lang="less" scoped >
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
}
</style>
