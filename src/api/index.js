import {MtimeVideo, MtimeLive} from './request.js';

export const getLiveList = (param) => {
    console.log(param);
    return MtimeLive.get('/live_room/getLiveList', param)
}


/**
 * 
 * @param {*} {tt:xx, pageNo:1, pageSize:18} 
 * @returns 
 */
export const getWonderVodList = (param) => {
    console.log(param);
    return MtimeLive.get('/live_room/getWonderVodList', param)
}

/**
 * 
 * @param {*} {tt:xxx} 
 * @returns 
 */
export const getVideoRcmdTopList = (param) => {
    console.log(param);
    return MtimeVideo.get('/library/video_rcmd/top_list.api', param)
}

/**
 * 获取短视频列表
 * @param {*} 参数  {tt:xxx,shortType:0,page:1, pageSize:9}
 * @returns 
 */
export const getShortVideoSearch = (param) => {
    console.log(param);
    return MtimeVideo.get('/mtime-search/search/shortVideoSearch', param)
}

/**
 * 
 * @param {*} param {tt:xxx, video_id:xxx, source:1,scheme:https}
 * @returns 视频播放资源
 */
export const getVideoPlayUrl =(param) => {
    return MtimeVideo.get('/video/play_url',param)
}
