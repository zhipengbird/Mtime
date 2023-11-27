const routes = [
    {
        name: "home",
        path: "/",
        component: () => import("@/components/MTimeContainer.vue"),
        redirect: "/main", ///重定向到首页
        //子路由
        children: [
            { path: 'main', name: 'main', component: () => import("@/components/MTimeContent.vue") }, //首页
            { path: 'wonder', name: 'wonder', component: () => import("@/components/MtimeWonderVodList.vue") }, //回顾
            { path: 'search', name: 'search', component: () => import("@/components/MtimeMovieSearch.vue") }, //搜索
        ]
    },
    // { path: '/', name: 'main', component: () => import("@/components/MTimeContent.vue") }, //首页
];
export default routes
