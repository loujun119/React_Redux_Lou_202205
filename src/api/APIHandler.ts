import * as Axios from "axios";
import * as Https from "https";

const APIBaseUrl = process.env.REACT_APP_API_BASE_URL;

const getCookie = () => {
  return { abc: "cookie" };
};

export default class APIHandler {
  static isAvailable(): boolean {
    return APIHandler.getToken() || APIHandler.isDummy() ? true : false;
  }

  static isDummy(): boolean {
    const cookie: { [key: string]: string } = getCookie();
    return cookie.qp_d === "true" ? true : false;
  }
  static getToken(): string {
    const cookie: { [key: string]: string } = getCookie();
    return cookie.qp_token;
  }
  setToken(token: string): void {
    document.cookie = `qp_token=${token}; path=/`;
  }
  getSender(maxLength: number = 1000000): Axios.AxiosInstance {
    let baseURL: string = "";
    const cookie: { [key: string]: string } = getCookie();

    if (window.location.hostname === "localhost") {
      if (
        (RegExp("q=(?!dummy).+").test(window.location.search) ||
          cookie.qp_token ||
          cookie.qp_q) &&
        APIBaseUrl
      ) {
        baseURL = APIBaseUrl;
      } else {
        baseURL = window.location.origin;
      }
    } else {
      const server = window.location.href.replace(/client.+/, "");
      baseURL = `${server}server/api/`;
    }

    const axios = Axios.default.create({
      httpsAgent: new Https.Agent({ rejectUnauthorized: false }),
      baseURL,
      maxContentLength: maxLength,

      validateStatus(status: number): boolean {
        const errorURL = `./error.html?sts=${status}`;

        if (status === 408) {
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

    const token: string = cookie.qp_token;

    if (token !== undefined) {
      axios.interceptors.request.use(
        (config: any) => {
          config.headers.Authorization = `Bearer ${token}`;
          return config;
        },
        (error: any): Promise<never> => {
          return Promise.reject(error);
        }
      );
    }

    axios.interceptors.response.use(
      (config) => config,
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
