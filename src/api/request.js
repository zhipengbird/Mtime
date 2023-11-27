import  Axios  from "axios";
/**
 * Description placeholder
 * @date 2023/11/22 - 16:05:13
 *
 * @type {*}
 */
const MtimeVideo = Axios.create({
    //通用请求地址前缀
    baseURL:  process.env.VUE_APP_VIDEO_BASEURL,
    timeout: 10000,//超时时间毫秒
})
/**
 * Description placeholder
 * @date 2023/11/22 - 16:05:13
 *
 * @type {*}
 */
const MtimeLive = Axios.create({
    //通用请求地址前缀
    baseURL:  process.env.VUE_APP_LIVE_BASEURL,
    timeout: 10000,//超时时间毫秒
})
// 添加请求拦截器
MtimeVideo.interceptors.request.use(function (config) {
    console.log(process.env.VUE_APP_LIVE_BASEURL, "debug")
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器  
MtimeVideo.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});
// 添加请求拦截器
MtimeLive.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(process.env.VUE_APP_LIVE_BASEURL, "debug")

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器  
MtimeLive.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});
export  {MtimeVideo, MtimeLive};
