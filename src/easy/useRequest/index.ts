import {useAutoRunPlugin,
    useCachePlugin, useDebouncePlugin, useLoadingDelayPlugin, usePollingPlugin, useRefreshOnWindowFocusPlugin,
    useRetryPlugin, useThrottlePlugin} from "./plugins";

function useRequest<TData, TParams extends any[]>(
    service: Service<TData, TParams>,
    options?: Options<TData, TParams>,
    plugins?: RequestPlugin<TData, TParams>[]
) {
    return useRequestImplement<TData, TParams>(service, options, [
        // 插件列表，用来拓展功能，一般用户不使用。文档中没有看到暴露 API
        ...(plugins || []),
        useDebouncePlugin,
        useLoadingDelayPlugin,
        usePollingPlugin,
        useRefreshOnWindowFocusPlugin,
        useThrottlePlugin,
        useAutoRunPlugin,
        useCachePlugin,
        useRetryPlugin,
    ] as RequestPlugin<TData, TParams>[]);
}

function useRequestImplement<TData, TParams extends any[]>(
    service: Service<TData, TParams>,
    options?: Options<TData, TParams>,
    plugins?: RequestPlugin<TData, TParams>[]
) {}


interface Service<TData, TParams> {

}

interface Options<TData, TParams> {

}

interface RequestPlugin<TData, TParams> {
}
