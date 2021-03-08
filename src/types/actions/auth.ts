export type responseType<T> = {
    config: any,
    data: any;
    headers: any,
    request: any,
    status: string | number;
    statusText: string
};
