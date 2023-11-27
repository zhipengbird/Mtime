<template>
  <div class="app-container">
    <div class="content-container">
      <el-container>
        <el-header>
          <MTimeHeader></MTimeHeader>
        </el-header>
        <el-main>
          <transition name="slide-right">
            <router-view></router-view>
          </transition>
          <!-- <router-view /> -->
          <!-- <MTimeBody></MTimeBody> -->
        </el-main>
        <el-footer>
          <MTimeFooter></MTimeFooter>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
import MTimeBody from './MTimeBody.vue';
import MTimeFooter from './MTimeFooter.vue';
import MTimeHeader from './MTimeHeader.vue';
export default {
  components: {
    MTimeHeader,
    MTimeBody,
    MTimeFooter
  }
};
</script>

<style lang="less">
.app-container {
  width: 100%;
  min-height: 100vh;
  background-color: white;

  .content-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 10%;
    margin-right: 10%;
    min-height: 100vh;
  }
}

.el-header,
.el-footer {
  background-color: @header-color;
  width: 100%;
  position: relative;
  z-index: 6;
  font-size: 14px;
}

.el-footer {
  background-color: @footer-color;
}

.el-main {
  background-color: @body-color;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
