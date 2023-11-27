import routes from './routers'
import Vue from 'vue'
import VueRouter from 'vue-router'

//全局引用路由
Vue.use(VueRouter);
var router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    console.log(to.path, from.path)
    // 假设在路由跳转时检查是否已经在跳转，如果是则不执行下一步
    if (router.isNavigating) {
        return
    }
    // 设置正在跳转的标志位
    router.isNavigating = true
    //检测相路由的变化
    if (to.path === from.path) {
        next(false)
        // 执行你的操作，例如刷新当前路由组件
        router.app.$nextTick(() => {
            // 触发当前路由组件的刷新
            // 这里可以通过发送事件或调用组件的方法等方式来刷新当前路由组件
        });
        // 路由跳转完成后，将标志位恢复为 false，以便下次可以进行跳转
        router.isNavigating = false;
    } else {
        next()
        // 路由跳转完成后，将标志位恢复为 false，以便下次可以进行跳转
        router.isNavigating = false;
    }
});
export default router;
