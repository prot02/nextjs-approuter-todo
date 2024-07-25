'use client';
import { FCX } from 'react';
import { useAuthUnset } from './hook';

const AuthStoreUnset: FCX = ({ children }) => {
	useAuthUnset();

	return <>{children}</>;
};
export default AuthStoreUnset;
