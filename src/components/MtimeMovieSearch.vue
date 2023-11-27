<template>
    <div class="search-container">
        <div class="">
            <el-tabs v-model="activeId"
                     @tab-click="handleTabChange">
                <el-tab-pane v-for="item in tabs"
                             :key="item.id"
                             :label="item.name"
                             :name="item.id">
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="list">
            <div class="live-item"
                 v-for="item in videos"
                 :key="item.liveId">
                <div class="item-image">
                    <div class="duration">{{ duration(item.length) }}</div>
                    <img :src="item.image">
                </div>
                <div class="item-text">
                    <span class="title">{{ item.title }}</span>
                </div>
            </div>
        </div>
        <div class="page-box">
            <el-pagination @size-change="handleSizeChange"
                           background
                           @current-change="handleCurrentChange"
                           :current-page.sync="pageNo"
                           :page-size="pageSize"
                           layout="total, prev, pager, next"
                           :total="totalCount">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import { getShortVideoSearch } from '../api/index'

export default {
    data() {
        return {
            tabs: [
                { name: "全部", id: "6" },
                { name: "预告片", id: "0" },
                { name: "精彩片段", id: "1" },
                { name: "拍摄花絮", id: "2" },
                { name: "影人访谈", id: "3" },
                { name: "电影首映", id: "4" },
                { name: "MV", id: "5" },
            ],
            pageSize: 30,
            pageNo: 1,
            totalCount: 0,
            videos: [],
            activeId: "6"
        }
    },
    mounted() {
        this.fetchVideos()
    },
    methods: {
        fetchVideos() {
            getShortVideoSearch({ params: { tt: new Date().getTime(), shortType: this.activeId === "6" ? "" : this.activeId, page: this.pageNo, pageSize: this.pageSize } }).then((result) => {
                const { totalCount, videos } = result.data.data
                this.videos = videos
                this.totalCount = totalCount
            }).catch((err) => {

                console.log(err)
            });
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val
            this.fetchVideos()
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pageNo = val
            this.fetchVideos()
        },
        handleTabChange(tab) {
            // 当标签页切换时触发的函数
            console.log('Changed tab:', tab.name);
            this.fetchVideos()
            // 执行其他操作...
        },
        duration(time) {
            if (time > 60 * 60) {
                let hour = Math.floor(time / 3600)
                let min = Math.floor(time % 3600 / 60)
                let sec = time % 60
                return (hour < 10 ? "0"+ hour : hour) + ":" + (min < 10 ? "0"+ min : min) + ":" + (sec < 10 ? "0"+ sec : sec)

            } else if (time > 0) {
                let min = Math.floor(time / 60)
                let sec = time % 60
                return (min < 10 ? "0"+ min : min) + ":" + (sec < 10 ? "0"+ sec : sec)
            }
            return ""

        }
    },
}
</script>
<style lang="less">
.search-container {
    .list {
        flex: 1;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;

        .live-item {
            display: block;
            width: 224px;
            height: 130px;
            margin-right: 20px;
            margin-bottom: 64px;

            .item-image {
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: relative;

                .duration {
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    min-width: 66px;
                    background: rgba(0,0,0,.6);;
                    color: #fff;
                    font-size: 14px;
                    line-height: 22px;
                    border-radius: 22px;
                }

                img {
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                    transition: all .6s;

                }

                img:hover {
                    transform: scale(1.2);
                }

            }

            .item-text {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 5px;

                .title {
                    font-size: 16px;
                    color: #f2f3f6;
                    cursor: pointer;
                    overflow: hidden;
                    word-break: break-all;
                    text-align: left;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;

                }
            }
        }
    }
}
</style>
