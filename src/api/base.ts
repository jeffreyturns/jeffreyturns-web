import { http, responseHandler } from '@/common/http';
import { useGlobalStore } from '@/stores/global';

export type MethodType = 'GET';

export async function httpJson<T>(path: string, meta: { method: MethodType } = { method: 'GET' }): Promise<T> {
    const global = useGlobalStore();

    let data;

    global.updatePageState({
        isLoading: true,
        isError: false
    });

    try {
        const request = await http(path, {
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

export async function httpText(path: string, meta: { method: MethodType } = { method: 'GET' }): Promise<string> {
    const global = useGlobalStore();

    let data;

    global.updatePageState({
        isLoading: true,
        isError: false
    });

    try {
        const request = await http(path, {
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
