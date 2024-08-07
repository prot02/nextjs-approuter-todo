export type customFetchParamType = {
	url: RequestInfo;
	method: string;
	body?: object;
	cache?: RequestCache;
	next?: NextFetchRequestConfig | undefined;
	params?: URLSearchParams;
	headers?: HeadersInit;
};

export type customFetchResponseType = {
	body: JSON;
	status: number;
};
