<template>
    <div class="annouce-block">
        <div class="block-title">
            <h3>最新预告</h3>
            <router-link to="/search"
                         class="more">更多></router-link>
        </div>
        <div class="block-content"
             v-if="videos.length > 0">
            <div class="content-left">
                <div class="item-pic">
                    <img :src="videos[0].image">
                </div>
                <div class="item-text">
                    <span>{{ videos[0].title }}</span>
                </div>
                <div>
                </div>
            </div>
            <div class="content-right"
                 v-if="videos.length > 0">
                <div v-for="item in videos.slice(1)"
                     :key="item.id"
                     class="ted-item">
                    <div class="item-pic">
                        <img :src="item.image">
                    </div>
                    <div class="item-text">
                        <span>{{ item.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getShortVideoSearch } from '@/api/index'
export default {
    data() {
        return {
            videos: []
        }
    },
    mounted() {
        this.fetchVideos()
    },
    methods: {
        fetchVideos() {
            getShortVideoSearch({ params: { tt: new Date().getTime(), shortTye: 0, page: 1, pageSize: 9 } }).then((result) => {
                const { videos } = result.data.data
                this.videos = videos
            }).catch((err) => {
                console.log(err)
            });
        }
    }
}
</script>

<style lang="less">
.annouce-block {
    .block-title {

        padding-top: 60px;
        box-sizing: border-box;
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

    .block-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 17px;

        .content-left {
            margin-right: 15px;
            display: flex;
            flex-direction: column;
            align-items: left;
            width: 350px;
            // height: 253px;

            .item-pic {
                display: block;
                overflow: hidden;
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                    transition: all .6s;
                    cursor: pointer;
                    object-fit: cover;
                }

                img:hover {
                    transform: scale(1.2);
                }
            }

            .item-text {
                display: flex;
                flex-direction: column;
                align-items: left;

                span {
                    font-size: 20px;
                    color: #f2f3f6;
                    margin-top: 5px;
                    height: 30;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    text-align: left;
                }
            }
        }

        .content-right {
            flex: 1;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            .ted-item {
                display: flex;
                flex-direction: column;
                width: 200px;
                margin-right: 20px;
                margin-bottom: 24px;
                overflow: hidden;

                .item-pic {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    margin-bottom: 5px;

                    img {
                        width: 100%;
                        height: 100%;
                        transition: all .6s;
                        cursor: pointer;
                    }

                    img:hover {
                        transform: scale(1.2);
                    }
                }

                .item-text {
                    display: flex;
                    flex-direction: column;

                    span {
                        font-size: 16px;
                        color: #f2f3f6;
                        height: 19px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        text-align: left;
                    }
                }
            }
        }

    }
}
</style>
