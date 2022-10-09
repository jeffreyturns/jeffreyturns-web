import { useGlobalStore } from '@/stores/global';
import { BASE_API_URL } from '@/common/constants';

const http = (endpoint: string, params: RequestInit) => {
    if (endpoint.startsWith('/')) return fetch(BASE_API_URL + endpoint, params).then(responseHandler);
    else return fetch(endpoint, params).then(responseHandler);
};

const responseHandler = (res: Response) => {
    const state = useGlobalStore();
    if (res.status != 200) {
        state.pageState.isError = true;
        (state.complexError.error = res.status), (state.complexError.errorBody = res.statusText);
    } else {
        state.pageState.isError = false;
    }
    return res;
};

export { http, responseHandler };
