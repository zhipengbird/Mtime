<template>
    <div class="livecontainer">
        <div class="header">
            <h3>时光直播</h3>
            <!-- <span @click="jumpWonderList">更多</span> -->
            <router-link to="/wonder"
                         class="more">更多></router-link>
        </div>
        <div class="live-content">
            <div class="list">
                <div class="live-item"
                     v-for="item in wonderVods"
                     :key="item.liveId">
                    <div class="item-image">
                        <img :src="item.image">
                    </div>
                    <div class="item-text">
                        <div class="text-detail">
                            <span class="title">{{ item.title }}</span>
                            <span class="person"> {{ item.statistic }} 人已观看</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getLiveList } from '../api/index'
export default {
    data() {
        return {
            wonderVods: []
        };
    },

    mounted() {
        this.fetchLiveList()
    },
    methods: {

        fetchLiveList() {
            getLiveList({ params: { tt: new Date().getTime() } }).then((result) => {
                const { wonderVods } = result.data.data
                this.wonderVods = wonderVods
                console.log(wonderVods)
            }).catch((err) => {
                console.log(err)
            });
        },

        jumpWonderList() {
            this.$router.push('/wonder')
        }
    },
};
</script>
<style lang="less">
.livecontainer {
    width: 100%;
    padding-top: 30px;
    box-sizing: border-box;

    .header {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        h3 {
            display: block;
            font-size: 24px;
            color: #fff;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            margin: 0px;
            padding: 0px;
        }

        span {
            font: inherit;
            color: #fff;
        }

        .more {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }

    }

    .live-content {
        display: flex;
        margin-top: 17px;
        flex-direction: row;
        justify-content: space-between;

        .list {
            flex: 1;
            height: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;

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

                    .text-detail {
                        display: flex;
                        flex-direction: column;
                        line-height: 19px;
                        vertical-align: baseline;

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

                        .person {
                            font-size: 12px;
                            color: #8799af;
                            text-align: left;

                        }
                    }
                }
            }

            .live-item:nth-child(5n-5) {
                margin-right: 0px
            }
        }

    }
}
</style>
