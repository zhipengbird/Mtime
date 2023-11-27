<template>
    <div class="video-content">
        <video ref="videoPlayer"
               class="video-js vjs-default-skin"
               width="600"
               height="400"
               controls
               autoplay>
            <!-- <source src="@/assets/test.mp4" type=""> -->
            <!-- <source src="https://www.w3school.com.cn/i/movie.ogg"> -->
            <source src="/download/Video/2023/11/22/mp4/231122154726528180.mp4">
            <!-- <source src="http://vjs.zencdn.net/v/oceans.mp4"> -->
            <!-- <source src="https://playtv-live.ifeng.com/live/06OLEGEGM4G.m3u8"> -->
        </video>
    </div>
</template>

<script>
export default {
    data() {
        return {
            player: null,
            source: "@/assets/test.mp4"
        }
    },
    mounted() {
        this.player = this.$video(this.$refs.videoPlayer, () => {
            this.player.log('onPlayerReady', this)
        })
        this.downLoad()
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },
    methods: {
        // 仅支持视频下载和图片下载
        downLoad() {
            let url = "http://vjs.zencdn.net/v/oceans.mp4";
            // let fileName = url.slice(url.lastIndexOf("/") + 1); //下载的文件名换成自己的
            let fileName = "test1.mp4"; //dayjs
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "blob"; // 返回类型blob
            xhr.onload = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let blob = xhr.response;
                    let downLoadUrl = window.URL.createObjectURL(
                        new Blob([blob], {
                            type:"video/mp4",
                        })
                    );
                    let a = document.createElement("a");
                    a.download = fileName;
                    a.href = downLoadUrl;
                    a.style.display = "none";
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                }
            };
            xhr.send();
        }
    },
}
</script>
<style>
.video-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>
