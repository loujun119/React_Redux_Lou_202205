import { ApiCommon } from "./ApiCommon";

export const updateProduct = (data: any): Promise<any> => {
    const url = 'api/updateProduct';
    const api = new ApiCommon();
    const payload = api.postCommonApi(url, data);

    return payload;
}