'use client';
import { FCX } from 'react';

const ProfileEdit: FCX = ({ className }) => {
	// zustandで表示状態のステートを持つ。
	// コンポーネントがアンマウントされるときにトグルの初期値リセットの処理を書く
	// 一度トグルリセットを書かないバージョンも試したい
	return <div className={className}></div>;
};
export default ProfileEdit;
