import { customFetchParamType, customFetchResponseType } from './schema';

class CustomFetchError extends Error {
	status: number;
	constructor(message: string, status: number) {
		super(message);
		this.status = status;
	}
}

export async function customFetch({
	url,
	method,
	body,
	cache,
	next,
	params,
	headers,
}: customFetchParamType): Promise<customFetchResponseType> {
	const query = new URLSearchParams(params);
	const res = await fetch(`${url}?${query.toString()}`, {
		cache: cache,
		next: next,
		method: method,
		body: JSON.stringify(body),
		headers: headers,
	});

	// json変換時にエラー
	let responseBody;
	try {
		responseBody = await res.json();
	} catch {
		throw new CustomFetchError('レスポンスの解析失敗', res.status);
	}

	// レスポンスがエラー
	if (!res.ok) {
		throw new CustomFetchError(responseBody.message, res.status);
	}

	return { body: responseBody, status: res.status };
}
