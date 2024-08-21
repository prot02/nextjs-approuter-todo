export type CustomFetchParamType = {
	url: RequestInfo;
	method: string;
	body?: object;
	cache?: RequestCache;
	next?: NextFetchRequestConfig | undefined;
	params?: URLSearchParams;
	headers?: HeadersInit;
};
