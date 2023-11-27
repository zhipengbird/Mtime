<template>
    <div class="headerbarout">
        <div class="headerbar">
            <h1>
                <a href="http://film.mtime.com/"
                   title="Mtime时光网"></a>
            </h1>
            <dl class="headbarnav">
                <dd><a href="http://www.mtime.com/">fldfd</a></dd>
                <dd v-for="item in nav"
                    :key="item.name">
                    <router-link :to="item.link"
                                 class="a"> {{ item.name }}</router-link>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nav: [
                { name: "首页", link: "/main" },
                { name: "电影", link: "/wonder" },
                { name: "原创", link: "/search" },
                { name: "社区", link: "/search" },
                { name: "视频", link: "/" }

            ]
        };
    }
};
</script>
<style lang="less">
.headerbarout {
    background: #192332;
    width: 100%;
    position: relative;
    z-index: 6;
    font-size: 14px;

    .headerbar {
        height: 60px;
        margin: 0 auto;
        position: relative;
        z-index: 5;
        display: block;

        h1 {
            margin: 0 44px 0 0;
            float: left;

            a {
                margin: 12px auto;
                background: url(../assets/head.png) 0 -315px no-repeat;
                width: 117px;
                height: 36px;
                display: block;
                font-size: 0;
                line-height: 0;
            }
        }

        .headbarnav {
            float: left;
            font-size: 14px;
        }

        dl {
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            margin: 0;

            dd {
                float: left;
                height: 60px;
                margin: 0;

                .a {
                    color: #c8c8c8;
                    line-height: 60px;
                    margin-right: 30px;
                    position: relative;
                    display: inline-block;
                }

                a {
                    color: #c8c8c8;
                    line-height: 60px;
                    margin-right: 30px;
                    position: relative;
                    display: inline-block;
                }
            }
        }
    }
}
</style>
