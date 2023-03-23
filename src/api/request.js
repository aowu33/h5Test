// import axios from "axios";
// const requests = axios.request({
//   baseURL: "http://192.168.16.65:9104/",
//   timeout: 6000,
// });
// console.log(requests,'axios');
// // 请求头
// requests.interceptors.request.use(
//   (config) => {
//     console.log(config);
//     // 需要授权的 API ，必须在请求头中使用 `Authorization`
//     // 字段提供 `token` 令牌
//     const token = window.sessionStorage.getItem("X-Access-Token");
//     if (token != null) {
//       config.headers["X-Access-Token"] = token;
//     }
//     // 在最后，必须 return config;
//     return config;
//   },
//   (error) => {
//     //  这里处理一些请求出错的情况
//     Promise.reject(error);
//   }
// );

// response 拦截器
// requests.interceptors.response.use(
//   (response) => {
//     console.log(response);
//     // 这里处理一些response 正常放回时的逻辑
//     // 返回的情况很多，还有300,500等怎么处理
//     // if (res.code === 401) {
//     //   if (sessionStorage.getItem('X-Access-Token')) {
//     //     sessionStorage.removeItem('X-Access-Token')
//     //   }
//     //   router.push('/login')
//     // }
//     return response.data;
//   },
//   (error) => {
//     // 这里处理一些response 出错时的逻辑
//     return Promise.reject(error);
//   }
// );

// export default requests;
