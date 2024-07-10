'use client';
import { FCX } from 'react';
import { GoogleButton } from 'src/components/ui-elements';
import { useAuth } from '@/hooks';

const GoogleLoginButton: FCX = ({ className }) => {
	const { signin } = useAuth();
	return <GoogleButton text="Googleアカウントでログイン" onClick={signin} className={className} />;
};
export default GoogleLoginButton;
