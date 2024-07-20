'use client';
import { FCX } from 'react';
import { useAuth } from '@/hooks';
import classNames from 'classNames';
import style from './style.module.scss';
// import { CustomImaga } from '@/components/ui-parts';
// import { useAuthStore } from '@/stores';
import Link from 'next/link';

const Header: FCX = ({ className }) => {
	const { signout } = useAuth();
	// const auth = useAuthStore((state) => state.auth);

	return (
		<div className={classNames(className, style.header)}>
			<div className={style.title}>Live Todo</div>
			<div className={style.profile}>
				{/* <CustomImaga className={style.icon} src={null} /> */}
				<div className={style.name}>{'テスト太郎'}</div>

				<div className={style.menu}>
					<ul>
						<li>
							<Link href="/board" className={style.item}>
								ボード
							</Link>
						</li>
						<li>
							<Link href="/profile" className={style.item}>
								プロフィール編集
							</Link>
						</li>
						<li>
							<div onClick={signout} className={style.item}>
								ログアウト
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Header;
