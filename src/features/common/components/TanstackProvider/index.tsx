'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FCX } from 'react';

const TanstackProvider: FCX = ({ children }) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				// staleTime: 60 * 1000,
				retry: false,
				enabled: true, //レンダリング時データをロードする
				refetchOnWindowFocus: false,
			},
		},
	});
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
export default TanstackProvider;
