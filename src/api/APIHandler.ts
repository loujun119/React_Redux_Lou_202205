import * as Axios from "axios";
import * as Https from "https";

const APIBaseUrl = process.env.REACT_APP_API_BASE_URL;

// const getCookie = () => {
//   return { abc: "cookie" };
// };

export default class APIHandler {
  // static isAvailable(): boolean {
  //   return APIHandler.getToken() || APIHandler.isDummy() ? true : false;
  // }
  // static isDummy(): boolean {
  //   const cookie: { [key: string]: string } = getCookie();
  //   return cookie.qp_d === "true" ? true : false;
  // }
  // static getToken(): string {
  //   const cookie: { [key: string]: string } = getCookie();
  //   return cookie.qp_token;
  // }
  // setToken(token: string): void {
  //   document.cookie = `qp_token=${token}; path=/`;
  // }
  getSender(maxLength: number = 1000000): Axios.AxiosInstance {
    let baseURL: string = "";
    // const cookie: { [key: string]: string } = getCookie();

    if (window.location.hostname === "localhost") {
      // if (
      //   (RegExp("q=(?!dummy).+").test(window.location.search) ||
      //     cookie.qp_token ||
      //     cookie.qp_q) &&
      //   APIBaseUrl
      // ) {
      //   baseURL = APIBaseUrl;
      // } else {
      // }
      baseURL = APIBaseUrl ? APIBaseUrl :window.location.origin;
    } else {
      const server = window.location.href.replace(/client.+/, "");
      baseURL = `${server}server/api/`;
    }

    // APIリクエスト基本設定
    const axios = Axios.default.create({
      // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
      // `keepAlive` 默认没有启用
      // httpAgent: new http.Agent({ keepAlive: true }),
      // httpsAgent: new https.Agent({ keepAlive: true }),
      httpsAgent: new Https.Agent({ rejectUnauthorized: false }),
      baseURL,
      maxContentLength: maxLength,

      // `validateStatus` 定义对于给定的HTTP 的status是 通过 还是 拒绝
      // 如果返回`true`(或者`null`,`undefined`)，promise将被通过,
      //  否则promise拒绝
      validateStatus(status: number): boolean {
        const errorURL = `./error.html?sts=${status}`;
        if (status === 408) {
          // 跳转到error页面，并终止api处理
          window.location.href = errorURL;
          return false;
        }
        if (status === 401) {
          window.location.href = errorURL;
          return false;
        }
        if (status === 405) {
          window.location.href = errorURL;
          return false;
        }
        if (
          status >= 400 &&
          status !== 400 &&
          status !== 404 &&
          status !== 409
        ) {
          return false;
        } else {
          return true;
        }
      },
    });

    // const token: string = cookie.qp_token;

    // if (token !== undefined) {
    // }
    // 添加请求拦截器
    axios.interceptors.request.use(
      // config是为请求提供的配置信息
      (config: any) => {
        // 在发送请求之前做些什么
        // config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      // 对请求错误做些什么 neverはtypescript
      (error: any): Promise<never> => {
        return Promise.reject(error);
      }
    );

    // 添加结果拦截器
    axios.interceptors.response.use(
      // 对响应数据做点什么
      (response: any) => {
        return response;
      },
      // 对响应错误做点什么
      (error): Promise<never> => {
        if (!error.response) {
          window.location.href = `./error.html?msg=${encodeURIComponent(
            error.message
          )}`;
        }
        return Promise.reject(error);
      }
    );
    return axios;
  }
}
