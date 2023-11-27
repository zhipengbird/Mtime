<template>
    <div class="container">
        <div class="headerbar">
            <div class="left-title">
                <h3>{{ object.rcmdTypeName }}</h3>
                <el-tabs v-model="activeId"
                         @tab-change="handleTabChange">
                    <el-tab-pane v-for="item in object.videosByLabel"
                                 :key="item.labelId"
                                 :label="item.labelName"
                                 :name="item.labelId.toString()">
                    </el-tab-pane>
                </el-tabs>
            </div>
            <router-link to="/search"
                         class="more">更多></router-link>
        </div>
        <div class="live-content">
            <div class="live-content-item"
                 v-for="item in videosByLabelId"
                 :key="item.id">
                <div class="item-pic">
                    <div class="item-remark">{{ item.remark }}</div>
                    <img :src="item.img">
                </div>
                <div class="item-title">
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        object: Object
    },
    mounted() {
        this.activeId = this.object.videosByLabel[0].labelId.toString()
        console.log(this.activeId)
    },
    data() {
        return {
            activeId: "4",
        }
    },
    computed: {
        videosByLabelId() {
            const labelIdToFind = this.activeId;
            if (!this.object) {
                return
            }
            const videosByLabel = this.object.videosByLabel;

            const foundLabel = videosByLabel.find(item => item.labelId.toString() === labelIdToFind);
            console.log(foundLabel ? foundLabel.videos : [])
            return foundLabel ? foundLabel.videos : [];
        }
    },
    methods: {
        onTabClick(tab, event) {
            console.log(tab, event)
        },
        handleTabChange(tab) {
            // 当标签页切换时触发的函数
            console.log('Changed tab:', tab.name);
            // 执行其他操作...
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .headerbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 66px;

        .left-title {
            width: 750px;
            display: flex;
            flex-direction: row;

            // justify-content: space-around;
            h3 {
                font-size: 24px;
                color: #fff;
                margin: 0;
                margin-right: 51px;

            }




        }

        .more {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }


    }

    .live-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 17px;

        .live-content-item {
            width: 187.5px;
            margin-right: 15px;
            margin-bottom: 10px;
            margin-top: 10px;
            display: flex;
            flex-direction: column;

            .item-pic {
                margin-bottom: 5px;
                overflow: hidden;
                position: relative;

                .item-remark {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    padding: 5px;
                    box-sizing: border-box;
                    background: #feb12a;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    color: #fff;
                    font-size: 12px;
                }

                img {
                    width: 100%;
                    height: 100px;
                    cursor: pointer;
                    transition: all .6s;
                }

                img:hover {
                    transform: scale(1.2);
                }


            }

            .item-title {
                font-size: 16px;
                color: #f2f3f6;
                margin-bottom: 5px;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }

        }

        :nth-child(6n-6) {
            margin-right: 0;
        }
    }
}
</style>
<style lang="less">
.el-tabs {

    // display: block;
    // flex-direction: row;

    // justify-content: space-between;
    // width: fit-content;
    /* 设置 Tab 的文字颜色 */
    .el-tabs__item {
        color: #8798af;
        font-size: 18px;
        height: auto;
        line-height: 22px;
        padding: 0 20px 7px;
    }

    /* 设置 Tab 的背景颜色 */
    .el-tabs__item.is-active {
        color: #fff;
        /* 例如灰色 */
    }

    // /* 设置 Tab 的下划线 */
    .el-tabs__active-bar {
        padding-top: 3px;
        width: 100%;
        height: 2%;
        box-sizing: border-box;
        background-color: #f2f3f6;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        z-index: 1;
        transition: transform .3s cubic-bezier(.645, .045, .355, 1);
        list-style: none;
    }

    .el-tabs__nav-wrap::after {
        clear: both;
        background-color: black;
    }



}
</style>
