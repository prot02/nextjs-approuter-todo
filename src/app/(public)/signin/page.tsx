'use client';

import { useAuth } from '@/hooks';
import Card from 'src/components/ui-parts/Card';

export default function Signin() {
	const { signin } = useAuth();


	/*
		https://note.com/libproc/n/n7d417158843d
		Googleログインのボタンを作成(Robotフォント追加)
		publicの時のレイアウト追加
		signしていてもpublicのデザインを出したいときのことなど考えるレイアウトの問題を考える
	
	*/
	return (
		<div className="w-[600px] mx-auto pt-[120px]">
			<Card>
				<div className="text-3xl font-bold text-center">Sign in</div>
				<div>
					<button onClick={signin}>ログイン</button>
				</div>
			</Card>
		</div>
	);
}
