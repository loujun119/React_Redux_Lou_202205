import { AxiosResponse } from "axios";
import APIHandler from "./APIHandler";
import { toHttpStatus } from "./toHttpStatus";
import { toConflictErrorType } from "./toConflictErrorType";

export class ApiCommon extends APIHandler {
  async getCommonApi(requestUrl: string): Promise<any> {
    const url: string = requestUrl;
    const sender = this.getSender();
    const resType = url.match(/csv/) ? { responseType: "blob" } : undefined;

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
