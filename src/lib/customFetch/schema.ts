export type CustomFetchParamType = {
	url: RequestInfo;
	method: string;
	body?: object;
	cache?: RequestCache;
	next?: NextFetchRequestConfig | undefined;
	params?: string | Record<string, string> | string[][] | URLSearchParams;
	headers?: HeadersInit;
};
