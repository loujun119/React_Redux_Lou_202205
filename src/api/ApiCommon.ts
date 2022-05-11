import { AxiosResponse } from "axios";
import APIHandler from "./APIHandler";
import { toHttpStatus } from "./toHttpStatus";
import { toConflictErrorType } from "./toConflictErrorType";

export class ApiCommon extends APIHandler {
  async getCommonApi(requestUrl: string): Promise<any> {
    const url: string = requestUrl;
    const sender = this.getSender();
    const resType = url.match(/csv/) ? { responseType: "blob" } : undefined;

  // 使用 then 时，你将接收下面这样的响应 :
  //   axios.get('/user/12345')
  // .then(function(response) {
  //   console.log(response.data);
  //   console.log(response.status);
  //   console.log(response.statusText);
  //   console.log(response.headers);
  //   console.log(response.config);
  // });
  //   axios.request(config)
  // axios.get(url[, config])
  // axios.delete(url[, config])
  // axios.head(url[, config])
  // axios.options(url[, config])
  // axios.post(url[, data[, config]])
  // axios.put(url[, data[, config]])
  // axios.patch(url[, data[, config]])

    return await sender
      .get(url)
      .then((response: AxiosResponse) => {
        const data = !resType
          ? response.data
          : new Blob([response.data], { type: "text/csv;charset=shift_jis" });
        const status: number = response.status;
        const disposition = response.headers["content-disposition"];
        return {
          data,
          status: toHttpStatus(status),
          disposition,
        };
      })
      .catch((error) => {
        if (error.response) {
          const data = error.response.data || error.message;
          const status = error.response.status;
          const disposition = error.response.headers["content-disposition"];
          return {
            status: toHttpStatus(status),
            data,
            disposition,
          };
        } else {
          const data = error.message;
          return { data };
        }
      })
      .finally();
  }

  async postCommonApi(requestUrl: string, data: any): Promise<any> {
    const url: string = requestUrl;
    const sender = this.getSender();
    const resType = url.match(/csv/) ? { responseType: "blob" } : undefined;

    return await sender
      .post(url, data)
      .then((response: AxiosResponse) => {
        const data = !resType
          ? response.data
          : new Blob([response.data], { type: "text/csv;charset=shift_jis" });
        const status: number = response.status;
        const disposition = response.headers["content-disposition"];
        return {
          conflictErrorType: toConflictErrorType(data),
          status: toHttpStatus(status),
          data,
          disposition,
        };
      })
      .catch((error) => {
        if (error.response) {
          const data = error.response.data || error.message;
          const status = error.response.status;
          const disposition = error.response.headers["content-disposition"];
          return {
            conflictErrorType: toConflictErrorType(data),
            status: toHttpStatus(status),
            data,
            disposition,
          };
        } else {
          const data = error.message;
          return { data };
        }
      })
      .finally();
  }

  async putCommonApi(requestUrl: string, data: any): Promise<any> {
    const url: string = requestUrl;
    const sender = this.getSender();

    return await sender
      .put(url, data)
      .then((response: AxiosResponse) => {
        const data = response.data;
        const status = response.status;
        return {
          conflictErrorType: toConflictErrorType(data),
          status: toHttpStatus(status),
        };
      })
      .catch((error) => {
        if (error.response) {
          const data = error.response.data || error.message;
          const status = error.response.status;
          return {
            conflictErrorType: toConflictErrorType(data),
            status: toHttpStatus(status),
            data,
          };
        } else {
          const data = error.message;
          return { data };
        }
      })
      .finally();
  }
}
