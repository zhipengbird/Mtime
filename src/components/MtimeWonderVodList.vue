<template>
    <div class="list-container">
        <div class="history">
            <h3>精彩回顾</h3>
            <div class="list">
                <div v-for="item in wonderVods"
                     :key="item.id"
                     class="item">
                    <div class="item-pic">
                        <img :src="item.image">
                    </div>
                    <div class="description">
                        <div class="title">
                            {{ item.title }}
                        </div>
                        <div class="time">{{ item.statistic }} 人观看</div>
                    </div>
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
import { getWonderVodList } from '@/api/index'
export default {
    data() {
        return {
            wonderVods: [],
            pageSize: 18,
            pageNo: 1,
            totalCount: 0
        }
    },
    mounted() {
        this.fetchWonderVodsList()
    },
    methods: {
        fetchWonderVodsList() {
            getWonderVodList({ params: { tt: new Date().getTime(), pageNo: this.pageNo, pageSize: this.pageSize } }).then((result) => {
                const { totalCount, wonderVods } = result.data.data
                this.wonderVods = wonderVods
                this.totalCount = totalCount
            }).catch((err) => {
                console.log(err)
            });
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val
            this.fetchWonderVodsList()
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pageNo = val
            this.fetchWonderVodsList()
        }
    },
}
</script>
<style lang="less" scoped>
.list-container {
    .history {
        margin-top: 60px;
        display: flex;
        flex-direction: column;


        h3 {
            color: #fff;
            margin: 0;
            text-align: left;
        }

        .list {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin-top: 17px;
            width: 100%;

            .item {

                width: 380px;
                // height: 288px;
                display: block;
                margin-right: 30px;
                margin-bottom: 20px;

                .item-pic {
                    width: 100%;
                    height: 214px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                        transition: all .6s;
                    }

                    :hover {
                        transform: scale(1.2);
                    }
                }


                .description {
                    // width: 380px;
                    // height: 74px;
                    background-color: #f2f2f2;
                    padding: 11px 16px 9px;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;

                    .title {
                        font-size: 20px;
                        line-height: 33px;
                        color: #333;
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        cursor: pointer;
                        text-align: left;
                    }

                    .time {

                        font-size: 14px;
                        line-height: 20px;
                        color: #888;
                        text-align: left;
                    }
                }
            }

            .item:nth-child(3n-3) {
                margin-right: 0;
            }
        }


    }

    .page-box {
        width: 100%;
        text-align: center;
        margin-top: 20px;
        padding-bottom: 20px;
        justify-content: space-around;
        // .el-pagination {
        //     white-space: nowrap;
        //     padding: 2px 5px;
        //     font-weight: 700;
        //     background-color: #888;
        //     color: #fff;
        // }
    }

}
</style>
