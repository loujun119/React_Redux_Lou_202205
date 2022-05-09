import { ApiCommon } from "./ApiCommon";

export const getProduct = (): Promise<any> => {
    const url = 'api/getProduct';
    const api = new ApiCommon();
    const payload = api.getCommonApi(url);

    return payload;
}