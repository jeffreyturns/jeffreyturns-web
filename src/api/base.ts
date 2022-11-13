import { http, responseHandler } from '@/common/http';
import { useGlobalStore } from '@/stores/global';

export type MethodType = 'GET';

export interface RequestMeta {
    path: string;
    method: MethodType;
}

export async function request<T>(meta: RequestMeta): Promise<T> {
    const global = useGlobalStore();

    let data;

    global.updatePageState({
        isLoading: true,
        isError: false,
        isUnderBuilding: false
    });

    try {
        const request = await http(meta.path, {
            method: meta.method
        }).then(responseHandler);

        data = await request.json();
    } catch (error) {
        console.log(error);
    } finally {
        global.pageState.isLoading = false;
    }
    return data as T;
}

export async function requestRaw(meta: RequestMeta): Promise<string> {
    const global = useGlobalStore();

    let data;

    global.updatePageState({
        isLoading: true,
        isError: false,
        isUnderBuilding: false
    });

    try {
        const request = await http(meta.path, {
            method: meta.method
        }).then(responseHandler);

        data = await request.text();
    } catch (error) {
        console.log(error);
    } finally {
        global.pageState.isLoading = false;
    }
    return data as string;
}
