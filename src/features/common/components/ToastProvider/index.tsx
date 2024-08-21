'use client';

import 'react-toastify/dist/ReactToastify.css';
import { FCX } from 'react';
import { ToastContainer } from 'react-toastify';

const ToastProvider: FCX = ({ children }) => {
	return (
		<>
			{children}
			<ToastContainer theme="colored" />
		</>
	);
};
export default ToastProvider;
